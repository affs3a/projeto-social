import { Div, Input, Label } from "../../../style/tags";

export const Field = ({ id, label, type, place }) => {
    return (
        <Div $flex gap={'4px'} align={'left'}>
            <Label for={id}>{label}</Label>
            <Input id={id} type={type} placeholder={place ?? label}/>
        </Div>
    )
}