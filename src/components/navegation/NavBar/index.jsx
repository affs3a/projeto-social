import { styled, ThemeProvider } from "styled-components"
import MenuMobile from "@/components/navegation/navbar/components/MenuMobile";
import MenuDesktop from "@/components/navegation/navbar/components/MenuDesktop";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { theme } from "@/style/config";
import { Menuicon } from "@/style/icons";

const Header = styled.header`
    width: 100%;
    height: 72px;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.Mobile.NavBar.padding};

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
                <Logo>Serviços Araripe</Logo>
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