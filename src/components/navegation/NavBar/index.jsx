import { styled, ThemeProvider } from "styled-components"
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { theme } from "@/style/config";
import { Menuicon } from "@/style/icons";
import MenuMobile from "@NavBar/MenuMobile";
import MenuDesktop from "@NavBar/MenuDesktop";

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--navbar-height);
    background-color: ${({theme}) => theme.root.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.Mobile.NavBar.padding};
    box-shadow: 0px 0 3px rgba(30, 30, 30, 0.3);

    @media (min-width: 991px) {
        height: 80px;
        
    }
`

const Logo = styled.h1`
    font-size: 16px;
`

const ButtonMenu = styled(Button)`
    @media (min-width: 991px) {
        display: none;
    }
`

const NavBar = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const showMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <ThemeProvider theme={theme}>
            <Header>
                <Logo>ArariServiços</Logo>
                <ButtonMenu
                    onClick={showMenu}
                >
                    <Menuicon
                        fontSize={"30px"}
                    />
                </ButtonMenu>
                <MenuMobile $menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
                <MenuDesktop />
            </Header>
        </ThemeProvider>
    )
}

export default NavBar