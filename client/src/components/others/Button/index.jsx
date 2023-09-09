import { styled } from "styled-components"

export const Button = styled.button`
    background: ${props => props.back};
    color: ${props => props.color};
    padding: .5rem 1rem;
    border-radius: 8px;
    border: none;
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    cursor: pointer;
`
