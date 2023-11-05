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
const questions_entity_1 = __importDefault(require("./questions.entity"));
const base_entity_1 = __importDefault(require("../../../db/config/base.entity"));
const user_entity_1 = __importDefault(require("../../../modules/user/entities/user.entity"));
let Answers = class Answers extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Answers.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Answers.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Answers.prototype, "values", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => questions_entity_1.default, (que) => que.answer, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Answers.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default, (user) => user.answers, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Answers.prototype, "user", void 0);
Answers = __decorate([
    (0, typeorm_1.Entity)("answers")
], Answers);
exports.default = Answers;
//# sourceMappingURL=answers.entity.js.map