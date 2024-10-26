"use client";
import React from "react";
import useThemeStore from "@/store/useThemeStore";

const ThemeSwitcher: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const currTheme = useThemeStore((state) => state.currentThemeOption);

  return (
    <div className="flex  gap-3">
      {currTheme !== "light" && (
        <button onClick={() => setTheme("light")}>
          <img
            src="/images/suny-100.png"
            alt="light mode"
            className="w-7 h-7"
          />
        </button>
      )}

      {currTheme !== "dark" && (
        <button onClick={() => setTheme("dark")}>
          <img src="/images/moon-100.png" alt="dark mode" className="w-7 h-7" />
        </button>
      )}

      {currTheme !== "custom" && (
        <button onClick={() => setTheme("custom")}>
          <img
            src="/images/snowb-100.png"
            alt="custom mode"
            className="w-8 h-8"
          />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
