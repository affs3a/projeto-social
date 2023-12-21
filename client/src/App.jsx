import { createGlobalStyle, styled, ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from "react-router-dom";
import NavBar from "@/components/navegation/NavBar"
import FooterNav from "@/components/navegation/FooterNav";
import { theme } from "@/style/config";
import "@fontsource/space-grotesk"

const GlobalStyle = createGlobalStyle`
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
  padding: ${theme.Mobile.Main};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: ${theme.Mobile.NavBar.height};
  min-height: calc(100vh - ${theme.Mobile.NavBar.height});

  @media screen and (min-width: 991px) {
    margin-top: ${theme.Desktop.NavBar.height}; 
  }
`
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Main>
          <Outlet />
        </Main>
        <FooterNav />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App