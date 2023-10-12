import React from "react";
import "./Exhibit.css";
import AddressRequest from "./AddressRequest";
import PacketLatencyDisplay from "./PacketLatencyDisplay";

const Exhibit = (props) => {
  return (
    <div className="exhibit">
      <h2 className="exhibitHeading">{props.heading}</h2>
      <div className="exhibitContent">
        { (props.url === "")? <PacketLatencyDisplay/> : <AddressRequest url={props.url} />}
      </div>
    </div>
  );
};

export default Exhibit;
