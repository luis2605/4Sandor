import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import CurrentDate from "./components/CurrentDate";
import Footer from "./components/Footer";
import { About } from "./components/About";

// import db from "./db.json";

function App() {
  useEffect(() => {
    setTasks(tasks);
  }, []);
  // Fetch Tasks from json-server on port 5000

  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();

  //   return data;
  // };

  // Fetch Task from json-server on port 5000

  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:8000/tasks/${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  const [tasks, setTasks] = useState([
    {
      text: "testing for email ",
      day: "feb 5th at 15:00",
      reminder: true,
      id: 0,
    },
    {
      text: "testing for email ",
      day: "feb 5th at 15:00",
      reminder: true,
      id: 1,
    },
    {
      text: "testing for email ",
      day: "feb 5th at 15:00",
      reminder: true,
      id: 2,
    },
  ]);
  const activeTasks = tasks.filter((task) => {
    if (task.reminder === true) {
      return true;
    }
    return false;
  }).length;

  const [addActive, setAddActive] = useState(false);

  //delete task
  const noTasks = (
    <p>Sorry, you are workin' to good.There are no task to show. </p>
  );
  const deleteTask = /*async*/ (id) => {
    // await fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder

  const toggleReminder = /*async*/ (id) => {
    // const taskToToggle = await fetchTask(id);

    // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    // const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updTask),
    // });

    // const data = await res.json();
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //add task open menu

  const addTaskMenu = (value) => {
    setAddActive(value);
  };
  //add task add new task to tasks

  const addTask = /*async*/ (task) => {
    // const res = await fetch("http://localhost:8000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });
    // const data = await res.json();
    console.log(task);

    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <div className="container">
        <Header onAddActive={addActive} onAddTaskMenu={addTaskMenu} />
        <CurrentDate />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {addActive && (
                  <AddTask
                    onAddTaskMenu={addTaskMenu}
                    tasks={tasks}
                    addTaskHandler={addTask}
                  />
                )}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  noTasks
                )}
                <p className="active-tasks">
                  {" "}
                  you have active {activeTasks} from {tasks.length} tasks.{" "}
                </p>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
