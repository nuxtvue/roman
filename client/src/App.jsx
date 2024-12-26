import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
import HeroBack from "././assets/images/hero-back-illustration.svg";

import HeroImg from "./components/HeroImg";
import FindQuery from "./components/FindQuery";
import { useState } from "react";
function App() {
  const [showRegister, setShowRegister] = useState(false);
  const headerText = `РОБОТ РОМАН - Виртуальный ассистент №1, созданный в Яндексе1. Я
            всегда рядом и готов помочь — найти что‑нибудь в интернете, включить
            музыку, зажечь свет или даже придумать что попросите! `;
  const typingRender = (text) => {
    return text.split("").map((char, index) => {
      return (
        <motion.span
          key={char + "-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0 }}
          className="text-xl "
        >
          {char}
        </motion.span>
      );
    });
  };
  return (
    <div>
      <div id="topmenu" className="">
        <TopMenu
          showRegister={showRegister}
          setShowRegister={setShowRegister}
        />
        <img
          src={HeroBack}
          alt="hero-back-illustration"
          className="w-full absolute top-6 left-0 z-[-1] opacity-20"
        />
        <div className="flex w-full justify-around my-8  px-4 flex-wrap">
          <div className="w-1/3 text-lg">{typingRender(headerText)}</div>
          <HeroImg />
        </div>
        <FindQuery />
      </div>
    </div>
  );
}

export default App;
