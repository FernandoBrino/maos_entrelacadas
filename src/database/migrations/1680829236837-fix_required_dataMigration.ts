import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixRequiredDataMigration1680829236837
  implements MigrationInterface
{
  name = 'fixRequiredDataMigration1680829236837';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contact" RENAME COLUMN "telephone" TO "email"`,
    );
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "rg"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "images" ADD "url" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "contact" ADD "email" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-07T01:00:37.381Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-04-07T01:00:37.381Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "cpf" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "address_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'voluntário'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "image_id" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "image_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "address_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "cpf" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "contact" ADD "email" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "url"`);
    await queryRunner.query(
      `ALTER TABLE "person" ADD "email" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "person" ADD "rg" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "contact" RENAME COLUMN "email" TO "telephone"`,
    );
  }
}
