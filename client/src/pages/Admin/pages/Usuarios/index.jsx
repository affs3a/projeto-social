import { Div, Title } from "@/style/tags"
import { PeopleIcon, ArrowLeft } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import { theme } from "@/style/config"
import api from "@/api"

const Usuarios = () => {
    const navigate = useNavigate()
    const userProfile = api.userProfile()

    return <>
        <Div as={"section"} $flex gap={"10px"}>
            {userProfile && userProfile.role == api.ROLE_ADMIN ? (
                <>
                    <Div $flex $row gap={'8px'} bottom={'12px'}>
                        <PeopleIcon />
                        <Title>Usuários</Title>
                        <Button
                            margin={'0 0 0 16px'}
                            back={theme.root.blueShadow}
                            hover={theme.root.shadow}
                            height={"36px"}
                            onClick={() => navigate('/admin')}
                        ><ArrowLeft />Voltar</Button>
                    </Div>
                    <Div $flex gap={'8px'}>
                       
                    </Div>
                </>
            ) : (
                <>
                    <Div $flex gap={'8px'}>
                        <Title>Você não tem permissão para acessar esta rota!</Title>
                    </Div>
                </>
            )}

        </Div>
    </>
}

export default Usuarios