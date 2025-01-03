import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "@/recoil/atom/userAtom";
import { useToast } from "@/hooks/use-toast";
const FindQuery = () => {
  const [queryGiga, setQueryGiga] = useState();
  const [resFromGiga, setResFromGiga] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const { toast } = useToast();
  const sendQueryHandler = async () => {
    if (!user?.email) {
      return toast({
        variant: "destructive",
        title: "Вы не авторизованы",
        description: "Пожалуйста войдите на сайт для использования сервиса",
      });
    }
    console.log(queryGiga);
    if (!queryGiga) {
      setResFromGiga("Введите запрос!");
    }
    setLoading(true);
    if (queryGiga) {
      setTimeout(async () => {
        const resfromgiga2 = await axios.post(
          import.meta.env.VITE_SERVER_DOMAIN + "/api/gigachat/getmodels",
          { message: queryGiga },
          {
            withCredentials: true,
          }
        );
        if (resfromgiga2.status === 404) {
          setLoading(false);
          toast({
            variant: "destructive",
            title: "ОШИБКА",
            description: "Ваш пользователь не найден",
          });
        }
        if (resfromgiga2.status === 200) {
          setResFromGiga(resfromgiga2.data);
          console.log(resfromgiga2);
          setLoading(false);
        }
      }, 500);
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
            className="md:w-1/3 h-14 text-md border-2 border-slate-600"
          />
          <Button
            {...(loading && { disabled: true })}
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
            className=" bg-slate-950 md:w-1/3 h-auto rounded-lg border-slate-600 border p-2 md:w-[100%]"
          >
            <div>
              <div>
                <span className="text-lg font-bold">Вы ввели запрос :</span>{" "}
                {queryGiga}
                {!user?.email && (
                  <div className="text-red-500 -mt-2 text-sm">
                    Вы не авторизованы! Пожалуйста войдите на сайт для получения
                    ответа на Ваши вопросы.
                  </div>
                )}
              </div>
              {loading && <div>Загрузка ответа...</div>}
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
