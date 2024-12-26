import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";
const FindQuery = () => {
  const [queryGiga, setQueryGiga] = useState();
  const [resFromGiga, setResFromGiga] = useState();
  const sendQueryHandler = () => {
    console.log(queryGiga);
    if (!queryGiga) {
      setResFromGiga("Введите запрос!");
    }
    if (queryGiga) {
      setTimeout(() => {
        setResFromGiga("Ожидаем ответа...");
        console.log(resFromGiga);
      }, 500);
    }

    if (queryGiga) {
      setTimeout(() => {
        setResFromGiga("Ответ получен!");
        console.log(resFromGiga);
      }, 1500);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mx-12">
        <div className="text-gray-400 text-sm md:-mb-2">
          Для использования сервиса вы должны быть авторизованы{" "}
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            onChange={(e) => setQueryGiga(e.target.value)}
            placeholder="Ваш запрос"
            className="w-1/3 h-14 text-md border-2 border-slate-600"
          />
          <Button
            className="w-1/8 h-14 text-md border-2 border-slate-600"
            onClick={() => sendQueryHandler()}
          >
            Найти
          </Button>
        </div>

        {queryGiga && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" bg-slate-950 w-1/3 h-auto rounded-lg border-slate-600 border p-2"
          >
            <div>
              <div>
                <span className="text-lg font-bold">Вы ввели запрос :</span>{" "}
                {queryGiga}
              </div>
              <div className="text-white mt-2 p-2">{resFromGiga}</div>
            </div>
          </motion.div>
        )}
        {resFromGiga && !queryGiga && (
          <div className="text-red-500 -mt-2 text-sm">Введите запрос!</div>
        )}
      </div>
    </div>
  );
};

export default FindQuery;
