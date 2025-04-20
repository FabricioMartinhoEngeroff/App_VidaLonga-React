import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6,
  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img, video, iframe {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea {
    font: inherit;
  }

  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }

    body {
      padding: 0 8px;
    }
  }
`;

export default EstilosGlobais;