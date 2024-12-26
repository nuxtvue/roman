import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
import HeroBack from "././assets/images/hero-back-illustration.svg";
import { LinearGradient } from "react-text-gradients";

import HeroImg from "./components/HeroImg";
import FindQuery from "./components/FindQuery";
import { useState } from "react";
import zachem from "@/assets/images/zachem.jpg";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const headerText = ` ваш цифровой помощник по охране труда. Теперь я использую нейросеть последнего поколения с накопленными знаниями лучших специалистов по охране труда и доступен в любое удобное для вас время в новом Чате. Постоянно совершенствую свои навыки и развиваюсь, поэтому вы можете найти ответ на любой ваш вопрос по охране труда. `;
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
          <div className="md:w-1/3 text-lg">
            <LinearGradient
              className="text-3xl font-bold"
              gradient={["to left", "#17acff ,#ff68f0"]}
            >
              Привет. Меня зовут Роман -
            </LinearGradient>
            {typingRender(headerText)}
          </div>
          <HeroImg />
        </div>
        <FindQuery />
      </div>
      <div className="md:flex-row gap-4 mx-10 mt-[50px] items-center justify-center flex flex-wrap flex-col">
        <div className="md:w-1/3">
          {" "}
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2, type: "spring" }}
            src={zachem}
            alt="zachem"
            className=" rounded-md"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Зачем ко мне обращаться? </h2>
          В первую очередь, вы экономите свое время, получая все ответы у меня
          без необходимости вникать в сложные законодательные акты и поиске в
          интернете и форумах. Я обучался у лучших специалистов и на опыте
          крупнейших организаций, и, если мне зададут какой-то новый и
          интересный вопрос, я знаю, как быстро на него получить
          квалифицированный ответ. Огромный массив данных обеспечивает
          своевременность, компетентность и полноту моих консультаций.
        </div>
      </div>
    </div>
  );
}

export default App;
