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
exports.getAllDesignation = exports.createDesignation = exports.getAllStage = exports.createStage = void 0;
const designation_entity_1 = __importDefault(require("../entities/designation.entity"));
const stages_entity_1 = __importDefault(require("../entities/stages.entity"));
const baseController_1 = require("../../../utils/baseController");
const stageRepo = stages_entity_1.default;
const designationRepo = designation_entity_1.default;
function createStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
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
    });
}
exports.createStage = createStage;
function getAllStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const stages = yield stageRepo.find({
            relations: {
                question: true,
            },
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
    });
}
exports.getAllStage = getAllStage;
function createDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
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
    });
}
exports.createDesignation = createDesignation;
function getAllDesignation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const designation = yield designationRepo.find();
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
    });
}
exports.getAllDesignation = getAllDesignation;
//# sourceMappingURL=v1.controller.js.map