import { styled } from "styled-components"
import { theme } from "@/style/config"
import * as Icons from "@/style/icons"
import { Div } from "@/style/tags"
import { useState } from "react"
import utils from "@/utils"

export const Form = styled.form`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxwidth || 'auto'};
    display: ${props => props.display || "auto"};
    padding: ${props => props.padding || "0"};
    background: ${props => props.back || "auto"};
    z-index: ${props => props.zindex || "auto"};
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

export const Select = styled.select`
    width: 100%;
    padding: ${props => props.padding || "12px"};
    border: 2px solid ${theme.root.greyOne};
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: all 350ms;
    background-color: ${theme.root.white};

    &:focus {
        border: 2px solid ${theme.root.blueOne};
        background-color: ${theme.root.blueThree};
    }
`

export const TextArea = styled.textarea`
    font-size: 1rem;
    resize: vertical;
    padding: ${props => props.padding || "12px"};
    border: 2px solid ${theme.root.greyOne};
    min-height: 60px;
    border-radius: 4px;
    background-color: ${theme.root.white};
    outline: none;
    transition: all 350ms;

    &:focus {
        border: 2px solid ${theme.root.blueOne};
        background-color: ${theme.root.blueThree};
    }
`

export const Option = styled.option`

`

export const DivFile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 12px;
    color: ${theme.root.white};
    background-color: ${theme.root.blueOne};
    border-radius: 4px;
    transition: 300ms;

    &:hover {
        background-color: ${theme.root.blueOneHover};
    }
`

export const LabelFile = styled.p`
    margin-bottom: 6px;
    font-size: 1.15rem;
    color: ${theme.root.textTwo};
`


export const InputFile = styled.input.attrs({ type: 'file' })`
    display: none;
`

export const Field = ({ id, label, type, place, value, required }) => {
    return <Div $flex gap={'4px'} align={'left'}>
        <Label htmlFor={id}>{label}</Label>
        <Input
            id={id}
            name={id}
            type={type}
            placeholder={place ?? label}
            required={required}
            defaultValue={value ?? ""}
        />
    </Div>
}

export const SelectField = ({ children, id, label, required }) => {
    return <Div $flex gap={'4px'} align={'left'}>
        <Label htmlFor={id}>{label}</Label>
        <Select id={id} name={id} required={required}>
            {children}
        </Select>
    </Div>
}

export const TextField = ({ value, id, label, place, required }) => {
    return <Div $flex gap={'4px'} align={'left'}>
        <Label htmlFor={id}>{label}</Label>
        <TextArea id={id} name={id} required={required} placeholder={place ?? label}>{value}</TextArea>
    </Div>
}

export const FileField = ({ id, label, required, multiple, mimes, max }) => {
    let [count, setCount] = useState(0)
    const changeHandler = (e) => {
        let error = false
        let maxCount = max ?? 3
        let mimesList = mimes ?? [
            'application/pdf',
            'application/zip',
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/svg+xml',
        ]

        if (e.target.files.length > maxCount) {
            utils.alert(`<strong>${maxCount}</strong> arquivo(s) no máximo!`, 'warning')
            e.target.files = null
            error = true
        }

        mimes && [].slice.call(e.target.files).forEach(it => {
            if (!mimesList.includes(it.type)) {
                utils.alert(`<strong>${it.name}:</strong> Tipo de arquivo não permitido!`, 'warning')
                e.target.files = null
                error = true
            }
        })

        setCount(!error && e.target.files.length)
    }
    return <Div $flex gap={'4px'} align={'left'}>
        <Label htmlFor={id}>
            <LabelFile>{label}</LabelFile>
            <DivFile>
                <Icons.FileIcon />
                {count > 0
                    ? <>{count} Arquivo(s) selecionado(s) </>
                    : <>Selecionar Arquivos</>}
            </DivFile>
        </Label>

        <InputFile onChange={changeHandler} id={id} name={id} required={required} multiple={multiple} />
    </Div>
}

export const HiddenField = ({ id, value }) => {
    return <Input type={"hidden"} name={id} id={id} value={value ?? ""} />
}

export const Modal = styled.div`
    width: 100%;
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.root.white};
    z-index: 999;
    top: ${theme.Mobile.NavBar.height};
    left: 0;
    visibility: ${props => props.$visible ? "visible" : "hidden"};
    opacity: ${props => props.$visible ? "1" : "0"};
`