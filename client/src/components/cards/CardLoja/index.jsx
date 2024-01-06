import styled from "styled-components"
import { WhatsIcon, ArrowRight } from "@/style/icons"
import api from "@/api"
import { theme } from "@/style/config"

const Div = styled.div`
    width: 100%;
    height: 210px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.image || "linear-gradient(35deg, #999, #444)"});
    border-radius: 10px;
    box-shadow: 0px -70px 50px 0px rgba(0, 0, 0, 0.47) inset,
    5px 5px 7px 1px rgba(0,0,0,0.3) ;
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
    font-weight: 900;
    grid-area: nome;
    align-self: self-end;
`

const Span = styled.a`
    display: flex;
    width: 100%;
    grid-area: whatsapp;
    align-self: self-end;
    justify-content: right;
    gap: 5px;
    color: ${({ theme }) => theme.root.white};
`

const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${theme.root.shadow};
    padding: 4px 8px;
    border-radius: 30px;
`


const CardLoja = ({ data }) => {
    const images = data.images ? JSON.parse(data.images) : null
    return (
        <Div image={images && (api.media_path + images[0])}>
            <Nome>{data.name}</Nome>
            <Span
                href={`${api.whats_client}${data.whatsapp}`}
                target="_blank"
            >
                <Container>
                    <WhatsIcon fontSize={"27px"} />
                    <ArrowRight fontSize={"24px"} />
                </Container>
            </Span>
        </Div>
    )
}

export default CardLoja