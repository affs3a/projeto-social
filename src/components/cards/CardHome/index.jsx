import { styled } from "styled-components";

const Div = styled.div`
    max-width: 90%;
    background-color: #00B64C ;
    border-radius: 8px;
    padding: 10px 8px;
`

const CardHome = ({ icon, text }) => {
    return (
        <Div>
            <h2>{text}</h2>
        </Div>
    )
}

export default CardHome;