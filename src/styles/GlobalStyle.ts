import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background}; // 현재 테마의 배경 색상
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .l_blog-item{
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
