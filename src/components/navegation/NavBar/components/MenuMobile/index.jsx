import { styled } from "styled-components"
import { ListIcon, ErrorIcon, LoginIcon, ResgisterIcon, HomeIcon, CloseIcon }
    from "@/style/icons"
import { Div, TitleLink, LinkRouter } from "@/style/tags"

const DivMobile = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    position: absolute;
    height: 100vh;
    width: 70%;
    max-width: 200px;
    background: #D9D9D9;
    top: 0;
    right: 0;
    padding: .5rem 1em;
    gap: .5rem;
    transform: translateX(${props => props.$visible ? "0px" : "200px"});
    transition: all .7s;
    z-index: 10;

    @media (min-width: 991px) {
        display: none;
    }

`

const MobileCloseIcon = styled(CloseIcon)`
    align-self: self-end;
    margin: 13px 0 14px;
    border-radius: 8px;
    background: white;
    color: red;

`


const MenuNav = ({ $menuVisible, setMenuVisible }) => {

    const showMenuClose = () => setMenuVisible(!$menuVisible)

    return (
        <DivMobile $visible={$menuVisible} >
            <MobileCloseIcon onClick={showMenuClose} fontSize={"30px"} />
            <LinkRouter
                to={'/'}
                $flex={true}
            >
                <HomeIcon fontSize={'27px'} />
                <TitleLink>Home</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'servicos'}
                $flex={true}
            >
                <ListIcon fontSize={'27px'} />
                <TitleLink>Serviços</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'sobre'}
                $flex={true}
            >
                <ErrorIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'#'}
                $flex={true}
            >
                <LoginIcon fontSize={'27px'} />
                <TitleLink>Entrar</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'#'}
                $flex={true}
            >
                <ResgisterIcon fontSize={'27px'} />
                <TitleLink>Registrar</TitleLink>
            </LinkRouter>
        </DivMobile>
    )
}

export default MenuNav