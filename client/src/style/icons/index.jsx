import { styled } from "styled-components"
import { ListAlt, ErrorOutline }
    from '@mui/icons-material';

export const ListIcon = styled(ListAlt)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const ErrorIcon = styled(ErrorOutline)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`