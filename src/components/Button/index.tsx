import { Container } from "./style"

interface ButtonProps{
    name: string
}


export const Button = (props: ButtonProps)=>{
    return(
        <Container type="button">{props.name}</Container>
    )
}