import { styled } from "styled-components";

const Div = styled.div`
    width: 100%;
    min-width: 250px;
    background-color: #00B64C ;
    border-radius: 8px;
    padding: 10px 8px;
    display: grid;
    grid-template-columns: auto 2fr auto;
    gap: 10px;
`

const Text = styled.h2`
    font-size: 20px;
    color: #fff;
`

const CardHome = ({ IconOne, IconTwo, text }) => {
    return (
        <Div>
            <IconOne />
            <Text>{text}</Text>
            <IconTwo />
        </Div>
    )
}

export default CardHome;