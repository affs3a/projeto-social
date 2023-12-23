import { Div, Title } from "@/style/tags"
import { ConfigIncon, SearchIcon, PeopleIcon, Arrowicon, ListIcon } from "@/style/icons"
import api from "@/api"
import CardAdmin from "../../components/cards/CardAdmin"


const Admin = () => {
    const userProfile = api.userProfile()

    return <>
        <Div as={"section"} $flex gap={"10px"}>
            {userProfile && userProfile.role == api.ROLE_ADMIN ? (
                <>
                    <Div $flex $row gap={'8px'} bottom={'12px'}>
                        <ConfigIncon />
                        <Title>Administração</Title>
                    </Div>
                    <Div $flex gap={'8px'}>
                        <CardAdmin
                            link={"usuarios"}
                            IconOne={PeopleIcon}
                            text={"Usuários"}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
                        <CardAdmin
                            link={"servicos"}
                            IconOne={ListIcon}
                            text={"Serviços"}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
                        <CardAdmin
                            link={"categorias"}
                            IconOne={SearchIcon}
                            text={"Categorias"}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
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

export default Admin