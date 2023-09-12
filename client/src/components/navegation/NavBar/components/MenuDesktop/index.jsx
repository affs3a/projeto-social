import { styled } from "styled-components"
import ActionsMenu from "./components/ActionsMenu"
import { Div, TitleLink } from "/src/style/tags"

import { ListIcon, ErrorIcon }
    from "/src/style//icons"

const Link = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: .3rem;
    gap: .3rem;
`


const DivDesktop = styled(Div)`
    display: none;

    @media (min-width: 700px) {
        display: flex;
        gap: 1rem;

    }
`

const MenuDesktop = () => {
    return (
        <DivDesktop>
            <Div flex={"flex"} gap={"1rem"}>
                <Link>
                    <ListIcon fontSize={'24px'} />
                    <TitleLink
                        as="p"
                        fontSize={"18px"}>
                        Serviços
                    </TitleLink>
                </Link>
                <Link>
                    <ErrorIcon fontSize={'24px'} />
                    <TitleLink
                        as="p"
                        fontSize={"18px"}>
                        Sobre
                    </TitleLink>
                </Link>
            </Div>
            <ActionsMenu />
        </DivDesktop>
    )
}

export default MenuDesktop