import styled from "styled-components";

export const Container = styled.div`
    width:40rem;
    position:relative;
    img{
        position:relative;
        left: 2.5rem;
        top: 2rem;
    }
  
`

export const FormContainer = styled.form`
    position:relative;
    top:8.75rem;
    left:10.8125rem ;
    color:var(--title-color) ;

    h1{
        margin-bottom:2rem;

    }
    .p-one{
        margin-bottom:1.8125rem ;
    }
    a.linkSenha{
        position:relative;
        text-decoration:none;
        color:var(--title-color);
        text-align:left ;
        left:15.6rem;
    }

    a.linkCriar{
        text-decoration:none;
        color:var(--title-color);
        margin-top:0.5rem ;
    }
`