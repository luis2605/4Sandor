import React from "react";
import PropTypes from "react";

const Button = ({ color, text, onAddTask }) => {
  const addTask = () => {
    return onAddTask(true);
  };
  return (
    <div>
      {" "}
      <button
        onClick={addTask}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
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
