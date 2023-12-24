import { styled } from "styled-components"

export const Button = styled.button`
    //Props styled
    background: ${props => props.back || "none"};
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize};
    display: ${props => props.display || "flex"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    justify-content: ${props => props.justify || "center"};
    font-weight: ${props => props.$bold ? '900' : '600'};
    margin: ${props => props.margin || "0"};
    border-radius: 8px;
    border: ${props => props.border ? "solid 2px " + props.border : "none"};
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: .5rem .8rem;
    gap: .3rem;
    transition: all 200ms;

    &:hover {
        background: ${props => props.hover || props.back || "none"};
    }
`
