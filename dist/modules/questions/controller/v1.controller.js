"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.getAllAnswers = exports.getAllQuestion = exports.updateQuestion = exports.insertAnswers = exports.getQuestionsBySlug = exports.createQuestion = void 0;
const questions_entity_1 = __importDefault(require("../entities/questions.entity"));
const stages_entity_1 = __importDefault(require("../../system/entities/stages.entity"));
const baseController_1 = require("../../../utils/baseController");
const answers_entity_1 = __importDefault(require("../entities/answers.entity"));
const user_entity_1 = __importDefault(require("../../user/entities/user.entity"));
const questionRepo = questions_entity_1.default;
const stagesRepo = stages_entity_1.default;
const answerRepo = answers_entity_1.default;
const userRepo = user_entity_1.default;
function createQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const stage = yield stagesRepo.findOne({
            where: { slug: payload.stage_slug },
        });
        if (!stage) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to getting stage",
                status: false,
            });
        }
        const question = yield questionRepo.insert(Object.assign({ stage }, payload));
        if (!question) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to inserting question",
                status: false,
            });
        }
        baseController_1.BaseController.ok(res, {
            message: "Question created successfully",
            status: true,
            data: question.raw,
        });
    });
}
exports.createQuestion = createQuestion;
function getQuestionsBySlug(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const slug = req.params.slug;
        const resp = yield questionRepo.find({
            where: { stage: { slug: slug } },
            order: { id: "ASC" },
            relations: {
                stage: true,
            },
        });
        if (!resp) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to getting question",
                status: false,
            });
        }
        baseController_1.BaseController.ok(res, {
            message: "Question created successfully",
            status: true,
            data: resp,
        });
    });
}
exports.getQuestionsBySlug = getQuestionsBySlug;
function insertAnswers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const email = req.headers.authorization;
        const answers = yield Promise.all(Object.keys(payload).map((key) => __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(payload[key])) {
                return {
                    question: yield questionRepo.findOne({
                        where: { id: parseInt(key) },
                    }),
                    values: payload[key],
                    user_id: (yield userRepo.findOne({ where: { email } })).user_id,
                };
            }
            else {
                return {
                    question: yield questionRepo.findOne({
                        where: { id: parseInt(key) },
                    }),
                    value: payload[key],
                    user_id: (yield userRepo.findOne({ where: { email } })).user_id,
                };
            }
        })));
        console.log(answers);
        const answer = yield answerRepo.create(answers);
        const saved = yield answerRepo.insert(answer);
        if (!saved) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to getting answer",
                status: false,
            });
        }
        baseController_1.BaseController.ok(res, {
            message: "Answer was submitted successfully",
            status: true,
            data: saved,
        });
    });
}
exports.insertAnswers = insertAnswers;
function updateQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = req.body;
            const question = yield questionRepo.findOne({ where: { id: payload.id } });
            question.input_type = payload.input_type;
            question.question = payload.question;
            question.stage = yield stagesRepo.findOne({
                where: { slug: payload.stage_slug },
            });
            const updated = yield questionRepo.save(question);
            baseController_1.BaseController.ok(res, {
                message: "Question updated successfully",
                status: true,
                data: updated,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.updateQuestion = updateQuestion;
function getAllQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const question = yield questionRepo.find({ relations: { stage: true } });
            baseController_1.BaseController.ok(res, { data: question, status: true });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.getAllQuestion = getAllQuestion;
function getAllAnswers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield answerRepo.findAndCount({
            relations: { question: true },
        });
        baseController_1.BaseController.ok(res, {
            data: answers,
            status: true,
            message: "Answers fetched successfully",
        });
    });
}
exports.getAllAnswers = getAllAnswers;
function deleteQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteQuestion = yield questionRepo.findOne({
            where: { id: req.body.id },
        });
        const deleted = yield questionRepo.remove(deleteQuestion);
        baseController_1.BaseController.ok(res, {
            data: deleted,
            status: true,
            message: "Question deleted successfully",
        });
    });
}
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=v1.controller.js.map