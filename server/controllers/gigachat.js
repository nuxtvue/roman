import axios from "axios";
import GigaChat from "gigachat";
import { Agent } from "node:https";
import { User } from "../models/user.model.js";
import natural from "natural";
import { Question } from "../models/question.js";
import { classifier, loadTrainingData } from "../index.js";

const httpsAgent = new Agent({
  rejectUnauthorized: false, // Отключает проверку корневого сертификата
  // Читайте ниже как можно включить проверку сертификата Мин. Цифры
});

function classifyWithConfidence(message, threshold) {
  const classifications = classifier.getClassifications(message);
  console.log(classifications);
  const topClassification = classifications[0];
  console.log(topClassification);
  if (topClassification.value >= threshold) {
    return topClassification.label;
  } else {
    return "Классификатор не может определить ответ.";
  }
}

export const getModelsGigachat = async (req, res) => {
  const findUser = await User.findOne({ _id: req.id });
  if (!findUser) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }
  const client = new GigaChat({
    timeout: 600,
    model: "GigaChat",
    credentials: process.env.GIGASECRET,
    httpsAgent: httpsAgent,
  });

  const message = req.body.message;

  try {
    await loadTrainingData();
    console.log(classifier);
    const answer = classifyWithConfidence(message, 0.4);
    console.log(answer);
    if (answer !== "Классификатор не может определить ответ.") {
      return res.status(200).json(answer);
    }
    return res.status(200).json("Ответ гигачата");
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
