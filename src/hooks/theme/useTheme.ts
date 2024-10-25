import { useState } from "react";
import { lightTheme, darkTheme, customTheme } from "@/styles/themes";
import { Theme } from "@/types/theme";

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
