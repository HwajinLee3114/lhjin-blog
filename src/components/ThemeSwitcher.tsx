import React from "react";
import useThemeStore from "@/store/useThemeStore";
import { useHydration } from "@/hooks/useHydration";
import RoundButton from "./comn/RoundButton";
import Image from "next/image";

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
        // <RoundButton
        //   styles="w-7 h-7"
        //   event={() => setTheme("light")}
        //   img={<img src="/images/suny-100.png" alt="light mode" />}
        // />
        <RoundButton
          styles="w-7 h-7"
          event={() => setTheme("light")}
          img={
            <Image
              src="/images/suny-100.png"
              alt="light mode"
              width={100}
              height={100}
              layout="responsive"
            />
          }
        />
      )}

      {currTheme !== "dark" && (
        <RoundButton
          styles="w-7 h-7"
          event={() => setTheme("dark")}
          img={
            <Image
              src="/images/moon-100.png"
              alt="dark mode"
              width={100}
              height={100}
              layout="responsive"
            />
          }
        />
      )}

      {currTheme !== "custom" && (
        <RoundButton
          styles="w-7 h-7"
          event={() => setTheme("custom")}
          img={
            <Image
              src="/images/snowb-100.png"
              alt="custom mode"
              width={100}
              height={100}
              layout="responsive"
            />
          }
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
