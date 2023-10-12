import React from "react";
import "./Exhibit.css";
import AddressRequest from "./AddressRequest";

const Exhibit = (props) => {
  // console.log(props);
  return (
    <div className="exhibit">
      <h2 className="exhibitHeading">{props.heading}</h2>
      <div className="exhibitContent">
        <AddressRequest url={props.url} />
      </div>
    </div>
  );
};

export default Exhibit;
