import { Div, Title } from "@/style/tags"
import { SearchIcon } from "@/style/icons"
import CardCategory from "@/components/cards/CardCategory"

const Categorias = () => {
    return (
        <>
            <Div as={"section"} $flex>
                <Div $flex $row gap={'8px'}>
                    <SearchIcon />
                    <Title>Categorias</Title>
                </Div>
                <Div $flex top={"2rem"} gap={"1rem"}>
                    <CardCategory />
                    <CardCategory />
                    <CardCategory />
                </Div>
            </Div>
        </>
    )

}

export default Categorias