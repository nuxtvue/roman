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
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmerRu;

function classifyWithConfidence(message, threshold) {
  const classifications = classifier.getClassifications(message);

  const topClassification = classifications[0];
  // console.log(topClassification);
  if (topClassification.value >= threshold) {
    return topClassification.label;
  } else {
    return "Классификатор не может определить ответ.";
  }
}
async function findClosestMatch(input) {
  const questions = await Question.find();
  let bestMatch = [];

  questions.forEach((q) => {
    const inputStemmed = tokenizer.tokenize(input).map(stemmer.stem).join(" ");
    const questionStemmed = tokenizer
      .tokenize(q.question)
      .map(stemmer.stem)
      .join(" ");
    console.log(questionStemmed);

    const similarity = natural.JaroWinklerDistance(
      inputStemmed,
      questionStemmed
    );
    console.log(similarity);

    if (similarity > 0.6) {
      bestMatch.push({
        score: similarity,
        question: q.question,
        answer: q.answer,
      });
    }
  });
  bestMatch.sort((a, b) => b.score - a.score);
  console.log(bestMatch);

  return bestMatch[0];
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

    const answer = await findClosestMatch(message);
    console.log(answer);
    if (answer) {
      findUser.countQueriesFromDatabase += 1;
      findUser.lastQuery = message;
      await findUser.save();
      return res.status(200).json(answer.answer);
    }

    client
      .chat({
        messages: [{ role: "user", content: message }],
      })
      .then((resp) => {
        res.status(200).json(resp.choices[0]?.message.content);
        console.log(resp.choices[0]?.message.content);
        findUser.countQueriesGigachat += 1;
        findUser.lastQuery = message;
        findUser.save();
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
