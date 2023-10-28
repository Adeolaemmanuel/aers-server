import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinColumnAdded1698478389840 implements MigrationInterface {
    name = 'JoinColumnAdded1698478389840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_01586714e6612fa9c061c9652b" ON "questions" ("input_type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_01586714e6612fa9c061c9652b"`);
    }

}
