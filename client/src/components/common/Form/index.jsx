import { styled } from "styled-components"
import { theme } from "@/style/config"
import { Div } from "@/style/tags"

export const Form = styled.form`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth || 'auto'};
    display: ${props => props.display || "auto"};
    padding: ${props => props.padding || "0"};
    background: ${props => props.back || "auto"};
    z-index: ${props => props.zIndex || "auto"};
`

export const Label = styled.label`
    font-size: 1.15rem;
    color: ${theme.root.textTwo};
`

export const Input = styled.input`
    width: 100%;
    padding: ${props => props.padding || "12px"};
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

export const Field = ({ id, label, type, place, required }) => {
    return (
        <Div $flex gap={'4px'} align={'left'}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} name={id} type={type} placeholder={place ?? label} required={required} />
        </Div>
    )
}

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.root.shadow};
    z-index: 9;
    top: 0;
    left: 0;
    visibility: ${props => props.$visible ? "visible" : "hidden"};
    opacity: ${props => props.$visible ? "1" : "0"};
    transition: all 300ms;
`