import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuLi = styled.li`
  color: ${(props) => props.theme.colors.primary};
`;

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href);

  // border-bottom: ${(props) =>
  //   props.isActive ? `2px solid ${props.theme.colors.primary}` : "none"};
  return (
    <MenuLi
      className={`mr-5 ${isActive ? "pb-1 border-solid border-b-2 font-bold" : ""}`}
    >
      <Link href={href} className="text-sm hover:font-bold px-4 py-2">
        {label}
      </Link>
    </MenuLi>
  );
};

export default MenuItem;
