import React from "react";

const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="add Task" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="add Day & Time" />
      </div>
      <div className="form-control">
        <label>Set reminder</label>
        <input type="checkbox" />
      </div>
    </form>
  );
};

export default AddTask;
