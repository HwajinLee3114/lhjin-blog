import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useThemeStore from "@/store/useThemeStore"; // Zustand 스토어 임포트
import { Theme } from "@/types/theme";

type StyleProviderProps = {
  children: ReactNode;
};

const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
  const { theme } = useThemeStore();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleProvider;
