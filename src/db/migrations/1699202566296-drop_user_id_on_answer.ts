import { MigrationInterface, QueryRunner } from "typeorm";

export class DropUserIdOnAnswer1699202566296 implements MigrationInterface {
    name = 'DropUserIdOnAnswer1699202566296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_f4cf663ebeca05b7a12f6a2cc9"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" ADD "user_id" text NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_f4cf663ebeca05b7a12f6a2cc9" ON "answers" ("user_id") `);
    }

}
