import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

  const [addActive, setAddActive] = useState(false);

  //delete task
  const noTasks = (
    <p>Sorry, you are workin' to good.There are no task to show. </p>
  );
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(tasks[id].reminder);
  };

  //add task

  const addTask = (value) => {
    setAddActive(value);
  };

  return (
    <div className="container">
      <Header onAddActive={addActive} onAddTask={addTask} />
      {addActive && <AddTask />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        noTasks
      )}
    </div>
  );
}

export default App;
