import { createGlobalStyle, styled, ThemeProvider } from "styled-components"
import { Outlet } from "react-router-dom";
import NavBar from "./components/navegation/NavBar"
import FooterNav from "./components/navegation/FooterNav";
import { theme } from "/src/style/config";

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: normal;
    text-decoration: none;
  }

  body {
    overflow-x: hidden;
  }

  a {
      cursor: pointer;
  }
`

const Main = styled.main`
  padding: ${({ theme }) => theme.Mobile.Main};
`

const App = () => {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ThemeProvider theme={theme}>
        <Main>
          <Outlet />
        </Main>
      </ThemeProvider>
      <FooterNav />
    </>
  )
}

export default App