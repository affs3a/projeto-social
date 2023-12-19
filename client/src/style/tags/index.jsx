import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { theme } from "@/style/config"

export const Div = styled.div`
    width: 100%;
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
    background: ${props => props.back};
    padding: ${props => props.padding || ".3rem"};
    font-size: ${props => props.fontSize};
    border-radius: 6px;
    color: ${props => props.color || '#000'};
    align-items: center;
    justify-content: start;
    width: auto;
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

export const Form = styled.form`
    width: ${props => props.width || '100%'};
`

export const Label = styled.label`
    font-size: 1.15rem;
    color: ${theme.root.textTwo};
`

export const Input = styled.input`
    padding: 12px;
    border: 2px solid ${theme.root.greyOne};
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: all 350ms;

    &:focus {
        border: 2px solid ${theme.root.blueOne};
        background-color: ${theme.root.blueThree};
    }
`