import { styled } from "styled-components"
import { Description } from "/src/style/tags"
import { LinkBtn } from "@/components/common/LinkBtn"
import { theme } from "@/style/config"

const Span = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    gap: 1rem;
    text-align: center;
    background: ${theme.root.blueFour};
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
                back={theme.root.blueOne}
                hover={theme.root.blueOneHover}
                color={theme.root.white}
                height={"38px"}
            >
                Entrar
            </LinkBtn>
        </Span>
    )
}

export default ActionsMenu