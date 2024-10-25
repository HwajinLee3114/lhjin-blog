"use client";
import React from "react";
import useThemeStore from "@/store/useThemeStore";

const ThemeSwitcher: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <button onClick={() => setTheme("custom")}>Custom Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
