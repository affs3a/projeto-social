import { styled } from "styled-components"
import ActionsMenu from "./components/ActionsMenu"
import { Div, TitleLink, LinkRouter } from "/src/style/tags"

import { ListIcon, ErrorIcon, HomeIcon }
    from "/src/style/icons"


const DivDesktop = styled(Div)`
    display: none;

    @media (min-width: 991px) {
        display: flex;
        gap: 1rem;

    }
`

const MenuDesktop = () => {
    return (
        <DivDesktop>
            <Div $flex={true} gap={'1rem'}>
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
                    to={'servicos'}
                >
                    <ListIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Serviços
                    </TitleLink>
                </LinkRouter>
                <LinkRouter
                    $flex={true}
                    to={'sobre'}
                >
                    <ErrorIcon fontSize={'24px'} />
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