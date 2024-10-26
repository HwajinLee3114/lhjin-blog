// src/store/useThemeStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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
  theme: Theme;
  currentThemeOption: ThemeOptions;
  setTheme: (option: ThemeOptions) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => {
      const initialThemeOption: ThemeOptions =
        typeof window !== "undefined" && localStorage.getItem("currentThemeOption") as ThemeOptions
          ? (localStorage.getItem("currentThemeOption") as ThemeOptions)
          : "light"; // 서버 사이드에서는 기본값으로 "light" 사용

      return {
        theme: lightTheme,
        currentThemeOption: initialThemeOption,
        setTheme: (option: ThemeOptions) => {
          const currentOption = get().currentThemeOption;
          if (option !== currentOption) {
            const newTheme: Theme =
              option === "light"
                ? lightTheme
                : option === "dark"
                  ? darkTheme
                  : customTheme;

            set({ theme: newTheme, currentThemeOption: option });
            if (typeof window !== "undefined") {
              localStorage.setItem("currentThemeOption", option); // 클라이언트 사이드에서만 localStorage에 저장
            }
          }
        },
      };
    },
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
