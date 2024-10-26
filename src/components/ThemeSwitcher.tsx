"use client";
import React from "react";
import useThemeStore from "@/store/useThemeStore";

const ThemeSwitcher: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const currTheme = useThemeStore((state) => state.currentThemeOption);

  return (
    <div className="flex  gap-3">
      {currTheme !== "light" && (
        <button onClick={() => setTheme("light")}>Light</button>
      )}

      {currTheme !== "dark" && (
        <button onClick={() => setTheme("dark")}>Dark</button>
      )}

      {currTheme !== "custom" && (
        <button onClick={() => setTheme("custom")}>Custom</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
