import express from "express";
import {
  createQuestion,
  getAllQuestions,
  insertAnswers,
  updateQuestion,
} from "./controller/v1.controller";
import { createQuestionValidator } from "./controller/validators";

const questionV1 = express.Router();

questionV1.post("/", createQuestionValidator, createQuestion);
questionV1.get("/:slug", getAllQuestions);
questionV1.post("/answer", insertAnswers);
questionV1.patch("/", updateQuestion);

export default questionV1;
