import React, { useState } from "react";

const AddTask = ({ onAddTaskMenu, tasks, addTaskHandler }) => {
  const [taskAdded, setTaskAdded] = useState("");
  const [dayAdded, setDayAdded] = useState("");
  const [reminderAdded, setReminderAdded] = useState(false);

  const [invalidField, setInvalidField] = useState(false);

  const addTask = (e) => {
    if (e.target.value.length < 5) {
      setInvalidField(true);
    } else {
      setInvalidField(false);
    }
    setTaskAdded(e.target.value);
  };

  const addDay = (e) => {
    if (e.target.value.length < 5) {
      setInvalidField(true);
    } else {
      setInvalidField(false);
    }
    setDayAdded(e.target.value);
  };

  const addReminder = (e) => {
    if (e.target.checked === true) {
      setReminderAdded(true);
    } else return;
  };
  //generating random for id

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const submitt = (e) => {
    e.preventDefault();
    if (taskAdded.length !== 0) {
      addTaskHandler({
        id: getRandom(tasks.length, 1000),
        text: taskAdded,
        day: dayAdded,
        reminder: reminderAdded,
      });
    } else return;

    return onAddTaskMenu(false);
  };
  return (
    <form className="add-form" onSubmit={submitt}>
      <div className="form-control">
        <label>Task</label>
        <input
          className={invalidField ? "red" : ""}
          onChange={addTask}
          name="task"
          value={taskAdded}
          type="text"
          placeholder="add Task"
        />
      </div>
      <div className="form-control ">
        <label>Day & Time</label>
        <input
          className={invalidField ? "red" : ""}
          onChange={addDay}
          name="day"
          value={dayAdded}
          type="text"
          placeholder="add Day & Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          name="reminderActive"
          onChange={addReminder}
          checked={reminderAdded}
          type="checkbox"
        />
      </div>

      <input className="btn btn-block" type="submit" value="save task" />
    </form>
  );
};

export default AddTask;
