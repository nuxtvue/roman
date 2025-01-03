import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import gigachatRoute from "./routes/gigachat.js";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));

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

export default app;
