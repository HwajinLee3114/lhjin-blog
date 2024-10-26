import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

//     -webkit-box-align: center;
//     -webkit-box-pack: justify;

const Header = () => {
  return (
    <header className="flex justify-between p-5 items-center w-full max-h-40 h-full ">
      <div>lhjin&apos;s blog</div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
