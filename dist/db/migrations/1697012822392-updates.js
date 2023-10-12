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
exports.Updates1697012822392 = void 0;
class Updates1697012822392 {
    constructor() {
        this.name = 'Updates1697012822392';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "answers" ADD "values" jsonb NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "is_contactable" boolean NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_contactable"`);
            yield queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "values"`);
        });
    }
}
exports.Updates1697012822392 = Updates1697012822392;
//# sourceMappingURL=1697012822392-updates.js.map