import styled from "styled-components";
import banner from '../../assets/bannerimg.png'


export const Container = styled.aside`
    display:flex;
    justify-content:center;
    width:50%;
    height:100% ;
    background-image:linear-gradient(to top, var(--gradiente-one),50%,transparent, var(--gradiente-two)), url(${banner});
    background-size:cover;
    z-index:5000 ;
       
        
        .titles{
        position:relative;
        top:31.325rem;
        text-align:center;
        

        h1{
            font-weight:700;
            font-size:2.25rem;
            color:var(--white-color);
            margin-bottom:1.2rem;
        }
        p{
            font-weight:500;
            font-size:1.5rem;
            color:var(--input-color);
        }
        img.megafone{
            position:absolute;
            top:-15%;
            right:48% ;
                       
        }
        img.linkedin{
            position:absolute;
            top:-16%;
            right:44% ;
            width:30px ;
                       
        }
        img.instagram{
            position:absolute;
            top:-24%;
            right:32% ;
            
                       
        }
        img.whats{
            position:absolute;
            top:-28%;
            right:46% ;
            width:40px;
            
                       
        }
        img.face{
            position:absolute;
            top:-32%;
            right:30% ;
            width:40px ;
            
                       
        }
        img.telegram{
            position:absolute;
            top:-18%;
            right:26% ;
            
                       
        }
        img.twitter{
            position:absolute;
            top:-26%;
            right:16%;           
                       
        }
    }
    
        
`