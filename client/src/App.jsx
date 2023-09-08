import NavBar from "./components/navegation/NavBar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
