import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import RegisterForm from "./RegisterForm";
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill, BsFillPersonCheckFill } from "react-icons/bs";

const TopMenu = ({ showRegister, setShowRegister }) => {
  console.log(showRegister);
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-4 mx-8 text-lg shadow-md shadow-slate-600 rounded-lg w-[95%]">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          <img src={Logo} alt="logo" className="w-20" />
        </motion.div>
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-60px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1 }}
          >
            <span className="font-bold">Главная</span>
          </motion.div>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="userSettings"
        className="flex gap-6 flex-col md:flex-row"
      >
        <Button className="flex gap-2 items-center text-base">
          <BsFillPersonCheckFill />
          Вход
        </Button>

        <Button
          className="flex gap-2 items-center text-base"
          onClick={() => setShowRegister(!showRegister)}
        >
          <BsFillPersonPlusFill />
          Регистрация
        </Button>
        {showRegister && (
          <RegisterForm
            showRegister={showRegister}
            setShowRegister={setShowRegister}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TopMenu;
