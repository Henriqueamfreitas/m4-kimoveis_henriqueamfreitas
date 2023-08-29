import { MigrationInterface, QueryRunner } from "typeorm";

export class ValueDefault01693259610679 implements MigrationInterface {
    name = 'ValueDefault01693259610679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" numeric(12,2) NOT NULL`);
    }

}
