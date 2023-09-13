import { styled } from "styled-components"
import { ListIcon, ErrorIcon, LoginIcon, ResgisterIcon, HomeIcon }
    from "/src/style/icons"
import { Div, TitleLink, LinkRouter } from "/src/style/tags"

const DivMobile = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    position: absolute;
    height: calc(100vh - 72px);
    width: 70%;
    max-width: 200px;
    background: #D9D9D9;
    top: 72px;
    padding: .5rem 1em;
    gap: .5rem;
    right: ${props => props.visible ? "0px" : "-200px"};
    animation: showMenu .4s;

    @keyframes showMenu {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 70%;
            max-width: 200px;
        }
    }

    @media (min-width: 700px) {
        display: none;
    }

`

const MenuNav = () => {
    return (
        <DivMobile display={"true"} visible>
            <LinkRouter
                to={'/'}
                display={'flex'}
            >
                <HomeIcon fontSize={'27px'} />
                <TitleLink>Home</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'servicos'}
                display={'flex'}
            >
                <ListIcon fontSize={'27px'} />
                <TitleLink>Serviços</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'sobre'}
                display={'flex'}
            >
                <ErrorIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'#'}
                display={'flex'}
            >
                <LoginIcon fontSize={'27px'} />
                <TitleLink>Entrar</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'#'}
                display={'flex'}
            >
                <ResgisterIcon fontSize={'27px'} />
                <TitleLink>Registrar</TitleLink>
            </LinkRouter>
        </DivMobile>
    )
}

export default MenuNav