import { Div, Title } from "@/style/tags"
import { PeopleIcon, ArrowLeft, PlusIcon, SearchIcon, CancelIcon, CheckIcon, EditIcon } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import Unauthorized from "@/components/responses/Unauthorized"
import Load from "@/components/common/Load"
import { theme } from "@/style/config"
import api from "@/api"
import CardUser from "@/components/cards/CardUser"
import { Form, Input, HiddenField } from "@/components/common/Form"
import { useState } from "react"
import { Field, Modal, Option, SelectField } from "@/components/common/Form"
import utils from "@/utils"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

const Usuarios = () => {
    const [modal, setModal] = useState(null)
    const queryClient = api.queryClient()
    const alert = withReactContent(Swal)
    const navigate = useNavigate()
    const roles = api.getProfiles()
    const userProfile = api.userProfile()

    if (!userProfile) return <Unauthorized />

    const users = api.getUsers()
    const addUser = api.addUser()
    const editUser = api.editUser()

    if (users.error) return (<h1>Erro! Recarregue a página!</h1>)

    const submitHandler = (e) => {
        const json = utils.formToObject(e.target)
        e.preventDefault()
        if (utils.empty(modal)) {
            if (json.password === json.confirm) {
                addUser.mutate(json, {
                    onSuccess: () => {
                        queryClient.invalidateQueries({ queryKey: [api.users_key] })
                        alert.fire({
                            title: 'Sucesso!',
                            html: 'Usuário adicionado com sucesso.',
                            icon: 'success',
                        })
                        setModal(null)
                    },
                    onError: () => {
                        alert.fire({
                            title: 'Erro!',
                            html: utils.makeMessage(utils.getError(addUser)),
                            icon: 'error',
                        })
                    }
                })
            } else {
                alert.fire({
                    title: 'Alerta!',
                    html: 'Senhas não conferem!',
                    icon: 'warning',
                })
            }
        } else {
            if (json.password === json.confirm) {
                editUser.mutate(json, {
                    onSuccess: () => {
                        queryClient.invalidateQueries({ queryKey: [api.users_key] })
                        alert.fire({
                            title: 'Sucesso!',
                            html: 'Usuário atualizado com sucesso.',
                            icon: 'success',
                        })
                        setModal(null)
                    },
                    onError: () => {
                        alert.fire({
                            title: 'Erro!',
                            html: utils.makeMessage(utils.getError(editUser)),
                            icon: 'error',
                        })
                    }
                })
            } else {
                alert.fire({
                    title: 'Alerta!',
                    html: 'Senhas não conferem!',
                    icon: 'warning',
                })
            }
        }
    }

    return <>
        {(users.isPending || addUser.isPending || editUser.isPending) && <Load />}
        <Div as={"section"} $flex gap={"10px"}>
            {userProfile.role == api.ROLE_ADMIN ? (
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
                                <Div $flex $row gap={'8px'} bottom={'6px'}>
                                    {utils.empty(modal)
                                        ? (<><PlusIcon fontSize={"30px"} /></>)
                                        : (<><EditIcon fontSize={"26px"} /></>)}
                                    <Title align={'center'}>
                                        {utils.empty(modal)
                                            ? (<>Adicionar</>)
                                            : (<>Editar</>)}
                                    </Title>
                                </Div>
                                <Form onSubmit={submitHandler}>
                                    <Div $flex gap={"8px"}>
                                        <HiddenField id={"id"} value={modal && modal.id} />
                                        <Field id={"name"} label={"Nome:"} place={"Nome do usuário"} value={modal && modal.name} required={utils.empty(modal)} />
                                        <Field id={"username"} label={"Username:"} place={"Identificação única"} value={modal && modal.username} required={utils.empty(modal)} />
                                        <Field id={"email"} label={"Email:"} place={"Email de contato"} type={"email"} value={modal && modal.email} required={utils.empty(modal)} />
                                        <SelectField id={"role"} label={"Perfil:"}>
                                            {Object.keys(roles).map(item => (
                                                <Option key={item} value={item} selected={modal && modal.role == item}>{roles[item]}</Option>
                                            ))}
                                        </SelectField>
                                        <Field id={"password"} label={"Senha:"} type={"password"} place={"Senha da conta"} value={modal && modal.password} required={utils.empty(modal)} />
                                        <Field id={"confirm"} label={"Confirm. Senha:"} type={"password"} place={"Repita a senha"} value={modal && modal.password} required={utils.empty(modal)} />
                                        <Field id={"phone"} label={"Telefone:"} place={"Telefone de contato"} value={modal && modal.phone} required={modal == {}} />
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
                                                type={"submit"}
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
                        {users.isSuccess && users.data.map(item => (
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