import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1681050795513 implements MigrationInterface {
  name = 'initialMigration1681050795513';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-09T14:33:15.981Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-04-09T14:33:15.981Z"'`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellphone"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "cellphone" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellphone"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "cellphone" bigint NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-04-09 14:25:57.526'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-04-09 14:25:57.526'`,
    );
  }
}
