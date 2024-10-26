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
    (set, get) => ({
      theme: lightTheme,
      currentThemeOption: (localStorage.getItem("currentThemeOption") as ThemeOptions) || "light",
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
        }
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
