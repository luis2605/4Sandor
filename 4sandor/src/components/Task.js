import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const onDeleteHandler = () => {
    return onDelete(task.id);
  };
  //code for deleting on swipe left (mobil)
  const onDeleteHandlerWithEffect = () => {
    return onDelete(task.id);
  };
  const onToggleHandler = () => {
    return onToggle(task.id);
  };
  return (
    <div
      className={task.reminder ? "task reminder" : " task"}
      onTouchMove={onDeleteHandlerWithEffect}
    >
      <div className="container-text-icon">
        <h3 onClick={onToggleHandler}> {task.text}</h3>
        <FaTimes onClick={onDeleteHandler} />
      </div>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
