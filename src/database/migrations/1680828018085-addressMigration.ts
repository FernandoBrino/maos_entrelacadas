import { MigrationInterface, QueryRunner } from 'typeorm';

export class addressMigration1680828018085 implements MigrationInterface {
  name = 'addressMigration1680828018085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" BIGSERIAL NOT NULL, "country" character varying NOT NULL, "state" character varying NOT NULL, "district" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "zipcode" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
