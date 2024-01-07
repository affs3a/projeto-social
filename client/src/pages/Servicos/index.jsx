import { Div, Title } from "@/style/tags"
import { SearchIcon, ArrowLeft } from "@/style/icons"
import { Form, Input } from "@/components/common/Form"
import { Button } from "@/components/common/Button"
import { theme } from "@/style/config"
import { useNavigate, useParams } from "react-router-dom"
import Empty from "@/components/responses/Empty"
import Error from "@/components/responses/Error"
import Load from "@/components/common/Load"
import { useState } from "react"
import utils from "@/utils"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import CardLoja from "@/components/cards/CardLoja"
import api from "@/api"
import { Mark } from "@/components/common/Typing"

const Servicos = () => {
    const [filter, setFilter] = useState()
    const { id } = useParams()
    const navigate = useNavigate();

    const category = useQuery({
        queryKey: [api.QUERY_CATEGORIES, 'one'],
        queryFn: async () => await api.getCategory(id),
    })

    const services = useQuery({
        queryKey: [api.QUERY_SERVICES, filter],
        queryFn: async () => await api.getServices(filter, id),
    })

    const searchHandler = (e) => {
        e.preventDefault()
        setFilter(utils.formToObject(e.target)['search'])
    }

    return <>
        {(services.isPending || category.isPending) && <Load />}
        {!services.isError ? (
            <Div as={"section"} $flex>
                <Div $flex $row gap={'8px'} bottom={'12px'}>
                    <SearchIcon />
                    <Title>Serviços</Title>
                    <Button
                        margin={'0 0 0 16px'}
                        back={theme.root.blueShadow}
                        hover={theme.root.shadow}
                        height={"34px"}
                        onClick={() => navigate('/localizar')}
                    ><ArrowLeft />Voltar</Button>
                </Div>
                <Form onSubmit={searchHandler} $flex maxwidth={"330px"}>
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
                {category.isSuccess && (
                    <Div top={"1rem"} $flex>
                        <Mark padding={"4px 10px"}>{category.data.name}</Mark>
                    </Div>
                )}
                <Div $flex top={"1rem"} gap={"1rem"}>
                    {services.isSuccess && services.data.length > 0
                        ? services.data.map((item, key) => (
                            <CardLoja data={item} key={key} />
                        ))
                        : <Empty />
                    }
                </Div>
            </Div>
        ) : <Error />}
    </>
}

export default Servicos