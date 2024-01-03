import { styled } from "styled-components"
import { Link } from "react-router-dom"
import placeholder from "@public/images/icon2.png"
import { theme } from "@/style/config"

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
    padding: 16px;
    border-radius: 8px;
    grid-area: image;
    grid-column: image;
    align-self: center;
    justify-self: left;
    background-color: ${theme.root.blueShadow};
`
const Category = styled.h2`
    font-size: 22px;
    grid-area: category;
    align-self: end;
    justify-self: center;
    font-weight: 700;

`

const Number = styled.h3`
    grid-area: number;
    font-size: 16px;
    align-self: center;
    text-align: center;
`

const Mark = styled.div`
    display: inline;
    margin-right: 6px;
    padding: 0 4px;
    font-size: 15px;
    color: white;
    font-weight: 900;
    border-radius: 4px;
    background: ${({ theme }) => theme.root.blueOne};
`

const CardCategory = ({ data }) => {
    return (
        <Div to={`/localizar/${data.id}`}>
            <Image src={data.icon ?? placeholder}></Image>
            <Category>Categoria</Category>
            <Number>
                <Mark>20</Mark>
                lojas cadastradas
            </Number>
        </Div>
    )
}

export default CardCategory