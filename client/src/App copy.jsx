import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
import HeroBack from "././assets/images/hero-back-illustration.svg";
import CtaIllustration from "././assets/images/cta-illustration.svg";
import PricingIllustration from "././assets/images/pricing-illustration.svg";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
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
    <div className="w-screen h-screen">
      <div id="topmenu" className="">
        <TopMenu />
        <img
          src={HeroBack}
          alt="hero-back-illustration"
          className="w-full absolute top-6 opacity-20"
        />
        <div className="flex w-[95%] justify-around my-4 mx-6 px-4 flex-wrap">
          <div className="w-1/3 text-lg">{typingRender(headerText)}</div>
          <div className="relative ">
            <div className="mt-[50px]">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 760 }}
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
            <div className="absolute top-[100px] right-[100px] w-[450px] ">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 760 }}
                transition={{ duration: 1, delay: 1 }}
                width={400}
                src={PricingIllustration}
                alt="pricing-illustration"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center ml-[250px] gap-4">
          <Input
            placeholder="Ваш запрос"
            className="w-1/3 h-14 text-md border-2 border-slate-600"
          />
          <Button className="w-1/8 h-12 text-md border-2 border-slate-600">
            Найти
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
