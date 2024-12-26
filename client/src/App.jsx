import React, { useState } from "react";
import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
import HeroBack from "././assets/images/hero-back-illustration.svg";
import CtaIllustration from "././assets/images/cta-illustration.svg";
function App() {
  return (
    <div>
      <div id="topmenu" className="">
        <TopMenu />
        <img
          src={HeroBack}
          alt="hero-back-illustration"
          className="w-full absolute top-6 left-0 z-[-1] opacity-20"
        />
        <div className="flex w-full justify-around my-4 mx-6 px-4 flex-wrap">
          <div className="w-1/3 text-lg">
            Робот Роман - Виртуальный ассистент № 1, созданный в Яндексе1. Я
            всегда рядом и готов помочь — найти что‑нибудь в интернете, включить
            музыку, зажечь свет или даже придумать что попросите
          </div>
          <div className="mt-[50px]">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 720 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
                restDelta: 0.001,
                restSpeed: 0.001,
                velocity: 0.001,
              }}
              className="w-full"
              src={CtaIllustration}
              alt="cta-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
