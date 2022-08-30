import React from "react";
import Button from "./Button";

const Header = ({ onAddTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button onAddTask={onAddTask} color="green" text="Add" />
    </header>
  );
};

export default Header;
