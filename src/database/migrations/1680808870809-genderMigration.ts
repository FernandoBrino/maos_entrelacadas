import { MigrationInterface, QueryRunner } from 'typeorm';

export class genderMigration1680808870809 implements MigrationInterface {
  name = 'genderMigration1680808870809';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "genders" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_529fb131dd4164c94529f53e19d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "genders"`);
  }
}
