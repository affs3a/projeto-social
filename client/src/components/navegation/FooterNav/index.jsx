import { styled } from "styled-components"
import { Div, Title }
    from "/src/style/tags"
import Logo from "/public/logo.png"

const Footer = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
`

const Image = styled.img`
    width: 45px;
    border-radius: 50%;
`

const FooterNav = () => {
    return (
        <Footer>
            <Div $flex={true}>
                <Image src={Logo} />
                <Title>Serviços Araripe</Title>
            </Div>
        </Footer>
    )
}

export default FooterNav