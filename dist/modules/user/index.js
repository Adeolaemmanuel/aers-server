"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_controller_1 = require("./controller/v1.controller");
const userRouterV1 = express_1.default.Router();
userRouterV1.get("/:id", v1_controller_1.getUser);
userRouterV1.post("/", v1_controller_1.createUser);
userRouterV1.patch("/", v1_controller_1.updateUser);
exports.default = userRouterV1;
//# sourceMappingURL=index.js.map