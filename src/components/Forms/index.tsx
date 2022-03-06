import { Container } from "./style"

interface FormProps{
    labelForm: string,
    inputType: string,
    placeholder: string
}

export const Forms = (props: FormProps)=>{
    return(
        <Container>
            <label>{props.labelForm}</label>
            <input type={props.inputType} placeholder={props.placeholder} />               
        </Container>
    )
}