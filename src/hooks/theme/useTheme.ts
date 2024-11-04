import { useContext, useState } from "react";
import { lightTheme, darkTheme, customTheme } from "@/styles/themes";
import { Theme } from "@/types/theme";
import { DefaultTheme, ThemeContext } from "styled-components";

type ThemeOptions = "light" | "dark" | "custom";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const switchTheme = (option: ThemeOptions) => {
    switch (option) {
      case "light":
        setTheme(lightTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      case "custom":
        setTheme(customTheme);
        break;
      default:
        setTheme(lightTheme);
    }
  };

  return { theme, switchTheme };
};

export default useTheme;

export const useThemeColors = (): DefaultTheme["color"] => {
  const theme = useContext(ThemeContext) || { color: { primary: "#0070f3" } };
  return theme.color;
};
