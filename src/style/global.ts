import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

:root{
    /*paleta de cores*/
    --hue:234;

    --primary-color:#1D0F78;
    --gradiente-one:hsl(var(--hue) 75% 33%);
    --gradiente-two:hsl(var(--hue) 66% 27%);

    --secundary-color:#FA8E10;
    --white-color:#FDFDFD;
    --input-border:#f1f1f1bb;

    --title-color:#434845;
    --subtitle-color:#647874;
    --input-color:#B6B7B9;

}

html{
        @media (max-width:1080px) {
            font-size:93.75%;/*=15px= 15/16*100 */
        }

        @media (max-width:720px) {
            font-size:87.5%;/*=14px=14/16*100 */
        }
        background-color:var(--input-border)
}
body {
}

body,
h1,
h2,
h3,
p {
    font-family: 'Work Sans', sans-serif;
    background-color:transparent;
}
`