import { styled } from "styled-components"
import ActionsMenu from "./components/ActionsMenu"
import { Div, TitleLink, LinkRouter } from "@/style/tags"

import { ListIcon, InfoIcon, HomeIcon }
    from "@/style/icons"


const DivDesktop = styled(Div)`
    display: none;

    @media (min-width: 991px) {
        gap: 1rem;
        display: flex;
        flex-direction: row;
        width: auto;
    }
`

const MenuDesktop = () => {
    return (
        <DivDesktop>
            <Div $flex $row gap={'1rem'}>
                <LinkRouter
                    $flex={true}
                    to={'/'}
                >
                    <HomeIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Home
                    </TitleLink>
                </LinkRouter>
                <LinkRouter
                    $flex={true}
                    to={'localizar'}
                >
                    <ListIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Localizar
                    </TitleLink>
                </LinkRouter>
                <LinkRouter
                    $flex={true}
                    to={'sobre'}
                >
                    <InfoIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Sobre
                    </TitleLink>
                </LinkRouter>
            </Div>
            <ActionsMenu />
        </DivDesktop>
    )
}

export default MenuDesktop