import { styled } from "styled-components"
import { ListIcon, ErrorIcon, LoginIcon, ResgisterIcon } from "/src/style//icons"
import { Div } from "/src/style/tags"

const Link = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: .3rem;
    gap: .3rem;
`

const TitleLink = styled.h3`
    font-size: 20px;
`

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

    @media (min-width: 500px) {
        display: none;
    }

`

const MenuNav = () => {
    return (
        <DivMobile flex={"true"} visible>
            <Link>
                <ListIcon fontSize={'27px'} />
                <TitleLink>Serviços</TitleLink>
            </Link>
            <Link>
                <ErrorIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </Link>
            <Link>
                <LoginIcon fontSize={'27px'} />
                <TitleLink>Entrar</TitleLink>
            </Link>
            <Link>
                <ResgisterIcon fontSize={'27px'} />
                <TitleLink>Registrar</TitleLink>
            </Link>
        </DivMobile>
    )
}

export default MenuNav