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
exports.createUser = exports.getAllDesignation = exports.createDesignation = exports.getAllStage = exports.createStage = void 0;
const stages_entity_1 = __importDefault(require("../entities/stages.entity"));
const designation_entity_1 = __importDefault(require("../entities/designation.entity"));
const BaseController_1 = require("../../../utils/BaseController");
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const stageRepo = stages_entity_1.default;
const designationRepo = designation_entity_1.default;
const userRepo = user_entity_1.default;
function createStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const stages = yield stageRepo.insert(Object.assign({}, payload));
        if (!stages) {
            return BaseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to insert stages",
                status: false,
            });
        }
        BaseController_1.BaseController.ok(res, {
            data: stages.raw,
            message: "Stages inserted successfully",
            status: true,
        });
    });
}
exports.createStage = createStage;
function getAllStage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const stages = yield stageRepo.find();
        if (!stages) {
            return BaseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to get stages",
                status: false,
            });
        }
        BaseController_1.BaseController.ok(res, {
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
            return BaseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to insert designation",
                status: false,
            });
        }
        BaseController_1.BaseController.ok(res, {
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
            return BaseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to get designation",
                status: false,
            });
        }
        BaseController_1.BaseController.ok(res, {
            data: designation,
            message: "Designation fetched successfully",
            status: true,
        });
    });
}
exports.getAllDesignation = getAllDesignation;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const designation = yield designationRepo.findOneBy({
            id: payload.designation_id,
        });
        const user = yield userRepo.insert(Object.assign(Object.assign({}, payload), { designation }));
        if (!user) {
            return BaseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to insert designation",
                status: false,
            });
        }
        BaseController_1.BaseController.ok(res, {
            data: user.raw,
            message: "User fetched successfully",
            status: true,
        });
    });
}
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map