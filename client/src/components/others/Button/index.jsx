import { styled } from "styled-components"

export const Button = styled.button`
    //Props styled
    background: ${props => props.back || "none"};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    display: ${props => props.display || "flex"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    justify-content: ${props => props.justify || "center"};

    border-radius: 8px;
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: .5rem .8rem;
    gap: .3rem;

    @media (min-width: 700px) {
        display: ${props => props.minDisplay};
    }
`
