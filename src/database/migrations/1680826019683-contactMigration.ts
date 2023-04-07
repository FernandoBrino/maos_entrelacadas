import { MigrationInterface, QueryRunner } from 'typeorm';

export class contactMigration1680826019683 implements MigrationInterface {
  name = 'contactMigration1680826019683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contact" ("id" BIGSERIAL NOT NULL, "cellphone" integer NOT NULL, "telephone" integer NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD "email" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "email"`);
    await queryRunner.query(`DROP TABLE "contact"`);
  }
}
