// src/store/useThemeStore.ts
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
  currentThemeOption: ThemeOptions; // 현재 테마 옵션
  setTheme: (option: ThemeOptions) => void;
}

const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: lightTheme, // 기본 테마
  currentThemeOption: "light", // 기본 테마 옵션
  setTheme: (option: ThemeOptions) => {
    const currentOption = get().currentThemeOption;
    if (option !== currentOption) {
      const newTheme: Theme =
        option === "light"
          ? lightTheme
          : option === "dark"
            ? darkTheme
            : customTheme;

      set({ theme: newTheme, currentThemeOption: option }); // 현재 테마 옵션 업데이트
    }
  },
}));

export default useThemeStore;
