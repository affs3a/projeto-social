import { styled, ThemeProvider } from "styled-components"
import Logo from "@/components/common/Logo"
import { theme } from "@/style/config"
import MenuFooter from "@Footer/MenuFooter"
import Copyright from "@Footer/Copyright"
import LogoAlt from "@public/images/iconAlt.png"


const Footer = styled.footer`
    padding: ${({theme}) => theme.Mobile.Footer.padding};
    background-color: #111;
    color: ${({theme}) => theme.root.white};
    height: auto;
    text-align: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

const FooterNav = () => {
    return (
        <ThemeProvider theme={theme}>
            <Footer>
                <Logo src={LogoAlt} width={'64px'} bottom={'1.5rem'} />
                <MenuFooter />
                <Copyright />
            </Footer>
        </ThemeProvider>
    )
}

export default FooterNav