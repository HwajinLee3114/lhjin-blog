import React from "react";
import useThemeStore from "@/store/useThemeStore";
import { useHydration } from "@/hooks/useHydration";
import RoundButton from "./comn/RoundButton";

const ThemeSwitcher: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  const currTheme = useHydration(
    useThemeStore,
    (state) => state.currentThemeOption
  );

  if (currTheme === null) {
    return <div></div>;
  }

  return (
    <div className="flex items-center gap-3">
      {currTheme !== "light" && (
        <RoundButton
          styles="w-7 h-7"
          event={() => setTheme("light")}
          img={<img src="/images/suny-100.png" alt="light mode" />}
        />
      )}

      {currTheme !== "dark" && (
        <RoundButton
          styles="w-7 h-7"
          event={() => setTheme("dark")}
          img={<img src="/images/moon-100.png" alt="dark mode" />}
        />
      )}

      {currTheme !== "custom" && (
        <RoundButton
          styles="w-8 h-8"
          event={() => setTheme("custom")}
          img={<img src="/images/snowb-100.png" alt="custom mode" />}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
