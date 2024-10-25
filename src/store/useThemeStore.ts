import { create } from "zustand";
import { lightTheme, darkTheme, customTheme } from "@/styles/themes";

type ThemeOptions = "light" | "dark" | "custom";

interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
  };
}

interface ThemeStore {
  theme: Theme; // 현재 테마 타입
  setTheme: (option: ThemeOptions) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: lightTheme, // 기본 테마
  setTheme: (option: ThemeOptions) => {
    const newTheme: Theme =
      option === "light"
        ? lightTheme
        : option === "dark"
          ? darkTheme
          : customTheme;
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
