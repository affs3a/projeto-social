import { Div, Title } from "@/style/tags"
import { SearchIcon } from "@/style/icons"
import image from "@public/images/tools.svg"
import CardCategory from "@/components/cards/CardCategory"

const Categorias = () => {
    const  example = {
        id: 1,
        icon: image,
        name: "Rachadores",
        quantity: 5,
    }
    return (
        <>
            <Div as={"section"} $flex>
                <Div $flex $row gap={'8px'}>
                    <SearchIcon />
                    <Title>Categorias</Title>
                </Div>
                <Div $flex top={"2rem"} gap={"1rem"}>
                    <CardCategory data={example} />
                    <CardCategory data={example} />
                    <CardCategory data={example} />
                </Div>
            </Div>
        </>
    )

}

export default Categorias