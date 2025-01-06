import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";

const PanelPage = () => {
  const [aggregateUsers, setAggregateUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trainingText, setTrainingText] = useState("");
  const [trainingLabel, setTrainingLabel] = useState("");
  const [answer, setAnswer] = useState("");

  const { toast } = useToast();
  /*   const getAggregateUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/getall", {
        withCredentials: true,
      });
      if (res.data.success) {
        console.log(res.data);
        setAggregateUsers(res.data.aggregateUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };
 */
  useEffect(() => {
    /*  getAggregateUsers(); */
  }, []);
  const handleTrainSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/train",
        {
          text: trainingText,
          label: trainingLabel,
        }
      );
      console.log(res);
      toast({
        title: "Модель обучена",
      });
      setAnswer("Модель обучена новым данным.");
      setTrainingText("");
      setTrainingLabel("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка при обучении модели",
        description: error.response.data.message,
      });
      setTrainingLabel("");
      setTrainingText("");
      setAnswer("Ошибка при обучении модели");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-center text-lg text-purple-700 mb-4">
        Панель администратора
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <span className="text-lg text-center mx-auto mb-4">
            ОБУЧЕНИЕ РОБОТА
          </span>
          <form
            onSubmit={handleTrainSubmit}
            className="flex flex-col items-center justify-center w-full gap-4"
          >
            <Input
              type="text"
              placeholder="Ваш вопрос"
              className="w-1/2"
              onChange={(e) => setTrainingText(e.target.value)}
            />
            <textarea
              onChange={(e) => setTrainingLabel(e.target.value)}
              placeholder="Ответ на Ваш вопрос"
              className="bg-transparent text-white border rounded-md p-2 w-1/2 h-96"
              rows={5}
            />
            <button
              type="submit"
              className="mt-4 bg-blue-800 p-2 rounded-md hover:bg-blue-600 text-white w-[200px]"
              disabled={loading}
            >
              {loading ? "Обучаю модель..." : "Обучить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PanelPage;
