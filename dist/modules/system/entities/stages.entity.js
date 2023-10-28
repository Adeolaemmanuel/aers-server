"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const base_entity_1 = __importDefault(require("../../../db/config/base.entity"));
const questions_entity_1 = __importDefault(require("../../questions/entities/questions.entity"));
let Stages = class Stages extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Stages.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Stages.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => questions_entity_1.default, (que) => que.stage),
    __metadata("design:type", questions_entity_1.default)
], Stages.prototype, "question", void 0);
Stages = __decorate([
    (0, typeorm_1.Entity)("stages")
], Stages);
exports.default = Stages;
//# sourceMappingURL=stages.entity.js.map