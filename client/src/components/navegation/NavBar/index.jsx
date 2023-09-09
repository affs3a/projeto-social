import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import MenuNav from "../MenuNav";

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
    return (
        <Header>
            <Logo>Serviços Araripe</Logo>
            <MenuIcon />
            <MenuNav />
        </Header>
    )
}

export default NavBar