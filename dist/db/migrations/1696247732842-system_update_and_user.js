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
exports.SystemUpdateAndUser1696247732842 = void 0;
class SystemUpdateAndUser1696247732842 {
    constructor() {
        this.name = 'SystemUpdateAndUser1696247732842';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "user_id" text NOT NULL, "value" text NOT NULL, "questionId" integer, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "question" text NOT NULL, "input_type" text NOT NULL, "options" jsonb, "stageId" integer, CONSTRAINT "REL_9feae761f72ae4552b93e9f739" UNIQUE ("stageId"), CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_96aac72f1574b88752e9fb00089" UNIQUE ("user_id")`);
            yield queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_c38697a57844f52584abdb878d7" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_9feae761f72ae4552b93e9f7393" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_9feae761f72ae4552b93e9f7393"`);
            yield queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_c38697a57844f52584abdb878d7"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_96aac72f1574b88752e9fb00089"`);
            yield queryRunner.query(`DROP TABLE "questions"`);
            yield queryRunner.query(`DROP TABLE "answers"`);
        });
    }
}
exports.SystemUpdateAndUser1696247732842 = SystemUpdateAndUser1696247732842;
//# sourceMappingURL=1696247732842-system_update_and_user.js.map