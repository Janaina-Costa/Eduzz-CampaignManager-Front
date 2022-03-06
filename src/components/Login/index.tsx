import logo from '../../assets/logo-eduzz.svg'
import { Button } from '../Button'
import { Forms } from '../Forms'
import * as S from './style'
export const Login = ()=>{
    return (
        <S.Container>
           <img src={logo} alt="logo eduzz" />
           
           <S.FormContainer>
               <h1>Entrar</h1>
               <p className="p-one">Preencha seus dados e faça seu login</p>
               <Forms labelForm='E-mail' inputType='email' placeholder='Digite aqui o seu email'></Forms>
               <Forms labelForm='Senha' inputType='password' placeholder='Digite aqui sua senha'></Forms>
               <a href="#" className="linkSenha">Esqueci minha senha</a> 

               <Button name="Entrar"></Button>
                <p className='p-two'>
                    Ainda não tem uma conta?   
                </p>
                <a href="#"className="linkCriar" >Crie uma conta agora</a>
           </S.FormContainer>
           
        </S.Container>
    )
}