import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { OrderContextProvider } from "./Contexts/OrderContext"
import { Router } from "./Router";
import "./App.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
