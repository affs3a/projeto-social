import styled from "styled-components"
import { MenuIcon } from "/src/style/icons";
import MenuMobile from "./components/MenuMobile";
import MenuDesktop from "./components/MenuDesktop";
import { useState } from "react";
import { Button } from "/src/components/common/Button";

const Header = styled.header`
    width: 100%;
    height: 72px;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    @media (min-width: 500px) {
        height: 80px;
    }
    
`

const Logo = styled.h1`
    font-size: 16px;
`

const NavBar = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const showMenu = () => setMenuVisible(!menuVisible)

    return (
        <Header>
            <Logo>Serviços Araripe</Logo>
            <Button
                onClick={showMenu}
                minDisplay={"none"}>
                <MenuIcon
                    fontSize={"30px"}
                />
            </Button>
            {menuVisible && <MenuMobile visible={menuVisible} />}
            <MenuDesktop />
        </Header>
    )
}

export default NavBar