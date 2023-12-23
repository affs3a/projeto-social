import { styled } from "styled-components";
import { Link } from "react-router-dom"
import { theme } from "@/style/config"

const Div = styled(Link)`
    width: 100%;
    min-width: 250px;
    background-color: ${theme.root.blueOne};
    border-radius: 8px;
    padding: 26px 16px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 2fr auto;
    gap: 8px;
    cursor: pointer;
`

const Text = styled.h3`
    font-size: 20px;
    font-weight: 800;
    color: #fff;
`

const CardAdmin = ({ IconOne, IconTwo, text, color, link }) => {
    return (
        <Div to={link}>
            <IconOne color={color} fontSize={"36px"}/>
            <Text>{text}</Text>
            <IconTwo color={color} fontSize={"30px"}/>
        </Div>
    )
}

export default CardAdmin;