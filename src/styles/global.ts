import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme['white-100']};
    color:  ${(props) => props.theme['base-700']};
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
}

body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
}
`