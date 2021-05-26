import React from "react";

const SubMenu = ({ title, children }) => (
  <li className="menu__sub-menu">
    {title}
    <ul className="menu__sub-menu-list">{children}</ul>
  </li>
);

export default SubMenu;
