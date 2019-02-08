import { createGlobalStyle } from "styled-components"
import React from "react"

const GS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
  }
`

const GlobalStyle = () => {
    // TODO make distinction for schul-cloud
    return <GS />
}

export default GlobalStyle
