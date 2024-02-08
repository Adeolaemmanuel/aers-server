import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminInti1707432053941 implements MigrationInterface {
    name = 'AdminInti1707432053941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."admin_user_user_type_enum" AS ENUM('super_admin', 'admin')`);
        await queryRunner.query(`CREATE TABLE "admin_user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "metadata" jsonb, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "last_name" text NOT NULL, "first_name" text NOT NULL, "phone_number" text NOT NULL, "password" text NOT NULL, "user_type" "public"."admin_user_user_type_enum" NOT NULL DEFAULT 'admin', CONSTRAINT "UQ_dd3c56cc9bdc4f84b03f8fb9c88" UNIQUE ("user_id"), CONSTRAINT "UQ_840ac5cd67be99efa5cd989bf9f" UNIQUE ("email"), CONSTRAINT "UQ_1d616896736309e8afa843fdd2b" UNIQUE ("phone_number"), CONSTRAINT "PK_a28028ba709cd7e5053a86857b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a28028ba709cd7e5053a86857b" ON "admin_user" ("id") `);
        await queryRunner.query(`CREATE INDEX "user_id" ON "admin_user" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "email" ON "admin_user" ("email") `);
        await queryRunner.query(`CREATE INDEX "phone_number" ON "admin_user" ("phone_number") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."phone_number"`);
        await queryRunner.query(`DROP INDEX "public"."email"`);
        await queryRunner.query(`DROP INDEX "public"."user_id"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a28028ba709cd7e5053a86857b"`);
        await queryRunner.query(`DROP TABLE "admin_user"`);
        await queryRunner.query(`DROP TYPE "public"."admin_user_user_type_enum"`);
    }

}
