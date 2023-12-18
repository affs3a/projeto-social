import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const LinkBtn = styled(Link)`
    //Props styled
    background: ${props => props.back || "none"};
    color: ${props => props.color || '#000'};
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
    transition: all 200ms;

    &:hover {
        background: ${props => props.hover || props.back || "none"};
    }

    &:visited {
        color: ${props => props.color || '#000'};
    }
`
