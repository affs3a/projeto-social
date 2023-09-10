import NavBar from "./components/navegation/NavBar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: normal;
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
    </>
  )
}

export default App
