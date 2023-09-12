import { styled } from "styled-components"

export const Div = styled.div`
    display: ${props => props.flex ? "flex" : false};
    align-items: center;
    gap: ${props => props.gap};
`

export const Description = styled.p`
    font-size: ${props => props.fontSize};
    display: ${props => props.display || ""};
`

export const TitleLink = styled.h3`
    font-size: ${props => props.fontSize};
`