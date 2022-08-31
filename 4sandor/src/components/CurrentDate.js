import React from "react";
import { useLocation } from "react-router-dom";

const CurrentDate = () => {
  const location = useLocation();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div
      className={
        location.pathname === "/about"
          ? "current-date text-center"
          : "current-date"
      }
    >
      <h2>Current Date is {date}</h2>
    </div>
  );
};

export default CurrentDate;
