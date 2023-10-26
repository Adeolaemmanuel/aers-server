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
exports.getUser = exports.updateUser = exports.createUser = void 0;
const designation_entity_1 = __importDefault(require("../../system/entities/designation.entity"));
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const baseController_1 = require("../../../utils/baseController");
const designationRepo = designation_entity_1.default;
const userRepo = user_entity_1.default;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const designation = yield designationRepo.findOneBy({
            id: payload.designation_id,
        });
        payload.email = payload.email.toLowerCase();
        const user = yield userRepo.insert(Object.assign(Object.assign({}, payload), { designation }));
        if (!user) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to insert designation",
                status: false,
            });
        }
        baseController_1.BaseController.ok(res, {
            data: user.raw,
            message: "User fetched successfully",
            status: true,
        });
    });
}
exports.createUser = createUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const user = yield userRepo.findOne({
            where: [{ email: payload.email }, { phone_number: payload.phone_number }],
        });
        if (!user) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to get user",
                status: false,
            });
        }
        user.first_name = payload.first_name;
        user.last_name = payload.last_name;
        user.phone_number = payload.phone_number;
        user.is_contactable = payload.is_contactable;
        user.designation = yield designationRepo.findOne({
            where: { id: payload.designation_id },
        });
        const updated = yield userRepo.save(user);
        baseController_1.BaseController.ok(res, {
            data: updated,
            message: "User updated successfully",
            status: true,
        });
    });
}
exports.updateUser = updateUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = req.params.id;
        console.log(key);
        const user = yield userRepo.findOne({
            where: [{ email: key === null || key === void 0 ? void 0 : key.toLowerCase() }, { phone_number: key }],
        });
        if (!user) {
            return baseController_1.BaseController.clientError(res, {
                message: "An error occurred while trying to get user",
                status: false,
            });
        }
        baseController_1.BaseController.ok(res, {
            data: user,
            message: "User fetched successfully",
            status: true,
        });
    });
}
exports.getUser = getUser;
//# sourceMappingURL=v1.controller.js.map