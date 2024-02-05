"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "@/styles/theme";

const GlobalStyle = createGlobalStyle`

${reset}

  body {
    background-color: ${theme.color["bg90"]};
  }

`;

export default GlobalStyle;
