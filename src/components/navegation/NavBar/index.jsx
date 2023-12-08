import { styled, ThemeProvider } from "styled-components"
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { theme } from "@/style/config";
import { Menuicon } from "@/style/icons";
import MenuMobile from "@NavBar/MenuMobile";
import MenuDesktop from "@NavBar/MenuDesktop";

const Header = styled.header`
    width: 100%;
    height: 72px;
    background-color: ${({theme}) => theme.root.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.Mobile.NavBar.padding};
    box-shadow: 0px 2px 6px 0px rgba(30, 30, 30, 0.50);

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