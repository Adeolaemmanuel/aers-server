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
exports.UpdateOnDesignationConstraintError1697313864152 = void 0;
class UpdateOnDesignationConstraintError1697313864152 {
    constructor() {
        this.name = 'UpdateOnDesignationConstraintError1697313864152';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_071a5e4a3131d00a0fc700af41"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_071a5e4a3131d00a0fc700af41" UNIQUE ("designationId")`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.UpdateOnDesignationConstraintError1697313864152 = UpdateOnDesignationConstraintError1697313864152;
//# sourceMappingURL=1697313864152-update_on_designation_constraint_error.js.map