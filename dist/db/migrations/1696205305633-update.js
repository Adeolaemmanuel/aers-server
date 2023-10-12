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
exports.Update1696205305633 = void 0;
class Update1696205305633 {
    constructor() {
        this.name = 'Update1696205305633';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "stages" ALTER COLUMN "metadata" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "designation" ALTER COLUMN "metadata" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "metadata" DROP NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "metadata" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "designation" ALTER COLUMN "metadata" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "stages" ALTER COLUMN "metadata" SET NOT NULL`);
        });
    }
}
exports.Update1696205305633 = Update1696205305633;
//# sourceMappingURL=1696205305633-update.js.map