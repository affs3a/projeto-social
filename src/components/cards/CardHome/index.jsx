import { styled } from "styled-components";
import { Link } from "react-router-dom"

const Div = styled(Link)`
    width: 100%;
    min-width: 250px;
    background-color: ${({theme}) => theme.root.blueOne};
    border-radius: 8px;
    padding: 13px 8px;
    display: grid;
    grid-template-columns: auto 2fr auto;
    gap: 10px;
    cursor: pointer;
`

const Text = styled.h2`
    font-size: 20px;
    color: #fff;
`

const CardHome = ({ IconOne, IconTwo, text, color, link }) => {
    return (
        <Div to={link}>
            <IconOne color={color} />
            <Text as={"h3"}>{text}</Text>
            <IconTwo color={color} />
        </Div>
    )
}

export default CardHome;