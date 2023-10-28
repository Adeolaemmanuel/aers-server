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
const stages_entity_1 = __importDefault(require("../../system/entities/stages.entity"));
const answers_entity_1 = __importDefault(require("./answers.entity"));
let Questions = class Questions extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Questions.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Questions.prototype, "input_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Questions.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stages_entity_1.default, (sta) => sta.question),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", stages_entity_1.default)
], Questions.prototype, "stage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answers_entity_1.default, (ans) => ans.question),
    __metadata("design:type", Array)
], Questions.prototype, "answer", void 0);
Questions = __decorate([
    (0, typeorm_1.Entity)("questions")
], Questions);
exports.default = Questions;
//# sourceMappingURL=questions.entity.js.map