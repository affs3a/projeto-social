import { Div, Title } from "@/style/tags"
import { ConfigIncon, ErrorInfo } from "@/style/icons"
import api from "@/api"

const Prestador = () => {
    const userProfile = api.userProfile()

    return <>
        <Div as={"section"} $flex gap={"10px"}>
            {userProfile && userProfile.role == api.ROLE_PROVIDER ? (
                <>
                    <Div $flex $row gap={'8px'}>
                        <ConfigIncon />
                        <Title>Prestador</Title>
                    </Div>
                    <Div>
                        
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

export default Prestador