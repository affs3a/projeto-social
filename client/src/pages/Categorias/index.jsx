import { Div, Title } from "@/style/tags"
import { SearchIcon } from "@/style/icons"
import CardCategory from "@/components/cards/CardCategory"
import { useQuery } from "@tanstack/react-query"
import { Form, Input } from "@/components/common/Form"
import Empty from "@/components/responses/Empty"
import { theme } from "@/style/config"
import { Button } from "@/components/common/Button"
import { useState } from "react"
import utils from "@/utils"
import api from "@/api"


const Categorias = () => {
    const [filter, setFilter] = useState()

    const categories = useQuery({
        queryKey: [api.QUERY_CATEGORIES, filter],
        queryFn: async () => await api.getCategories(filter),
    })

    if (categories.error) return (<h1>Erro! Recarregue a página!</h1>)

    const searchHandler = (e) => {
        e.preventDefault()
        setFilter(utils.formToObject(e.target)['search'])
    }

    return (
        <>
            <Div as={"section"} $flex>
                <Div $flex $row gap={'8px'} bottom={"12px"}>
                    <SearchIcon />
                    <Title>Localizar</Title>
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
                <Div $flex top={"2rem"} gap={"1rem"}>
                    {categories.isSuccess && categories.data.length > 0
                        ? categories.data.map(item => (
                            <CardCategory data={item} />
                        ))
                        : <Empty />
                    }
                </Div>
            </Div>
        </>
    )

}

export default Categorias