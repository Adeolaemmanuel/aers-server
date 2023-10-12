"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validators_js_1 = require("./controller/validators.js");
const v1_controller_js_1 = require("./controller/v1.controller.js");
const systemRouterV1 = express_1.default.Router();
systemRouterV1.post("/stages/add", validators_js_1.createStageValidator, v1_controller_js_1.createStage);
systemRouterV1.get("/stages", v1_controller_js_1.getAllStage);
systemRouterV1.get("/designation", v1_controller_js_1.getAllDesignation);
systemRouterV1.post("/designation/add", validators_js_1.createDesignationValidator, v1_controller_js_1.createDesignation);
systemRouterV1.post("/");
exports.default = systemRouterV1;
//# sourceMappingURL=index.js.map