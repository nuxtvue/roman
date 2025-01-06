import mongoose from 'mongoose'

// Схема для хранения вопросов и ответов
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Question = mongoose.model("Question", questionSchema);

 
