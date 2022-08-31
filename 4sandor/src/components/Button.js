import React from "react";
import PropTypes from "react";

const Button = ({
  colorRed,
  colorGreen,
  textOpen,
  textClose,
  onAddTaskMenu,
  onAddActive,
}) => {
  const addTaskMenu = () => {
    if (onAddActive === false) {
      return onAddTaskMenu(true);
    }
    return onAddTaskMenu(false);
  };
  return (
    <div>
      {" "}
      <button
        onClick={addTaskMenu}
        style={{ backgroundColor: onAddActive ? colorRed : colorGreen }}
        className="btn"
      >
        {onAddActive ? textClose : textOpen}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

// defines type of props
Button.propsTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
