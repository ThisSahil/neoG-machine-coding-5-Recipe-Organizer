import React from "react";
import Topbar from "../Topbar/Topbar";
import Recepies from "../Receipes/Recepies";

const Main = () => {
  return (
    <div className="main-container">
      <Topbar />
      <Recepies />
    </div>
  );
};

export default Main;
