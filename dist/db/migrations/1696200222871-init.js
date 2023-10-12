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
exports.Init1696200222871 = void 0;
class Init1696200222871 {
    constructor() {
        this.name = 'Init1696200222871';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "designation" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_8c84a3c335a852ff2d426cb0112" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "stages" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb NOT NULL, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "last_name" text NOT NULL, "first_name" text NOT NULL, "phone_number" text NOT NULL, "designationId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "REL_071a5e4a3131d00a0fc700af41" UNIQUE ("designationId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "user_id" ON "users" ("user_id") `);
            yield queryRunner.query(`CREATE INDEX "email" ON "users" ("email") `);
            yield queryRunner.query(`CREATE INDEX "phone_number" ON "users" ("phone_number") `);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
            yield queryRunner.query(`DROP INDEX "public"."phone_number"`);
            yield queryRunner.query(`DROP INDEX "public"."email"`);
            yield queryRunner.query(`DROP INDEX "public"."user_id"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "stages"`);
            yield queryRunner.query(`DROP TABLE "designation"`);
        });
    }
}
exports.Init1696200222871 = Init1696200222871;
//# sourceMappingURL=1696200222871-init.js.map