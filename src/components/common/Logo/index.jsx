import styled from "styled-components"

import { Div, Title }
    from "/src/style/tags"
import LogoImage from "/public/logo.png"

const Image = styled.img`
    width: 35px;
    border-radius: 50%;
`

const Logo = ({ bottom }) => {
    return (
        <Div
            $flex={true}
            gap={'.5rem'}
            bottom={bottom}
        >
            <Image src={LogoImage} />
            <Title as="h2" >Serviços Araripe</Title>
        </Div>
    )
}

export default Logo