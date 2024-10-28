import React from "react";
import ThemeSwitcher from "../../ThemeSwitcher";
import Menu from "./Menu";
import Link from "next/link";
import RoundButton from "@/components/comn/RoundButton";
import styled from "styled-components";

const SvgIcon = styled.svg`
  fill: ${(props) => props.theme.colors.text};
`;

const Header = () => {
  return (
    <header className="flex justify-between fixed top-0 p-5 items-center w-full max-h-14 h-full backdrop-blur-sm shadow-md z-50">
      <Link href="/">
        <div className="cursor-pointer font-bold">lhjin&apos;s blog</div>
      </Link>
      <Menu />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <Link href="/" className="flex items-center">
          <RoundButton
            styles="w-6 h-6"
            img={
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 12.03125 1.5 A 1.0001 1.0001 0 0 0 11.492188 1.6386719 L 1.9921875 7.2265625 A 1.0001 1.0001 0 1 0 3 8.953125 L 3 20 A 1.0001 1.0001 0 0 0 4 21 L 20 21 A 1.0001 1.0001 0 0 0 21 20 L 21 8.953125 A 1.0001 1.0001 0 1 0 22.007812 7.2265625 L 12.507812 1.6386719 A 1.0001 1.0001 0 0 0 12.03125 1.5 z M 12 3.6601562 L 19 7.7773438 L 19 19 L 16 19 L 16 12 A 1.0001 1.0001 0 0 0 15 11 L 9 11 A 1.0001 1.0001 0 0 0 8 12 L 8 19 L 5 19 L 5 7.7773438 L 12 3.6601562 z M 10 13 L 14 13 L 14 19 L 10 19 L 10 13 z"></path>
              </SvgIcon>
            }
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
