import { Div, Title } from "@/style/tags"
import { DeleteIcon, ArrowLeft, PlusIcon, SearchIcon, CancelIcon, CheckIcon, EditIcon } from "@/style/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/common/Button"
import Load from "@/components/common/Load"
import { theme } from "@/style/config"
import api from "@/api"
import { Form, Input, HiddenField } from "@/components/common/Form"
import { useState } from "react"
import { Field, Modal } from "@/components/common/Form"
import utils from "@/utils"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import CardCategory from "../../components/CardCategory"
import Unauthorized from "@/components/responses/Unauthorized"
import Empty from "@/components/responses/Empty"

const AdminCategorias = () => {
    const [modal, setModal] = useState(null)
    const [filter, setFilter] = useState()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const userProfile = api.userProfile()

    if (!userProfile || userProfile.role != api.ROLE_ADMIN) return <Unauthorized />

    const categories = useQuery({
        queryKey: [api.QUERY_CATEGORIES, filter],
        queryFn: async () => await api.getCategories(filter),
    })

    if (categories.error) return (<h1>Erro! Recarregue a página!</h1>)

    const addCategory = useMutation({
        mutationKey: [api.QUERY_CATEGORIES, 'add'],
        mutationFn: async (data) => api.addCategory(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_CATEGORIES] })
            utils.alert('Categoria criado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const editCategory = useMutation({
        mutationKey: [api.QUERY_CATEGORIES, 'edit'],
        mutationFn: async (data) => api.editCategory(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_CATEGORIES] })
            utils.alert('Categoria editado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const deleteCategory = useMutation({
        mutationKey: [api.QUERY_CATEGORIES, 'edit'],
        mutationFn: async (data) => api.deleteCategory(data),
        onSuccess: () => {
            setModal(null)
            queryClient.invalidateQueries({ queryKey: [api.QUERY_CATEGORIES] })
            utils.alert('Categoria deletado com sucesso!', 'success')
        },
        onError: (error) => {
            utils.alert(utils.getError(error), 'error')
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        const json = utils.formToObject(e.target)
        if (utils.empty(modal)) {
            addCategory.mutate(json)
        } else {
            editCategory.mutate(json)
        }
    }

    const searchHandler = (e) => {
        e.preventDefault()
        setFilter(utils.formToObject(e.target)['search'])
    }

    return <>
        {(categories.isPending || addCategory.isPending || editCategory.isPending) && <Load />}
        <Div as={"section"} $flex gap={"10px"}>
            <Div $flex $row gap={'8px'} bottom={'12px'}>
                <SearchIcon />
                <Title>Categorias</Title>
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
                    <Div padding={"16px"}>
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
                                                () => deleteCategory.mutate(modal)
                                            )
                                        }}
                                    ><DeleteIcon />Deletar</Button>
                                </>
                            }
                        </Div>
                        <Form onSubmit={submitHandler}>
                            <Div $flex gap={"8px"}>
                                <HiddenField id={"id"} value={modal && modal.id} />
                                <Field id={"name"} label={"Nome:"} place={"Nome da categoria"} value={modal && modal.name} required={utils.empty(modal)} />
                                <Field id={"tags"} label={"Tags:"} place={"Sep. por vírgula Ex.: moda, roupas, loja..."} value={modal && modal.tags} required={utils.empty(modal)} />
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
                {categories.isSuccess && categories.data.length > 0
                    ? categories.data.map(item => (
                        <CardCategory onClick={() => setModal(item)} key={item.id} data={item} />
                    ))
                    : <Empty />
                }
            </Div>
        </Div>
    </>
}

export default AdminCategorias