import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import gigachatRoute from "./routes/gigachat.js";
import natural from "natural";
import { Question } from "./models/question.js";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
export const classifier = new natural.BayesClassifier(natural.PorterStemmerRu);
export const loadTrainingData = async () => {
  try {
    const questions = await Question.find();

    if (questions.length === 0) {
      console.log("Нет данных для обучения.");
      return; // если нет данных, пропускаем обучение
    }

    // Добавляем данные в классификатор
    questions.forEach((q) => {
      classifier.addDocument(q.question, q.answer);
      classifier.addDocument;
    });

    classifier.train();
    // Обучаем классификатор
    console.log("Классификатор обучен на данных из базы.");
  } catch (error) {
    console.log("Ошибка при загрузке данных для обучения:", error);
  }
};
const allowedOrigins = [
  "http://localhost:5173",
  "http://62.109.13.68",
  "http://62.109.13.68:5173",
  "https://botehs.ru",
  "http://botehs.ru",
  "http://botehs.ru:5173",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Не разрешен доступ из этого источника"));
    }
  },
  credentials: true,
};
loadTrainingData();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors(corsOptions));

//ROUTES
app.use("/api/user", userRoute);
app.use("/api/gigachat", gigachatRoute);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example2 app listening on port 3000!");
});

app.post("/api/train", async (req, res) => {
  const { text, label } = req.body;
  const findQuestion = await Question.findOne({ question: text });
  if (findQuestion) {
    return res
      .status(400)
      .json({ message: "Вопрос уже существует в базе данных" });
  }

  const newQuestion = new Question({ question: text, answer: label });
  await newQuestion.save();

  // Обучаем классификатор на новых данных
  classifier.addDocument(text, label);
  classifier.train();

  res.status(200).json({ message: "Модель обучена новым данным." });
});
app.post("/api/query", (req, res) => {
  const { question } = req.body;
  console.log(classifier);
  /*  if (classifier.documents.length === 0) {
    return res.status(400).json({ error: "Классификатор еще не обучен" });
  } */

  const answer = classifier.classify(question);
  res.json({ answer });
});

// Загружаем данные и обучаем классификатор при старте

export default app;
