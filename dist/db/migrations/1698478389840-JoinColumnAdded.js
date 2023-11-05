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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinColumnAdded1698478389840 = void 0;
class JoinColumnAdded1698478389840 {
    constructor() {
        this.name = 'JoinColumnAdded1698478389840';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE INDEX "IDX_01586714e6612fa9c061c9652b" ON "questions" ("input_type") `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP INDEX "public"."IDX_01586714e6612fa9c061c9652b"`);
        });
    }
}
exports.JoinColumnAdded1698478389840 = JoinColumnAdded1698478389840;
//# sourceMappingURL=1698478389840-JoinColumnAdded.js.map