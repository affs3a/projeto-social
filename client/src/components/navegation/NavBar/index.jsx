import { styled, ThemeProvider } from "styled-components"
import { useState, createContext, useMemo } from "react";
import { Button } from "@/components/common/Button";
import { theme } from "@/style/config";
import { Menuicon } from "@/style/icons";
import MenuMobile from "@NavBar/MenuMobile";
import MenuDesktop from "@NavBar/MenuDesktop";
import LogoImage from "@public/images/icon.png"
import api from "@/api";

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${theme.Mobile.NavBar.height};
    background-color: ${theme.root.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.Mobile.NavBar.padding};
    box-shadow: 0 0 5px ${theme.root.shadow};
    z-index: 10;

    @media screen and (min-width: 991px) {
        height: ${theme.Desktop.NavBar.height};
    }
`

const Logo = styled.img.attrs({ src: LogoImage })`
    width: 64px;
    object-fit: cover;
`

const ButtonMenu = styled(Button)`
    padding: 0;
    @media (min-width: 991px) {
        display: none;
    }
`

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const profile = api.userProfile()

    const showMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <ThemeProvider theme={theme}>
            <Header>
                <Logo />
                <ButtonMenu
                    onClick={showMenu}
                >
                    <Menuicon
                        fontSize={"30px"}
                    />
                </ButtonMenu>
                <MenuMobile
                    user={profile}
                    $menuVisible={menuVisible}
                    setMenuVisible={setMenuVisible}
                />
                <MenuDesktop />
            </Header>
        </ThemeProvider>
    )
}

export default NavBar