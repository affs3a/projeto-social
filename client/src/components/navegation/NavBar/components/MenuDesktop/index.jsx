import { styled } from "styled-components"
import ActionsMenu from "./components/ActionsMenu"
import { Div, TitleLink, LinkRouter } from "/src/style/tags"

import { ListIcon, ErrorIcon, HomeIcon }
    from "/src/style/icons"


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
            <Div display={'flex'} gap={'1rem'}>
                <LinkRouter
                    display={'flex'}
                    to={'/'}
                >
                    <HomeIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Home
                    </TitleLink>
                </LinkRouter>
                <LinkRouter
                    display={'flex'}
                    to={'servicos'}
                >
                    <ListIcon fontSize={'24px'} />
                    <TitleLink as="p" fontSize={'18px'}>
                        Serviços
                    </TitleLink>
                </LinkRouter>
                <LinkRouter
                    display={'flex'}
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