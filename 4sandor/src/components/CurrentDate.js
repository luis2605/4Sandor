import React from "react";

const CurrentDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="current-date">
      <h2>Current Date is {date}</h2>
    </div>
  );
};

export default CurrentDate;
