import styled from "styled-components"
import MenuNav from "../MenuNav";
import { MenuIcon } from "/src/style/icons";
import { Button } from "../../others/Button";

const Header = styled.header`
    width: 100%;
    height: 72px;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Logo = styled.h1`
    font-size: 16px;
`

const NavBar = () => {

    const toggleButton = () => {
    }

    return (
        <Header>
            <Logo>Serviços Araripe</Logo>
            <Button onClick={toggleButton}>
                <MenuIcon
                    fontSize={"35px"}
                />
            </Button>
            <MenuNav />
        </Header>
    )
}

export default NavBar