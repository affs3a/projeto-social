import styled from "styled-components"
import { Div, Title } from "/src/style/tags"
import LogoImage from "/public/images/icon.png"

const Logo = ({ pure, bottom, radius, width, src }) => {
    const Image = styled.img`
        width: ${width || '46px'};
        object-fit: cover;
        border-radius: ${radius || '0'};
    `
    return (
        <Div
            $flex={true}
            gap={'.5rem'}
            bottom={bottom}
        >
            <Image src={src ?? LogoImage} />
            {!pure && (<Title as="h3" >ArariServiços</Title>)}
        </Div>
    )
}

export default Logo