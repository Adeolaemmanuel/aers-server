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
exports.MigrationInit1699216786152 = void 0;
class MigrationInit1699216786152 {
    constructor() {
        this.name = 'MigrationInit1699216786152';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "designation" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_8c84a3c335a852ff2d426cb0112" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_8c84a3c335a852ff2d426cb011" ON "designation" ("id") `);
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "last_name" text NOT NULL, "first_name" text NOT NULL, "phone_number" text NOT NULL, "is_contactable" boolean NOT NULL, "active" boolean DEFAULT true, "designationId" integer, CONSTRAINT "UQ_96aac72f1574b88752e9fb00089" UNIQUE ("user_id"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
            yield queryRunner.query(`CREATE INDEX "user_id" ON "users" ("user_id") `);
            yield queryRunner.query(`CREATE INDEX "email" ON "users" ("email") `);
            yield queryRunner.query(`CREATE INDEX "phone_number" ON "users" ("phone_number") `);
            yield queryRunner.query(`CREATE TABLE "answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "value" text, "values" jsonb, "questionId" integer, "userId" integer, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_9c32cec6c71e06da0254f2226c" ON "answers" ("id") `);
            yield queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "question" text NOT NULL, "input_type" text NOT NULL, "options" jsonb, "stageId" integer, "userId" integer, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_08a6d4b0f49ff300bf3a0ca60a" ON "questions" ("id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_01586714e6612fa9c061c9652b" ON "questions" ("input_type") `);
            yield queryRunner.query(`CREATE TABLE "stages" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_16efa0f8f5386328944769b9e6" ON "stages" ("id") `);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_c38697a57844f52584abdb878d7" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_9feae761f72ae4552b93e9f7393" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_bc2370231ea3e3d296963f33939" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_bc2370231ea3e3d296963f33939"`);
            yield queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_9feae761f72ae4552b93e9f7393"`);
            yield queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678"`);
            yield queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_c38697a57844f52584abdb878d7"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_16efa0f8f5386328944769b9e6"`);
            yield queryRunner.query(`DROP TABLE "stages"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_01586714e6612fa9c061c9652b"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_08a6d4b0f49ff300bf3a0ca60a"`);
            yield queryRunner.query(`DROP TABLE "questions"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_9c32cec6c71e06da0254f2226c"`);
            yield queryRunner.query(`DROP TABLE "answers"`);
            yield queryRunner.query(`DROP INDEX "public"."phone_number"`);
            yield queryRunner.query(`DROP INDEX "public"."email"`);
            yield queryRunner.query(`DROP INDEX "public"."user_id"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_8c84a3c335a852ff2d426cb011"`);
            yield queryRunner.query(`DROP TABLE "designation"`);
        });
    }
}
exports.MigrationInit1699216786152 = MigrationInit1699216786152;
//# sourceMappingURL=1699216786152-migration_init.js.map