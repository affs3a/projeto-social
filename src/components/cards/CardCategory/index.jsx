import { styled } from "styled-components"
import { Title } from "@/style/tags"

const Div = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: auto auto auto;
`

const Image = styled.img`
    width: 76px;
    height: 72px;
    border-radius: 8px;
`
const Category = styled.h2`
    font-size: 20px;
`

const Number = styled.h3`
    font-size: 20px;
`

const CardCategory = ({ Name, number }) => {
    return (
        <Div>
            <Image src="./public/logo.png" />
            <Category>Categoria</Category>
            <Number>20</Number>
            <Title as={"h4"} >lojas cadastradas</Title>
        </Div>
    )
}

export default CardCategory