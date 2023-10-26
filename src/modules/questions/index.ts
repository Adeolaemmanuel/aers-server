import express from "express";
import {
  createQuestion,
  getAllQuestion,
  getQuestionsBySlug,
  insertAnswers,
  updateQuestion,
} from "./controller/v1.controller";
import { createQuestionValidator } from "./controller/validators";

const questionV1 = express.Router();

questionV1.post("/", createQuestionValidator, createQuestion);
questionV1.get("/:slug", getQuestionsBySlug);
questionV1.post("/answer", insertAnswers);
questionV1.get("/", getAllQuestion);
questionV1.patch("/", updateQuestion);

export default questionV1;
