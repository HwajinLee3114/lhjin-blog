import { createGlobalStyle } from "styled-components";

const CustomStyle = createGlobalStyle`
  .l_blog-item{
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;

export default CustomStyle;
