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
exports.getSystemStats = exports.getAllDesignation = exports.updateDesignation = exports.deleteDesignation = exports.createDesignation = exports.getAllStage = exports.updateStage = exports.deleteStage = exports.createStage = void 0;
const designation_entity_1 = __importDefault(require("../entities/designation.entity"));
const stages_entity_1 = __importDefault(require("../entities/stages.entity"));
const baseController_1 = require("../../../utils/baseController");
const slugify_1 = __importDefault(require("slugify"));
const user_entity_1 = __importDefault(require("../../../modules/user/entities/user.entity"));
const questions_entity_1 = __importDefault(require("../../../modules/questions/entities/questions.entity"));
const stageRepo = stages_entity_1.default;
const designationRepo = designation_entity_1.default;
const userRepo = user_entity_1.default;
const question = questions_entity_1.default;
function createStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = req.body;
            payload.slug = (0, slugify_1.default)(payload.name, { lower: true, trim: true });
            const stages = yield stageRepo.insert(Object.assign({}, payload));
            if (!stages) {
                return baseController_1.BaseController.clientError(res, {
                    message: "An error occurred while trying to insert stages",
                    status: false,
                });
            }
            baseController_1.BaseController.ok(res, {
                data: stages.raw,
                message: "Stages inserted successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.createStage = createStage;
function deleteStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const slug = req.body.slug;
            const stage = yield stageRepo.findOne({ where: { slug } });
            const isDeleted = yield stageRepo.remove(stage);
            baseController_1.BaseController.ok(res, {
                data: isDeleted,
                message: "Stage deleted successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.deleteStage = deleteStage;
function updateStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        try {
            const stage = yield stageRepo.findOne({ where: { slug: payload.slug } });
            payload.slug = (0, slugify_1.default)(payload.name, { lower: true, trim: true });
            stage.name = payload.name;
            stage.slug = payload.slug;
            const saved = yield stageRepo.save(stage);
            baseController_1.BaseController.ok(res, {
                data: saved,
                message: "Stage updated successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.updateStage = updateStage;
function getAllStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const stages = yield stageRepo.find({
                relations: {
                    question: true,
                },
                order: { created_at: "DESC" },
            });
            if (!stages) {
                return baseController_1.BaseController.clientError(res, {
                    message: "An error occurred while trying to get stages",
                    status: false,
                });
            }
            baseController_1.BaseController.ok(res, {
                data: stages,
                message: "Stages fetched successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.getAllStage = getAllStage;
function createDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = req.body;
            payload.slug = (0, slugify_1.default)(payload.name, { lower: true, trim: true });
            const designation = yield designationRepo.insert(Object.assign({}, payload));
            if (!designation) {
                return baseController_1.BaseController.clientError(res, {
                    message: "An error occurred while trying to insert designation",
                    status: false,
                });
            }
            baseController_1.BaseController.ok(res, {
                data: designation.raw,
                message: "Designation inserted successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.createDesignation = createDesignation;
function deleteDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const slug = req.body.slug;
            const designation = yield designationRepo.findOne({ where: { slug } });
            const isDeleted = yield designationRepo.remove(designation);
            baseController_1.BaseController.ok(res, {
                data: isDeleted,
                message: "Designation deleted successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.deleteDesignation = deleteDesignation;
function updateDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        try {
            const designation = yield designationRepo.findOne({
                where: { slug: payload.slug },
            });
            payload.slug = (0, slugify_1.default)(payload.name, { lower: true, trim: true });
            designation.name = payload.name;
            designation.slug = payload.slug;
            const saved = yield designationRepo.save(designation);
            baseController_1.BaseController.ok(res, {
                data: saved,
                message: "Designation updated successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.updateDesignation = updateDesignation;
function getAllDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const designation = yield designationRepo.find({
                order: { created_at: "DESC" },
            });
            if (!designation) {
                return baseController_1.BaseController.clientError(res, {
                    message: "An error occurred while trying to get designation",
                    status: false,
                });
            }
            baseController_1.BaseController.ok(res, {
                data: designation,
                message: "Designation fetched successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.getAllDesignation = getAllDesignation;
function getSystemStats(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const stats = {
                user: 0,
                questions: 0,
                stages: 0,
                designation: 0,
            };
            stats.user = yield userRepo.count();
            stats.questions = yield question.count();
            stats.stages = yield stageRepo.count();
            stats.designation = yield designationRepo.count();
            baseController_1.BaseController.ok(res, {
                data: stats,
                message: "Dashboard fetched successfully",
                status: true,
            });
        }
        catch (error) {
            baseController_1.BaseController.fail(res, error);
        }
    });
}
exports.getSystemStats = getSystemStats;
//# sourceMappingURL=v1.controller.js.map