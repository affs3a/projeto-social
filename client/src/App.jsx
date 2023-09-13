import NavBar from "./components/navegation/NavBar"
import { createGlobalStyle } from "styled-components"
import { Outlet } from "react-router-dom";

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
    </>
  )
}

export default App