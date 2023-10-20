import { styled, ThemeProvider } from "styled-components"
import Logo from "/src/components/common/Logo"
import MenuFooter from "./components/MenuFooter"
import Copyright from "./components/Copyright"
import { theme } from "/src/style/config"

const Footer = styled.footer`
    padding: ${({theme}) => theme.Mobile.Footer.padding};
    height: auto;
    text-align: center;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #D9D9D9;
    width: 100%;
`

const FooterNav = () => {
    return (
        <ThemeProvider theme={theme}>
            <Footer>
                <Logo bottom={'1.5rem'} />
                <MenuFooter />
                <Copyright />
            </Footer>
        </ThemeProvider>
    )
}

export default FooterNav