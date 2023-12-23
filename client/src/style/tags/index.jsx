import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Div = styled.div`
    width: 100%;
    background-color: ${props => props.back};
    color: ${props => props.color || "auto"};
    padding: ${props => props.padding || "0"};
    border-radius: ${props => props.radius || "0"};
    display: ${props => props.$flex ? "flex" : ""};
    gap: ${props => props.gap || 0};
    flex-direction: ${props => props.$row || "column"};
    margin-bottom: ${props => props.bottom};
    margin-top: ${props => props.top};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    `

export const Title = styled.h1`
    font-size: ${props => props.fontSize};
    font-weight: 800;
`

export const Description = styled.p`
    font-size: ${props => props.fontSize};
    display: ${props => props.display || ""};
`

export const TitleLink = styled.h3`
    font-size: ${props => props.fontSize};
    cursor: pointer;
`

export const LinkRouter = styled(Link)`
    display: ${props => props.$flex == true ? "flex" : ""};
    background-color: ${props => props.back};
    padding: ${props => props.padding || ".3rem"};
    margin: ${props => props.margin || "0"};
    font-size: ${props => props.fontSize};
    border-radius: 6px;
    color: ${props => props.color || '#000'};
    align-items: center;
    justify-content: ${props => props.justify || "start"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    gap: .3rem;
    transition: all 300ms;

    &:hover {
        background-color: ${props => props.hover || props.back};
    }
`

export const Span = styled.span`
    font-size: ${props => props.fontSize};
    display: ${props => props.$flex == true ? "flex" : ""};
    margin: ${props => props.margin};
`