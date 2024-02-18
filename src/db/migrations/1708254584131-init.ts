import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1708254584131 implements MigrationInterface {
    name = 'Init1708254584131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "designation" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_8c84a3c335a852ff2d426cb0112" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8c84a3c335a852ff2d426cb011" ON "designation" ("id") `);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "last_name" text NOT NULL, "first_name" text NOT NULL, "phone_number" text NOT NULL, "is_contactable" boolean NOT NULL, "active" boolean DEFAULT true, "designationId" integer, CONSTRAINT "UQ_96aac72f1574b88752e9fb00089" UNIQUE ("user_id"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`CREATE INDEX "user_id" ON "users" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "email" ON "users" ("email") `);
        await queryRunner.query(`CREATE INDEX "phone_number" ON "users" ("phone_number") `);
        await queryRunner.query(`CREATE TABLE "answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "value" text, "values" jsonb, "questionId" integer, "userId" integer, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c32cec6c71e06da0254f2226c" ON "answers" ("id") `);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "question" text NOT NULL, "input_type" text NOT NULL, "options" jsonb, "stageId" integer, "userId" integer, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_08a6d4b0f49ff300bf3a0ca60a" ON "questions" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_01586714e6612fa9c061c9652b" ON "questions" ("input_type") `);
        await queryRunner.query(`CREATE TABLE "stages" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_16efa0f8f5386328944769b9e6" ON "stages" ("id") `);
        await queryRunner.query(`CREATE TYPE "public"."admin_user_user_type_enum" AS ENUM('super_admin', 'admin')`);
        await queryRunner.query(`CREATE TABLE "admin_user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "last_name" text NOT NULL, "first_name" text NOT NULL, "phone_number" text NOT NULL, "password" text NOT NULL, "user_type" "public"."admin_user_user_type_enum" NOT NULL DEFAULT 'admin', CONSTRAINT "UQ_dd3c56cc9bdc4f84b03f8fb9c88" UNIQUE ("user_id"), CONSTRAINT "UQ_840ac5cd67be99efa5cd989bf9f" UNIQUE ("email"), CONSTRAINT "UQ_1d616896736309e8afa843fdd2b" UNIQUE ("phone_number"), CONSTRAINT "PK_a28028ba709cd7e5053a86857b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a28028ba709cd7e5053a86857b" ON "admin_user" ("id") `);
        await queryRunner.query(`CREATE INDEX "admin_user_id" ON "admin_user" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "admin_email" ON "admin_user" ("email") `);
        await queryRunner.query(`CREATE INDEX "admin_phone_number" ON "admin_user" ("phone_number") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_c38697a57844f52584abdb878d7" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_9feae761f72ae4552b93e9f7393" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_bc2370231ea3e3d296963f33939" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_bc2370231ea3e3d296963f33939"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_9feae761f72ae4552b93e9f7393"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_c38697a57844f52584abdb878d7"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
        await queryRunner.query(`DROP INDEX "public"."admin_phone_number"`);
        await queryRunner.query(`DROP INDEX "public"."admin_email"`);
        await queryRunner.query(`DROP INDEX "public"."admin_user_id"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a28028ba709cd7e5053a86857b"`);
        await queryRunner.query(`DROP TABLE "admin_user"`);
        await queryRunner.query(`DROP TYPE "public"."admin_user_user_type_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_16efa0f8f5386328944769b9e6"`);
        await queryRunner.query(`DROP TABLE "stages"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_01586714e6612fa9c061c9652b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_08a6d4b0f49ff300bf3a0ca60a"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c32cec6c71e06da0254f2226c"`);
        await queryRunner.query(`DROP TABLE "answers"`);
        await queryRunner.query(`DROP INDEX "public"."phone_number"`);
        await queryRunner.query(`DROP INDEX "public"."email"`);
        await queryRunner.query(`DROP INDEX "public"."user_id"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8c84a3c335a852ff2d426cb011"`);
        await queryRunner.query(`DROP TABLE "designation"`);
    }

}
