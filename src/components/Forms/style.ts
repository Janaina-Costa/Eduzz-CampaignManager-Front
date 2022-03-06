import styled from "styled-components";

export const Container = styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom:1.4375rem ; 
   

    label{ 
        color:var(--subtitle-color);
        font-size:1.25rem;
        margin-bottom:6px
    }
    input{
        width:26rem;
        height:2.8rem;
        outline:0 ;
        border: solid 1px var(--input-color);
        border-radius:4px;
        padding:6px ;
        box-shadow: 1px 1px 6px 2px var(--input-color);
        
        &::placeholder{
            color: var(--input-color);
        }
        
    }
    
`