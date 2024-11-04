import { createGlobalStyle } from "styled-components";

const CustomStyle = createGlobalStyle`
  .l_blog-item {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .l_blog-item .title {
    color: ${({ theme }) => theme.colors.primary};
  }

  .l_ctg-item {
    background-color: ${({ theme }) => theme.colors.background2};
  }

  .selected {
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  }

  .l_hover-custom {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }
  }
`;

export default CustomStyle;
