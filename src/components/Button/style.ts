import styled from "styled-components";

export const Container = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;

    margin-bottom:1.4375rem ; 
    font-size:1.25rem;
    width:26rem;
    height:2.8rem;
    outline:0;
    border:0;
    color:var(--white-color);
    background-color:var(--secundary-color) ;
    margin-top:1.75rem;
    border-radius:4px;
    cursor: pointer;
    
    transition:filter .4s;
    &:hover{
        filter: brightness(0.9)
    }


`