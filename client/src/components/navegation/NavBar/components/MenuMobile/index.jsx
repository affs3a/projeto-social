import { styled } from "styled-components"
import { InfoIcon, LoginIcon, ResgisterIcon, HomeIcon, CloseIcon, ProfileIcon }
    from "@/style/icons"
import { Div, TitleLink, LinkRouter } from "@/style/tags"
import { theme } from "@/style/config"
import { SearchCategoryIcon } from "@/style/icons"
import { Button } from "@/components/common/Button"
import api from "@/api"
import { useState } from "react"

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
            {logged ? <Profile handler={setLogged} user={user} /> : <Actions />}
        </DivMobile>
    )
}

const Profile = ({ handler, user }) => {
    const logout = () => {
        api.logout()
        handler(false)
    }
    return <>
        <LinkRouter
            justify={"center"}
            back={theme.root.blueShadow}
            width={"100%"}
        >
            <Div $flex $row bottom={'8px'}>
                <ProfileIcon fontSize={'27px'} />
                <TitleLink>{user.name}</TitleLink>
            </Div>
            <Button
                margin={'0 0 0 auto'}
                width={'100%'}
                height={'32px'}
                fontSize={'16px'}
                color={theme.root.white}
                back={theme.root.blueOne}
                hover={theme.root.blueOneHover}
                type={'submit'}
                onClick={() => logout()}
            >
                Sair
            </Button>
        </LinkRouter>
    </>
}

const Actions = () => {
    return <>
        <LinkRouter
            to={'login'}
            $flex={true}
            onClick={() => setMenuVisible(!$menuVisible)}
        >
            <LoginIcon fontSize={'27px'} />
            <TitleLink>Entrar</TitleLink>
        </LinkRouter>
    </>
}

export default MenuNav