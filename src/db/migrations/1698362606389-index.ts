import { MigrationInterface, QueryRunner } from "typeorm";

export class Index1698362606389 implements MigrationInterface {
    name = 'Index1698362606389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_9c32cec6c71e06da0254f2226c" ON "answers" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4cf663ebeca05b7a12f6a2cc9" ON "answers" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_08a6d4b0f49ff300bf3a0ca60a" ON "questions" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_16efa0f8f5386328944769b9e6" ON "stages" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8c84a3c335a852ff2d426cb011" ON "designation" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8c84a3c335a852ff2d426cb011"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_16efa0f8f5386328944769b9e6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_08a6d4b0f49ff300bf3a0ca60a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4cf663ebeca05b7a12f6a2cc9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c32cec6c71e06da0254f2226c"`);
    }

}
