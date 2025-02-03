import React from "react";
import Users from "./Users";
import CBC from "./CBC";
import FBC from "./FBC";
const App = () => {
  return (
    <div>
      <h1>React JSON Data Example</h1>
      <div>
      <div style={{ width: "40%", display: "inline-block" }}><CBC value = "CBC" /></div>
      <div style={{ width: "40%", display: "inline-block" }}><FBC value = "FBC"/></div>
      </div>
      <div><Users /></div>
    </div>
  );
};

export default App;