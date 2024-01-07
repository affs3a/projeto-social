import { Div, Title } from "@/style/tags"
import { DeleteIcon, ArrowLeft, PlusIcon, ListIcon, SearchIcon, CancelIcon, CheckIcon, EditIcon } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import Load from "@/components/common/Load"
import { theme } from "@/style/config"
import { Form, Input, HiddenField, Option } from "@/components/common/Form"
import { useState } from "react"
import { Field, Modal, SelectField, TextField } from "@/components/common/Form"
import utils from "@/utils"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import CardService from "@/pages/Admin/components/CardService"
import Unauthorized from "@/components/responses/Unauthorized"
import Empty from "@/components/responses/Empty"
import api from "@/api"
import { FileField } from "@/components/common/Form"

const AdminServicos = () => {
    const [modal, setModal] = useState(null)
    const [filter, setFilter] = useState()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const userProfile = api.userProfile()

    if (!userProfile || userProfile.role != api.ROLE_ADMIN) return <Unauthorized />

    const services = useQuery({
        queryKey: [api.QUERY_SERVICES, filter],
        queryFn: async () => await api.getServices({search: filter}),
    })

    const users = useQuery({
        queryKey: [api.QUERY_USERS],
        queryFn: async () => await api.getUsers(),
    })

    const categories = useQuery({
        queryKey: [api.QUERY_CATEGORIES],
        queryFn: async () => await api.getCategories(),
    })

    const addService = useMutation({
        mutationKey: [api.QUERY_SERVICES, 'add'],
        mutationFn: async (data) => api.addService(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_SERVICES] })
            utils.alert('Serviço criado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const editService = useMutation({
        mutationKey: [api.QUERY_SERVICES, 'edit'],
        mutationFn: async (data) => api.editService(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_SERVICES] })
            utils.alert('Serviço editado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const deleteService = useMutation({
        mutationKey: [api.QUERY_SERVICES, 'edit'],
        mutationFn: async (data) => api.deleteService(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_SERVICES] })
            utils.alert('Serviço deletado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        const fileData = utils.formWithFilesToObject(e.target, "images")
        const json = utils.formToObject(await Promise.resolve(fileData), true)

        if (utils.empty(modal)) {
            addService.mutate(json)
        } else {
            editService.mutate(json)
        }
    }

    const searchHandler = (e) => {
        e.preventDefault()
        setFilter(utils.formToObject(e.target)['search'])
    }

    return <>
        {(services.isPending || addService.isPending || editService.isPending || categories.isPending) && <Load />}
        {!services.isError ? (
            <Div as={"section"} $flex gap={"10px"}>
                <Modal $visible={modal != null}>
                        <Div>
                            <Div $flex $row gap={'8px'} bottom={'6px'}>
                                {utils.empty(modal)
                                    ? <>
                                        <PlusIcon fontSize={"30px"} />
                                        <Title align={'center'}>Adicionar</Title>
                                    </>
                                    : <>
                                        <EditIcon fontSize={"26px"} />
                                        <Title align={'center'}>Editar</Title>
                                        <Button
                                            margin={'0 0 0 16px'}
                                            back={theme.root.redOne}
                                            hover={theme.root.redOneHover}
                                            height={"34px"}
                                            onClick={() => {
                                                utils.alertAction(
                                                    'Tem certeza que deseja deletar?',
                                                    'deletar',
                                                    () => deleteService.mutate(modal)
                                                )
                                            }}
                                        ><DeleteIcon />Deletar</Button>
                                    </>
                                }
                            </Div>
                            <Form onSubmit={submitHandler}>
                                <Div $flex gap={"8px"}>
                                    <HiddenField id={"id"} value={modal && modal.id} />
                                    <Field id={"name"} label={"Nome:"} place={"Nome do serviço"} value={modal && modal.name} required={utils.empty(modal)} />
                                    <Field id={"identifier"} label={"Identificador:"} place={"Identificador único"} value={modal && modal.identifier} required={utils.empty(modal)} />
                                    <TextField id={"description"} label={"Descrição:"} place={"Informações do serviço"} text={modal && modal.description} required={utils.empty(modal)} />
                                    <Field id={"whatsapp"} label={"Whatsapp:"} place={"Número do celular"} value={modal && modal.whatsapp} />
                                    <Field id={"instagram"} label={"Instagram:"} place={"Instagram do serviço"} value={modal && modal.instagram} />
                                    <FileField id={"images"} label={"Fotos (até 3):"} max={3} mimes={utils.imageMimes()} multiple />
                                    <SelectField id={"category"} label={"Categoria:"}>
                                        {categories.isSuccess && categories.data.map(item => (
                                            <Option key={item.id} value={item.id} selected={modal && modal.category == item.id}>{item.name}</Option>
                                        ))}
                                    </SelectField>
                                    <SelectField id={"owner"} label={"Usuário Possuidor:"}>
                                        {users.isSuccess && users.data.map(item => (
                                            <Option key={item.id} value={item.id} selected={modal && modal.owner == item.id}>{item.username}</Option>
                                        ))}
                                    </SelectField>
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
                <Div $flex $row gap={'8px'} bottom={'12px'}>
                    <ListIcon />
                    <Title>Serviços</Title>
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
                        onClick={() => setModal({})}
                    ><PlusIcon />Adicionar</Button>
                    <Form onSubmit={searchHandler} $flex maxwidth={"300px"}>
                        <Div $row $flex justify={"right"} gap={"4px"}>
                            <Input
                                padding={"6px"}
                                type={"search"}
                                name={"search"}
                                id={"search"}
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
                    {services.isSuccess && users.isSuccess && categories.isSuccess && services.data.length > 0
                        ? services.data.map((item, key) => (
                            <CardService onClick={() => setModal(item)}
                            key={key}
                            data={item}
                            dataset={{
                                owner: users.data.find(user=>user.id===item.owner),
                                category: categories.data.find(categ=>categ.id===item.category)
                            }}/>
                        ))
                        : <Empty />
                    }
                </Div>
            </Div>
        ) : (
            <Error />
        )}
    </>
}

export default AdminServicos