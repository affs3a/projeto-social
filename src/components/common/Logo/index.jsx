import styled from "styled-components"

import { Div, Title, Description }
    from "/src/style/tags"
import LogoImage from "/public/logo.png"

const Image = styled.img`
    width: 35px;
    border-radius: 50%;
`

const Logo = () => {
    return (
        <Div $flex={true} gap={'.5rem'}>
            <Image src={LogoImage} />
            <Title as="h2" >Serviços Araripe</Title>
        </Div>
    )
}

export default Logo