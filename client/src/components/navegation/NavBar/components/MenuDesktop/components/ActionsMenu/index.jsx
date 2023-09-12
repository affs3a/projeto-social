import { styled } from "styled-components"
import { Description } from "/src/style/tags"
import { Button } from "/src/components/others/Button"

const Span = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    gap: 1rem;
    width: 100%;
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
            <Button
                fontSize="18px"
                as="a"
                justify={"start"}
                back={"#f9f9f9"}
                height={"40px"}
            >
                Entrar
            </Button>
            <Button
                fontSize="18px"
                as="a"
                justify={"start"}
                back={"#f9f9f9"}
                height={"40px"}
            >
                Registrar
            </Button>
        </Span>
    )
}

export default ActionsMenu