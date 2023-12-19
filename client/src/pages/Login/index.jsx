import { Div, Title, Form } from "@/style/tags"
import { theme } from "@/style/config"
import { Field } from "./components"
import { Button } from "@/components/common/Button"

const Login = () => {
    return (
        <>
            <Div as={"section"} $flex gap={"10px"}>
                <Title>Login</Title>
                <Form method={'POST'}>
                    <Div $flex gap={'8px'}>
                        <Field id={'username'} label={'Usuário'} />
                        <Field id={'password'} label={'Senha'} type={'password'} />
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
    )
}

export default Login