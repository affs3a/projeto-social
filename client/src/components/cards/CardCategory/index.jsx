import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { theme } from "@/style/config"

const Div = styled(Link)`
    width: 100%;
    max-width: 330px;
    min-width: 280px;
    height: auto;
    border-radius: 10px;
    display: grid;
    padding: 1.25rem;
    color: ${({ theme }) => theme.root.blueTwo};
    border-radius: 6px;
    border: 1px solid rgba(30, 30, 30, 0.22);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
        "category category category"
        "number number number"
    ;
    gap: 6px;
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
    justify-self: center;
    background-color: ${theme.root.blueShadow};
`
const Category = styled.h2`
    font-size: 1.3rem;
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
    color: ${({theme}) => theme.root.blueTwo};
    font-weight: 900;
    border-radius: 2px;
    background: ${({ theme }) => theme.root.blueShadow};
`

const CardCategory = ({ data }) => {
    return (
        <Div to={`/localizar/${data.id}`}>
            <Category>{data.name}</Category>
            <Number>
                <Mark>{data.quantity}</Mark>
                lojas cadastradas
            </Number>
        </Div>
    )
}

export default CardCategory