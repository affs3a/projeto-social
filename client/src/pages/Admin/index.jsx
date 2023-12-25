import { Div, Title } from "@/style/tags"
import { ConfigIncon, SearchIcon, PeopleIcon, Arrowicon, ListIcon } from "@/style/icons"
import Unauthorized from "@/components/responses/Unauthorized"
import api from "@/api"
import CardAdmin from "../../components/cards/CardAdmin"
import { Modal } from "../../components/common/Form"


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
                            desc={"Gerenciamento de usuários."}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
                        <CardAdmin
                            link={"servicos"}
                            IconOne={ListIcon}
                            text={"Serviços"}
                            desc={"Gerenciamento de serviços."}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
                        <CardAdmin
                            link={"categorias"}
                            IconOne={SearchIcon}
                            text={"Categorias"}
                            desc={"Gerenciamento de categorias."}
                            IconTwo={Arrowicon}
                            color={"#fff"}
                        />
                    </Div>
                </>
            ) : (
                <Unauthorized />
            )}

        </Div>
    </>
}

export default Admin