"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validators_1 = require("./controller/validators");
const v1_controller_1 = require("./controller/v1.controller");
const systemRouterV1 = express_1.default.Router();
systemRouterV1.get("/stages", v1_controller_1.getAllStage);
systemRouterV1.post("/stages/add", validators_1.createStageValidator, v1_controller_1.createStage);
systemRouterV1.delete("/stages/remove", v1_controller_1.deleteStage);
systemRouterV1.get("/designation", v1_controller_1.getAllDesignation);
systemRouterV1.post("/designation/add", validators_1.createDesignationValidator, v1_controller_1.createDesignation);
systemRouterV1.delete("/designation/remove", v1_controller_1.deleteDesignation);
systemRouterV1.get("/stats", v1_controller_1.getSystemStats);
exports.default = systemRouterV1;
//# sourceMappingURL=index.js.map