import { createGlobalStyle, styled, ThemeProvider } from "styled-components"
import { Outlet } from "react-router-dom";
import NavBar from "@/components/navegation/NavBar"
import FooterNav from "@/components/navegation/FooterNav";
import { theme } from "@/style/config";
import "@fontsource/space-grotesk"

const GlobalStyle = createGlobalStyle`
  :root {
    --navbar-height: 72px;
  }

  @media (min-width: 991px) {
    :root {
      --navbar-height: 80px;
    }
  }

  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: var(--navbar-height);
  min-height: 100vh;
`

const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Main>
          <Outlet />
        </Main>
        <FooterNav />
      </ThemeProvider>
    </>
  )
}

export default App