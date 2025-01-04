import { motion } from "motion/react";
import TopMenu from "./components/TopMenu";
import HeroBack from "././assets/images/hero-back-illustration.svg";
import { LinearGradient } from "react-text-gradients";
import { Toaster } from "@/components/ui/toaster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroImg from "./components/HeroImg";
import FindQuery from "./components/FindQuery";
import { useState } from "react";
import zachem from "@/assets/images/zachem.jpg";
import kak from "@/assets/images/kak.jpg";
import RoutesMain from "./components/RoutesMain";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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
      <RoutesMain />
      <Toaster />
      <div id="topmenu" className="">
        <TopMenu
          showRegister={showRegister}
          setShowRegister={setShowRegister}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
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
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 2 }}
            src={zachem}
            alt="zachem"
            className=" rounded-md"
          />
        </div>
        <motion.div
          className="w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Зачем ко мне обращаться? </h2>
          В первую очередь, вы экономите свое время, получая все ответы у меня
          без необходимости вникать в сложные законодательные акты и поиске в
          интернете и форумах. Я обучался у лучших специалистов и на опыте
          крупнейших организаций, и, если мне зададут какой-то новый и
          интересный вопрос, я знаю, как быстро на него получить
          квалифицированный ответ. Огромный массив данных обеспечивает
          своевременность, компетентность и полноту моих консультаций.
        </motion.div>
      </div>
      <div className="md:flex-row gap-4 mx-10 mt-[50px] items-center justify-center flex flex-wrap flex-col">
        <div className="md:w-1/3">
          {" "}
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 2 }}
            src={kak}
            alt="kak"
            className=" rounded-md"
          />
        </div>
        <motion.div
          className="w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Готов помочь вам в любое время{" "}
          </h2>
          Обращайтесь ко мне с вопросами по охране труда в любое удобное для вас
          время. Формулируйте запросы, как вам удобно, – консультацию вы
          получите незамедлительно. Взаимодействие со мной очень простое,
          понятное и удобное.
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mx-10 mt-[50px] items-center justify-around mb-[50px]">
        <motion.div
          className="md:w-1/3 w-full"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <Card className="w-full bg-transparent text-white h-36">
            <CardHeader>
              <CardTitle>Помогаю создать СУОТ</CardTitle>
            </CardHeader>
            <CardContent>
              <p> - подскажи с чего начать по охране труда?</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 2 }}
        >
          <Card className="w-full bg-transparent text-white h-36">
            <CardHeader>
              <CardTitle>
                Стараюсь разъяснить непонятные моменты в охране труда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p> - чем вводный инструктаж отличается от первичного?</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
        >
          <Card className="w-full bg-transparent text-white h-36">
            <CardHeader>
              <CardTitle>Просто объясняю сложное</CardTitle>
            </CardHeader>
            <CardContent>
              <p> -как определить, какие СИЗ нужны работнику?</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
