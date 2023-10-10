import React from "react";
import "./Exhibit.css";

const Exhibit = (props) => {
  return (
    <div className="exhibit">
      <h2 className="exhibitHeading">{props.heading}</h2>
      <div className="exhibitContent">{props.text}</div>
    </div>
  );
};

export default Exhibit;
