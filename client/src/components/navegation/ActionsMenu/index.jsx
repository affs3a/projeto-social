import { styled } from "styled-components"
import { Description } from "/src/style/tags"
import { Button } from "/src/components/others/Button"

//Icons
import { LoginIcon } from "/src/style/icons"

const Span = styled.span`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
    gap: .5rem;
    width: 100%;
`

const ActionsMenu = () => {
    return (
        <Span>
            <Description display={"none"}>
                É prestador?
            </Description>
            <Button
                fontSize="20px"
                as="a"
                display={"flex"}
                width={"100%"}
                justify={"start"}
            >
                <LoginIcon fontSize={"27px"} />
                Entrar
            </Button>
            <Button
                fontSize="20px"
                as="a"
                display={"flex"}
                width={"100%"}
                justify={"start"}
            >
                <LoginIcon fontSize={"27px"} />
                Registrar
            </Button>
        </Span>
    )
}

export default ActionsMenu