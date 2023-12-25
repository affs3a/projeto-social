import { Div, Title } from "@/style/tags"
import { PeopleIcon, ArrowLeft, PlusIcon, SearchIcon, CancelIcon, CheckIcon } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import Unauthorized from "@/components/responses/Unauthorized"
import Load from "@/components/common/Load"
import { theme } from "@/style/config"
import api from "@/api"
import CardUser from "@/components/cards/CardUser"
import { Form, Input } from "@/components/common/Form"
import { useState } from "react"
import { Field, Modal, Option, SelectField } from "../../../../components/common/Form"

const Usuarios = () => {
    const navigate = useNavigate()
    const roles = api.getProfiles()
    const userProfile = api.userProfile()

    const [modal, setModal] = useState(null)

    if (!userProfile) return <Unauthorized />

    const { data, isPending, error } = api.getUsers()

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
                        <Modal $visible={modal != null}>
                            <Div back={theme.root.white} padding={"16px"} radius={"8px"}>
                                <Form>
                                    <Div $flex gap={"8px"}>
                                        <Field id={"name"} label={"Nome:"} place={"Nome do usuário"} value={modal && modal.name} />
                                        <Field id={"username"} label={"Username:"} place={"Identificação única"} value={modal && modal.username} />
                                        <Field id={"email"} label={"Email:"} place={"Email de contato"} type={"email"} value={modal && modal.username} />
                                        <SelectField id={"role"} label={"Perfil:"}>
                                            {Object.keys(roles).map(item => (
                                                <Option key={item} value={item} selected={modal && modal.role == item}>{roles[item]}</Option>
                                            ))}
                                        </SelectField>
                                        <Field id={"password"} label={"Senha:"} type={"password"} place={"Senha da conta"} />
                                        <Field id={"confirm"} label={"Confirm. Senha:"} type={"password"} place={"Repita a senha"} />
                                        <Field id={"phone"} label={"Telefone:"} place={"Telefone de contato"} value={modal && modal.phone} />
                                        <Div $flex $row top={"8px"} gap={"8px"}>
                                            <Button
                                                type={"button"}
                                                back={theme.root.blueShadow}
                                                hover={theme.root.shadow}
                                                height={"40px"}
                                                width={"100%"}
                                                onClick={() => setModal(null)}
                                            ><CancelIcon />Cancelar</Button>
                                            <Button
                                                back={theme.root.blueOne}
                                                hover={theme.root.blueOneHover}
                                                color={theme.root.white}
                                                height={"40px"}
                                                width={"100%"}
                                            ><CheckIcon />Enviar</Button>
                                        </Div>
                                    </Div>
                                </Form>
                            </Div>
                        </Modal>
                        <Button
                            back={theme.root.blueOne}
                            hover={theme.root.blueOneHover}
                            color={theme.root.white}
                            height={"36px"}
                            onClick={() => setModal({})}
                        ><PlusIcon />Adicionar</Button>
                        <Form $flex maxwidth={"300px"}>
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
                            <CardUser onClick={() => setModal(item)} key={item.id} data={item} />
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