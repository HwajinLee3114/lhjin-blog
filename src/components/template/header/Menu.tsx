import React from "react";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  const menuItems = [
    { href: "/blog", label: "Blog" },
    { href: "/project", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav>
      <ul className="flex list-none p-0 m-0">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;