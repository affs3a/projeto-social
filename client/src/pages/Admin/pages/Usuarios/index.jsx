import { Div, Title } from "@/style/tags"
import { PeopleIcon, ArrowLeft, PlusIcon, SearchIcon } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import Unauthorized from "@/components/responses/Unauthorized"
import Load from "@/components/common/Load"
import { theme } from "@/style/config"
import api from "@/api"
import CardUser from "@/components/cards/CardUser"
import { Form, Input } from "@/components/common/Form"

const Usuarios = () => {
    const navigate = useNavigate()
    const userProfile = api.userProfile()

    if (!userProfile) return <Unauthorized />

    const { data, isPending, error } = userProfile ? api.getUsers() : {}

    if (error) {
        // TODO
    }

    return <>
        {isPending && <Load />}
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
                            height={"34px"}
                            onClick={() => navigate('/admin')}
                        ><ArrowLeft />Voltar</Button>
                    </Div>
                    <Div $flex $row gap={'4px'} bottom={'12px'}>
                        <Button
                            back={theme.root.blueOne}
                            hover={theme.root.blueOneHover}
                            color={theme.root.white}
                            height={"36px"}
                        ><PlusIcon />Adicionar</Button>
                        <Form $flex maxWidth={"300px"}>
                            <Div $row $flex justify={"right"} gap={"4px"}>
                                <Input
                                    padding={"6px"}
                                    type={"search"}
                                    placeholder={"Localizar"}
                                />
                                <Button
                                    type={"submit"}
                                    back={theme.root.white}
                                    border={theme.root.shadow}
                                    hover={theme.root.blueShadowTwo}
                                    height={"38px"}
                                ><SearchIcon /></Button>
                            </Div>
                        </Form>
                    </Div>
                    <Div $flex gap={'8px'}>
                        {!isPending && data.map(item => (
                            <CardUser key={item.id} data={item} />
                        ))}
                    </Div>
                </>
            ) : (
                <Unauthorized />
            )}
        </Div>
    </>
}

export default Usuarios