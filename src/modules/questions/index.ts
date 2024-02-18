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
import { usersAuthMiddleWare } from "../../utils/middleware/auth";

const questionV1 = express.Router();

questionV1.get("/answers", getAllAnswers);

questionV1.post("/answer", usersAuthMiddleWare, insertAnswers);

questionV1.post("/", createQuestionValidator, createQuestion);

questionV1.get("/", getAllQuestion);

questionV1.patch("/", updateQuestion);

questionV1.delete("/", deleteQuestion);

questionV1.get("/:slug", getQuestionsBySlug);

export default questionV1;
