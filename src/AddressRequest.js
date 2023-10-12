import React from "react";
import { useState, useEffect } from "react";
import "./AddressRequest.css";

const AddressRequest = (props) => {
  const [ip, setIp] = useState("");
  // console.log(props.url);
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((json) => setIp(json.ip));
  });
  return <div className="addressRequest">{ip}</div>;
};

export default AddressRequest;
