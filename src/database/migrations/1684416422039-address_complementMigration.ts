import { MigrationInterface, QueryRunner } from 'typeorm';

export class addressComplementMigration1684416422039
  implements MigrationInterface
{
  name = 'addressComplementMigration1684416422039';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "complement" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:08.693Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-18T13:27:08.693Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:08.694Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-18T13:27:08.694Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:08.695Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-18T13:27:08.695Z"'`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "number" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'Voluntário'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-18T13:27:11.069Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'voluntário'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.854'`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "number" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 15:14:52.853'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.853'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 15:14:52.852'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.852'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-16 15:14:52.851'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 15:14:52.851'`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "complement"`);
  }
}
