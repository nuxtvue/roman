import React, { useState } from "react";
import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
function App() {
  return (
    <div>
      <div id="topmenu" className="">
        <TopMenu />
      </div>
    </div>
  );
}

export default App;
