import { styled } from "styled-components";
import { theme } from "@/style/config"

export const Div = styled.div`
    width: 100%;
    min-width: 250px;
    background-color: ${theme.root.blueShadowTwo};
    color: ${theme.root.blueTwo};
    border: solid 1px ${theme.root.blueShadow};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    cursor: pointer;
`

export const Container = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: ${props => props.margin || "0"};
    align-items: center;
`

export const Horizontal = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    font-size: 18px;
`

export const Desc = styled.p`
    color: ${theme.root.white};
`

export const Bold = styled.b`
    font-weight: 900;
    color: ${theme.root.blueTwo};
`