import React, { useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket("ws://localhost:55455");

const PacketLatencyDisplay = () => {
  const [latency, setLatency] = useState(null);

  client.onmessage = (message) => {
    setLatency(new Date().getTime() - parseInt(message.data));
  };
  return <div className="PacketLatencyDisplay">{latency}</div>;
};

export default PacketLatencyDisplay;
