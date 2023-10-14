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
const designation_entity_1 = __importDefault(require("../../system/entities/designation.entity"));
let Users = class Users extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Index)("user_id"),
    (0, typeorm_1.Column)({ type: "uuid", unique: true }),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], Users.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Index)("email"),
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Users.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Users.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Index)("phone_number"),
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], Users.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => designation_entity_1.default),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", designation_entity_1.default)
], Users.prototype, "designation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], Users.prototype, "is_contactable", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)("users")
], Users);
exports.default = Users;
//# sourceMappingURL=user.entity.js.map