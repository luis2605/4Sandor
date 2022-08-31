import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAddTaskMenu, onAddActive }) => {
  const location = useLocation();
  return (
    <header
      className={
        location.pathname === "/about" ? "header text-center" : "header"
      }
    >
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          onAddTaskMenu={onAddTaskMenu}
          onAddActive={onAddActive}
          colorGreen="green"
          colorRed="red"
          textOpen="Add"
          textClose="Close"
        />
      )}
    </header>
  );
};

export default Header;
