import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOnCascade1699216109874 implements MigrationInterface {
    name = 'UpdateOnCascade1699216109874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4cf663ebeca05b7a12f6a2cc9"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "user_id" text NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_f4cf663ebeca05b7a12f6a2cc9" ON "answers" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
