import { MigrationInterface, QueryRunner } from "typeorm";

export class DateColumns1693309999926 implements MigrationInterface {
    name = 'DateColumns1693309999926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL`);
    }

}
