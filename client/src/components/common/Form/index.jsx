import { styled } from "styled-components"
import { theme } from "@/style/config"
import { Div } from "@/style/tags"

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

export const Field = ({ id, label, type, place }) => {
    return (
        <Div $flex gap={'4px'} align={'left'}>
            <Label for={id}>{label}</Label>
            <Input id={id} type={type} placeholder={place ?? label}/>
        </Div>
    )
}