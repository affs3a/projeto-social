import { styled } from "styled-components";
import { Link } from "react-router-dom"

const Div = styled(Link)`
    width: 100%;
    min-width: 250px;
    background-color: ${({theme}) => theme.root.blueFive};
    border-radius: 8px;
    padding: 16px 8px;
    display: grid;
    grid-template-columns: auto 2fr auto;
    gap: 8px;
    cursor: pointer;
    box-shadow: ${({theme}) => theme.root.boxShadowStyleTwo};
`

const Text = styled.h3`
    font-size: 18px;
    font-weight: 800;
    color: #fff;
`

const CardHome = ({ IconOne, IconTwo, text, color, link }) => {
    return (
        <Div to={link}>
            <IconOne color={color} />
            <Text>{text}</Text>
            <IconTwo color={color} />
        </Div>
    )
}

export default CardHome;