import styled from "styled-components"
import { Div, Description } from "@/style/tags"

const Image = styled.img`
    width: 100%;
    max-width: 360px;
    height: 220px;
    border-radius: 8px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: ${({theme}) => theme.root.boxShadowStyleTwo};
    margin-top: .3rem;
`

const TitleInfor = styled.h2`
    font-size: 1.7rem;
    font-weight: 800;
`

const InforHome = ({ title, description, image }) => {
    return (
        <Div $flex gap={".5rem"}>
            <TitleInfor>{title}</TitleInfor>
            <Description align={"center"}>
                {description}
            </Description>
            <Image as={"div"}
                src={image}
            />
        </Div>
    )
}

export default InforHome