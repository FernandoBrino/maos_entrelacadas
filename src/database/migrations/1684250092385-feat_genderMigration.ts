import { MigrationInterface, QueryRunner } from 'typeorm';

export class featGenderMigration1684250092385 implements MigrationInterface {
  name = 'featGenderMigration1684250092385';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-16T15:14:52.853Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-16T15:14:52.853Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T15:14:52.851Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-16T15:14:52.851Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T15:14:52.852Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T15:14:52.852Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T15:14:52.854Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 14:50:00.951'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 14:50:00.951'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 14:50:00.951'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 14:50:00.951'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 14:50:00.95'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 14:50:00.95'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-16 14:50:00.948'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 14:50:00.948'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-16 14:50:00.948'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-16 14:50:00.948'`,
    );
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "created_at"`);
  }
}
