import { styled } from "styled-components"
import { ListIcon, ErrorIcon, LoginIcon, ResgisterIcon, HomeIcon, CloseIcon }
    from "@/style/icons"
import { Div, TitleLink, LinkRouter } from "@/style/tags"
import { theme } from "@/style/config"

const DivMobile = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    position: absolute;
    height: 100vh;
    width: 70%;
    max-width: 200px;
    background: #fff;
    box-shadow: 0 0 10px ${props => props.$visible ? theme.root.shadow : "transparent"};
    top: 0;
    right: 0;
    padding: .5rem 1em;
    gap: .5rem;
    transform: translateX(${props => props.$visible ? "0px" : "200px"});
    transition: all .5s;
    z-index: 10;

    @media (min-width: 991px) {
        display: none;
    }

`

const MobileCloseIcon = styled(CloseIcon)`
    align-self: self-end;
    margin: 13px 0 14px;
    border-radius: 8px;
`


const MenuNav = ({ $menuVisible, setMenuVisible }) => {

    const showMenuClose = () => setMenuVisible(!$menuVisible)

    return (
        <DivMobile $visible={$menuVisible} >
            <MobileCloseIcon onClick={showMenuClose} fontSize={"30px"} />
            <LinkRouter
                to={'/'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <HomeIcon fontSize={'27px'} />
                <TitleLink>Home</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'servicos'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <ListIcon fontSize={'27px'} />
                <TitleLink>Serviços</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'sobre'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <ErrorIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'login'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <LoginIcon fontSize={'27px'} />
                <TitleLink>Entrar</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'registrar'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <ResgisterIcon fontSize={'27px'} />
                <TitleLink>Registrar</TitleLink>
            </LinkRouter>
        </DivMobile>
    )
}

export default MenuNav