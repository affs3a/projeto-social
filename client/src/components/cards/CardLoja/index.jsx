import styled from "styled-components"
import { WhatsIcon } from "@/style/icons"
import { Link } from "react-router-dom"
// import image from "@public/images/inforhome1.jpg"

const Div = styled.div`
    width: 100%;
    height: 210px;
    background-image: url("/public/images/inforhome3.jpg") ;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url(${props => props.image}); */
    border-radius: 10px;
    box-shadow: 0px -70px 30px 0px rgba(0, 0, 0, 0.57) inset,
    5px 5px 7px 1px rgba(0,0,0,0.3) 
    ;
    color: ${({ theme }) => theme.root.white};
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
        "nome whatsapp"
    ;

`
const Nome = styled.h3`
    font-size: 1.2rem;
    font-weight: 800;
    grid-area: nome;
    align-self: self-end;
`

const Span = styled(Link)`
    display: flex;
    width: 100%;
    grid-area: whatsapp;
    align-self: self-end;
    justify-content: right;
    gap: 5px;
    color: ${({ theme }) => theme.root.white};
`


const CardLoja = ({ nome, link, whatsapp, image }) => {
    return (
        <Div /*image={image}*/>
            <Nome>Nome da Loja</Nome>
            <Span
                to={''}
                target="_blank"
            >
                <WhatsIcon />
                <Nome>Whatsapp</Nome>
            </Span>
        </Div>
    )
}

export default CardLoja