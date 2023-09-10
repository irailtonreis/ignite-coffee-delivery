import './App.css'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
     <p>Coffee delivery</p>
    </ThemeProvider>
  )
}

