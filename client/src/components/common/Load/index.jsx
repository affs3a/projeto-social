import styled from "styled-components"
import { theme } from "@/style/config"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;
    background-color: ${theme.root.blueShadowThree};
`

const Circle = styled.div`
    width: 45px;
    height: 45px;
    border: 5px solid ${theme.root.blueOne};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: load .8s infinite linear;

    @keyframes load {
        from {
            transform: rotate(0);
        } to {
            transform: rotate(360deg);
        }
    }
`

const Load = ({ visible }) => {
    return <>
        <Container visible={visible}>
            <Circle />
        </Container>
    </>
}

export default Load