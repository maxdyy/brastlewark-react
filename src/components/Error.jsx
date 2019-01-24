import React from "react";
import "../css/NoGnomes.css";

const Error = ({ message }) => (
  <div className="bc-app__noGnomes">
    <span>{message}</span>
  </div>
);

export default Error;
