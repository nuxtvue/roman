import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: ["http://localhost:5173", "http://62.109.13.68/"],
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example2 app listening on port 3000!");
});

export default app;
