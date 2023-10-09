import { styled } from "styled-components"
import Logo from "/src/components/common/Logo"
import MenuFooter from "./components/MenuFooter"

const Footer = styled.footer`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FooterNav = () => {
    return (
        <Footer>
            <Logo />
            <MenuFooter />
        </Footer>
    )
}

export default FooterNav