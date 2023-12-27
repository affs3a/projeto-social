import { Div, Title } from "@/style/tags"
import { SearchIcon } from "@/style/icons"
import CardCategory from "@/components/cards/CardCategory"

const Categorias = () => {
    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'}>
                <SearchIcon />
                <Title>Categorias</Title>
            </Div>
            <CardCategory />
        </Div>
    </>
}

export default Categorias