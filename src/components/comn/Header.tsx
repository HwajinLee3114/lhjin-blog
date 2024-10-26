import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

//     -webkit-box-align: center;
//     -webkit-box-pack: justify;

const Header = () => {
  return (
    <header className="flex justify-between fixed top-0 p-5 items-center w-full max-h-14 h-full backdrop-blur-sm shadow-md z-50">
      <div>lhjin&apos;s blog</div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
