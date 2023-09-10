import { styled } from "styled-components"
import { ListAlt, ErrorOutline, Login, Menu }
    from '@mui/icons-material';

export const ListIcon = styled(ListAlt)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const ErrorIcon = styled(ErrorOutline)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const LoginIcon = styled(Login)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const MenuIcon = styled(Menu)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`