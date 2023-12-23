import { styled } from "styled-components"
import { InfoIcon, LoginIcon, HomeIcon, CloseIcon, ProfileIcon }
    from "@/style/icons"
import { Div, TitleLink, LinkRouter } from "@/style/tags"
import { theme } from "@/style/config"
import { SearchCategoryIcon } from "@/style/icons"
import api from "@/api"
import { useState } from "react"
import { ConfigIncon } from "@/style/icons"
import { StoreIcon } from "@/style/icons"

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

const MenuNav = ({ $menuVisible, setMenuVisible, user }) => {
    const [logged, setLogged] = useState(user)
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
                to={'localizar'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <SearchCategoryIcon fontSize={'27px'} />
                <TitleLink>Localizar</TitleLink>
            </LinkRouter>
            <LinkRouter
                to={'sobre'}
                $flex={true}
                onClick={() => setMenuVisible(!$menuVisible)}
            >
                <InfoIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </LinkRouter>
            {logged ? <Profile menu={[$menuVisible, setMenuVisible]} handler={setLogged} user={user} />
                : <Actions menu={[$menuVisible, setMenuVisible]} />}
        </DivMobile>
    )
}

const Profile = ({ handler, menu, user }) => {
    const logout = () => {
        api.logout()
        handler(false)
    }
    return <>
        <Div
            justify={"center"}
            back={theme.root.blueShadow}
            radius={"6px"}
            padding={"6px"}
            width={"100%"}
        >
            <Div $flex $row bottom={'8px'} color={theme.root.blueOne}>
                <ProfileIcon fontSize={'27px'} />
                <TitleLink>{user.name}</TitleLink>
            </Div>
            {user.role == api.ROLE_ADMIN ? (
                <LinkRouter
                    to={'sobre'}
                    $flex={true}
                    justify={"center"}
                    onClick={() => menu[1](!menu[0])}
                    margin={"4px 0"}
                >
                    <ConfigIncon fontSize={'27px'} />
                    <TitleLink>Admin</TitleLink>
                </LinkRouter>
            ) : (
                <LinkRouter
                    to={'sobre'}
                    $flex={true}
                    justify={"center"}
                    onClick={() => menu[1](!menu[0])}
                    margin={"4px 0"}
                >
                    <StoreIcon fontSize={'27px'} />
                    <TitleLink>Minha Loja</TitleLink>
                </LinkRouter>
            )}
            <LinkRouter
                $flex
                justify={"center"}
                to={'/'}
                margin={'0 0 0 auto'}
                width={'100%'}
                height={'36px'}
                fontSize={'16px'}
                color={theme.root.white}
                back={theme.root.blueOne}
                hover={theme.root.blueOneHover}
                onClick={() => logout()}
            >
                Sair
            </LinkRouter>
        </Div>
    </>
}

const Actions = ({ menu }) => {
    return <>
        <LinkRouter
            to={'login'}
            $flex={true}
            onClick={() => menu[1](!menu[0])}
        >
            <LoginIcon fontSize={'27px'} />
            <TitleLink>Entrar</TitleLink>
        </LinkRouter>
    </>
}

export default MenuNav