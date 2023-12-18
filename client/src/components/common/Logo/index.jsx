import styled from "styled-components"

import { Div, Title }
    from "/src/style/tags"
import LogoImage from "/public/logo.png"

const Image = styled.img`
    width: 46px;
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
            <Title as="h3" >ArariServiços</Title>
        </Div>
    )
}

export default Logo