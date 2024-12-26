import { Button } from "./ui/button";
import { motion } from "motion/react";

const TopMenu = () => {
  return (
    <div className="flex flex-row justify-around items-center gap-4 mt-4 mx-8 text-lg p-4 shadow-md shadow-slate-600 rounded-lg">
      <div className="flex flex-row gap-4">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          Логотип
        </motion.div>
        <div>Главная</div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="userSettings"
        className="flex gap-6"
      >
        <Button className="flex gap-2 items-center text-base">Вход</Button>

        <Button className="flex gap-2 items-center text-base">
          Регистрация11112312
        </Button>
      </motion.div>
    </div>
  );
};

export default TopMenu;
