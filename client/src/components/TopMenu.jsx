import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import RegisterForm from "./RegisterForm";
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  BsFillPersonPlusFill,
  BsFillPersonCheckFill,
  BsPersonFillDash,
} from "react-icons/bs";
import LoginForm from "./LoginForm";
import { useRecoilState } from "recoil";
import { userAtom } from "@/recoil/atom/userAtom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

const TopMenu = ({
  showRegister,
  setShowRegister,
  showLogin,
  setShowLogin,
}) => {
  const [user, setUser] = useRecoilState(userAtom);
  const logout = async (user) => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        setUser(null);
        toast({
          title: "Вы вышли из аккаунта",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        className="flex gap-6 flex-col md:flex-row mb-4 md:mb-0"
      >
        {user && (
          <div className="flex gap-2 items-center text-base">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-bold">{user.email}</span>
            <Button onClick={() => logout(user)}>
              <BsPersonFillDash />
              Выйти
            </Button>
          </div>
        )}
        {!user && (
          <Button
            className="flex gap-2 items-center text-base"
            onClick={() => setShowLogin(!showLogin)}
          >
            <BsFillPersonCheckFill />
            Вход
          </Button>
        )}

        {showLogin && (
          <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
        {!user && (
          <Button
            className="flex gap-2 items-center text-base"
            onClick={() => setShowRegister(!showRegister)}
          >
            <BsFillPersonPlusFill />
            Регистрация
          </Button>
        )}

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
