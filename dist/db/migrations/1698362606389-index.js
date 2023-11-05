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
exports.Index1698362606389 = void 0;
class Index1698362606389 {
    constructor() {
        this.name = 'Index1698362606389';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE INDEX "IDX_9c32cec6c71e06da0254f2226c" ON "answers" ("id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_f4cf663ebeca05b7a12f6a2cc9" ON "answers" ("user_id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_08a6d4b0f49ff300bf3a0ca60a" ON "questions" ("id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_16efa0f8f5386328944769b9e6" ON "stages" ("id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_8c84a3c335a852ff2d426cb011" ON "designation" ("id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_8c84a3c335a852ff2d426cb011"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_16efa0f8f5386328944769b9e6"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_08a6d4b0f49ff300bf3a0ca60a"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_f4cf663ebeca05b7a12f6a2cc9"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_9c32cec6c71e06da0254f2226c"`);
        });
    }
}
exports.Index1698362606389 = Index1698362606389;
//# sourceMappingURL=1698362606389-index.js.map