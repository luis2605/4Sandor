import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <h4>Version 1.0.0</h4>
      <p>coded by Luisito Barquillo</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};
