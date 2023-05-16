import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixUpdatedAtMigration1684248600503 implements MigrationInterface {
  name = 'fixUpdatedAtMigration1684248600503';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "addresses" RENAME COLUMN "update_at" TO "updated_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" RENAME COLUMN "update_at" TO "updated_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "update_at" TO "updated_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T14:50:00.948Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-16T14:50:00.948Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T14:50:00.948Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T14:50:00.948Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T14:50:00.950Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T14:50:00.950Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T14:50:00.951Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T14:50:00.951Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-16T14:50:00.951Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-16T14:50:00.951Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 17:46:46.551'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-15 17:46:46.549'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 17:46:46.549'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-15 17:46:46.548'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 17:46:46.548'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "updated_at" TO "update_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" RENAME COLUMN "updated_at" TO "update_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" RENAME COLUMN "updated_at" TO "update_at"`,
    );
  }
}
