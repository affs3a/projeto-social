import { createGlobalStyle } from "styled-components"
import { Outlet } from "react-router-dom";
import NavBar from "./components/navegation/NavBar"
import FooterNav from "./components/navegation/FooterNav";

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

const App = () => {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <FooterNav />
    </>
  )
}

export default App