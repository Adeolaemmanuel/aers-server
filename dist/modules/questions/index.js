"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_controller_1 = require("./controller/v1.controller");
const validators_1 = require("./controller/validators");
const questionV1 = express_1.default.Router();
questionV1.post("/", validators_1.createQuestionValidator, v1_controller_1.createQuestion);
questionV1.get("/:slug", v1_controller_1.getAllQuestions);
questionV1.post("/answer", v1_controller_1.insertAnswers);
exports.default = questionV1;
//# sourceMappingURL=index.js.map