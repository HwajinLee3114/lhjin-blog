import React from "react";
import ThemeSwitcher from "../../ThemeSwitcher";
import Menu from "./Menu";
import Link from "next/link";

//     -webkit-box-align: center;
//     -webkit-box-pack: justify;

const Header = () => {
  return (
    <header className="flex justify-between fixed top-0 p-5 items-center w-full max-h-14 h-full backdrop-blur-sm shadow-md z-50">
      <Link href="/">
        <div className="cursor-pointer font-bold">lhjin&apos;s blog</div>
      </Link>
      <Menu />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
