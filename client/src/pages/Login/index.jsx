import { Div, Title } from "@/style/tags"
import { Form, Field } from "@/components/common/Form"
import { theme } from "@/style/config"
import { Button } from "@/components/common/Button"
import { LoginIcon } from "@/style/icons"
import Logo from "@/components/common/Logo"
import LogoSec from "@public/images/icon.png"
import Load from "../../components/common/Load"
import { useState } from "react"
import api from "../../api"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import utils from "../../utils"

const Login = () => {
    const alert = withReactContent(Swal)
    const [loading, setLoading] = useState(false)
    const navigateTo = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const credentials = {
            username: formData.get('username'),
            password: formData.get('password')
        }
        setLoading(true)
        api.login(
            credentials,
            (object) => { 
                const { response, error } = object
                if (response) {
                    alert.fire({
                        title: 'Bem Vindo!',
                        html: 'Login realizado com sucesso.',
                        icon: 'success',
                    })
                    navigateTo('/')

                } else if (error) {
                    const {response: { data }} = error
                    alert.fire({
                        title: 'Erro!',
                        html: utils.makeMessage(data),
                        icon: 'error',
                    })
                }

                setLoading(false)
            }
        )
    }

    return <>
        {loading && <Load />}
        <Div as={"section"} $flex gap={"10px"} top={'auto'} bottom={'auto'}>
            <Div>
                <Logo src={LogoSec} pure width={'90px'} bottom={'16px'} />
                <Div $flex $row gap={'8px'}>
                    <LoginIcon />
                    <Title>Login</Title>
                </Div>
            </Div>
            <Form onSubmit={submitHandler} method={'POST'}>
                <Div $flex gap={'8px'}>
                    <Field id={'username'} label={'Usuário'} required />
                    <Field id={'password'} label={'Senha'} type={'password'} required />
                    <Button
                        $bold
                        margin={'8px 0 0 0'}
                        width={'100%'}
                        height={'48px'}
                        fontSize={'16px'}
                        color={theme.root.white}
                        back={theme.root.blueOne}
                        hover={theme.root.blueOneHover}
                        type={'submit'}
                    >
                        Entrar
                    </Button>
                </Div>
            </Form>
        </Div>
    </>
}

export default Login