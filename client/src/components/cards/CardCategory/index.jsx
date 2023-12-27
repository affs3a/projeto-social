import { styled } from "styled-components"
import image from "@public/images/icon2.png"
import { Link } from "react-router-dom"

const Div = styled(Link)`
    width: 100%;
    min-width: 300px;
    height: 100px;
    border-radius: 8px;
    display: grid;
    padding: 1rem;
    color: ${({theme}) => theme.root.blueTwo};
    border-radius: 6px;
    border: 1px solid rgba(30, 30, 30, 0.22);
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    grid-template-columns: auto-fit;
    grid-template-areas: 
        "image category category"
        "image number lojas"
    ;
    justify-content: center;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 76px;
    height: 72px;
    border-radius: 8px;
    grid-area: image;
    align-self: center;
    margin-right: 2rem;
`
const Category = styled.h2`
    font-size: 20px;
    grid-area: category;
    align-self: center;
    justify-self: center;
    font-weight: 700;

`

const Number = styled.h3`
    grid-area: number;
    font-size: 20px;
`

const Title = styled.h4`
    grid-area: lojas;
    font-size: 20px;

`

const CardCategory = ({ Name, number }) => {
    return (
        <Div>
            <Image src={image} />
            <Category>Categoria</Category>
            <Number>20</Number>
            <Title>lojas cadastradas</Title>
        </Div>
    )
}

export default CardCategory