import { styled } from "styled-components"
import image from "@public/images/icon2.png"
import { Link } from "react-router-dom"

const Div = styled(Link)`
    width: 100%;
    max-width: 330px;
    min-width: 280px;
    height: auto;
    border-radius: 10px;
    display: grid;
    padding: .7rem;
    color: ${({ theme }) => theme.root.blueTwo};
    border-radius: 6px;
    border: 1px solid rgba(30, 30, 30, 0.22);
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
        "image category category"
        "image number number"
    ;
    justify-content: center;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 76px;
    height: 72px;
    border-radius: 8px;
    grid-area: image;
    grid-column: image;
    align-self: center;
    justify-self: center;

`
const Category = styled.h2`
    font-size: 20px;
    grid-area: category;
    align-self: end;
    justify-self: center;
    font-weight: 700;

`

const Number = styled.h3`
    /* background: ${({theme}) => theme.root.blueFive}; */
    grid-area: number;
    font-size: 16px;
    align-self: center;
    text-align: center;
`

const CardCategory = ({ Name, number, endereco }) => {
    return (
        <Div to={'/sobre'}>
            <Image src={image} />
            <Category>Categoria</Category>
            <Number>20 lojas cadastradas</Number>
        </Div>
    )
}

export default CardCategory