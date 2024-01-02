import styled from "styled-components"
import { Div, Title, Description } from "@/style/tags"

const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 8px;
`


const InforHome = ({ title, titleAzul, description, image }) => {
    return (
        <Div $flex gap={".5rem"}>
            <Title as={"h2"} fontSize={"1.7rem"}>{title}</Title>
            <Description align={"center"}>
                {description}
            </Description>
            <Image
                src={image}
            />
        </Div>
    )
}

export default InforHome