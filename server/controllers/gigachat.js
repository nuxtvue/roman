import axios from "axios";
import GigaChat from "gigachat";
import { Agent } from "node:https";
import { User } from "../models/user.model.js";
const httpsAgent = new Agent({
  rejectUnauthorized: false, // Отключает проверку корневого сертификата
  // Читайте ниже как можно включить проверку сертификата Мин. Цифры
});

export const getModelsGigachat = async (req, res) => {
  const findUser = await User.findOne({ _id: req.id });
  if (!findUser) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }
  const client = new GigaChat({
    timeout: 600,
    model: "GigaChat",
    credentials:
      "YzFiOTdkZjEtMzYyMy00MjQwLWI5NDUtZGM1ZGM3ZDJiOTgzOmQ4ZWQxNDIzLTEyMTMtNDQxMC04ZjExLWZlNWQzNzVkMjdlMA==",
    httpsAgent: httpsAgent,
  });

  const message = req.body.message;
  try {
    client
      .chat({
        messages: [{ role: "user", content: message }],
      })
      .then((resp) => {
        res.status(200).json(resp.choices[0]?.message.content);
        console.log(resp.choices[0]?.message.content);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
