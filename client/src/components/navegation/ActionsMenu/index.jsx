import { styled } from "styled-components"
import { Description } from "/src/style/tags"
import { Button } from "/src/components/others/Button"

const Span = styled.span`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    background: #A3A3A3;
    border-radius: 8px;
`

const ActionsMenu = () => {
    return (
        <Span>
            <Description>
                É prestador?
            </Description>
            <Button height="35px" >
                Entrar
            </Button>
            <Button height="35px" >
                Registrar
            </Button>
        </Span>
    )
}

export default ActionsMenu