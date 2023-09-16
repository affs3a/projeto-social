import { styled } from "styled-components"
import { ListAlt, ErrorOutline, Login, Menu, PersonAdd, Home, Close }
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

export const HomeIcon = styled(Home)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

export const CloseIcon = styled(Close)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;
`

export const MenuIcon = styled(Menu)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;

    @media (min-width: 991px) {
        display: none;
    }

`

export const ResgisterIcon = styled(PersonAdd)`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    cursor: pointer;

`