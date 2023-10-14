import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOnDesignationConstraintError1697313864152 implements MigrationInterface {
    name = 'UpdateOnDesignationConstraintError1697313864152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_071a5e4a3131d00a0fc700af41"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_071a5e4a3131d00a0fc700af411"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_071a5e4a3131d00a0fc700af41" UNIQUE ("designationId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_071a5e4a3131d00a0fc700af411" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
