import { styled } from "styled-components"

export const Div = styled.div`
    display: ${props => props.flex ? "flex" : false};
    align-items: center;
`

export const Description = styled.p`
    font-size: ${props => props.fontSize};
    display: ${props => props.display || "block"};
`