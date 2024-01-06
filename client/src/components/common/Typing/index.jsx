import styled from "styled-components";
import { theme } from "@/style/config";

export const Break = styled.br`
    margin-bottom: 6px;
`

export const Bold = styled.b`
    font-weight: 800;
`

export const Mark = styled.p`
    font-weight: 700;
    font-size: .95rem;
    padding: ${props => props.padding || "0 4px"};
    border-radius: 4px;
    background-color: ${theme.root.orangeShadow};
    color: ${theme.root.orangeTwo};
`