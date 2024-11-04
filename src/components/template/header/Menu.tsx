import React from "react";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  const menuItems = [
    { href: "/blog", label: "BLOG" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/resume", label: "RESUME" },
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
