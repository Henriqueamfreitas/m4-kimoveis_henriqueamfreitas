import { MigrationInterface, QueryRunner } from "typeorm";

export class ValueDefault01693259783783 implements MigrationInterface {
    name = 'ValueDefault01693259783783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

}
