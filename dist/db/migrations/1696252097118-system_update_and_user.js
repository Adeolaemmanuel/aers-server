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
exports.SystemUpdateAndUser1696252097118 = void 0;
class SystemUpdateAndUser1696252097118 {
    constructor() {
        this.name = 'SystemUpdateAndUser1696252097118';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_9feae761f72ae4552b93e9f7393"`);
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "REL_9feae761f72ae4552b93e9f739"`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_9feae761f72ae4552b93e9f7393" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_9feae761f72ae4552b93e9f7393"`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "REL_9feae761f72ae4552b93e9f739" UNIQUE ("stageId")`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_9feae761f72ae4552b93e9f7393" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.SystemUpdateAndUser1696252097118 = SystemUpdateAndUser1696252097118;
//# sourceMappingURL=1696252097118-system_update_and_user.js.map