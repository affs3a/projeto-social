import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Div = styled.div`
    display: ${props => props.display};
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

export const LinkRouter = styled(Link)`
    display: ${props => props.display};
    color: #000;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: .3rem;
    gap: .3rem;
`
