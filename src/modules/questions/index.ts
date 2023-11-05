import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getAllAnswers,
  getAllQuestion,
  getQuestionsBySlug,
  insertAnswers,
  updateQuestion,
} from "./controller/v1.controller";
import { createQuestionValidator } from "./controller/validators";

const questionV1 = express.Router();

questionV1.post("/", createQuestionValidator, createQuestion);

questionV1.get("/", getAllQuestion);

questionV1.get("/:slug", getQuestionsBySlug);

questionV1.post("/answer", insertAnswers);

questionV1.patch("/", updateQuestion);

questionV1.delete("/", deleteQuestion);

questionV1.get("/answers", getAllAnswers);

export default questionV1;
