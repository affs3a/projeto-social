import { styled } from "styled-components"
import { Description } from "/src/style/tags"
import { LinkBtn } from "@/components/common/LinkBtn"

const Span = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    gap: 1rem;
    text-align: center;
    background: #bbb7b7;
    padding: .5rem 1rem;
`

const ActionsMenu = () => {
    return (
        <Span>
            <Description>
                Prestador?
            </Description>
            <LinkBtn
                to={'login'}
                fontSize="16px"
                justify={"start"}
                back={"#f9f9f9"}
                hover={"#e9e9e9"}
                height={"35px"}
            >
                Entrar
            </LinkBtn>
            <LinkBtn
                to={'registro'}
                fontSize="16px"
                as="a"
                justify={"start"}
                back={"#f9f9f9"}
                hover={"#e9e9e9"}
                height={"35px"}
            >
                Registrar
            </LinkBtn>
        </Span>
    )
}

export default ActionsMenu