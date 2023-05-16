import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixUpdatedAtImageMigration1684172806013
  implements MigrationInterface
{
  name = 'fixUpdatedAtImageMigration1684172806013';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "images" RENAME COLUMN "update_at" TO "updated_at"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-15T17:46:46.548Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-15T17:46:46.548Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-15T17:46:46.549Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-15T17:46:46.549Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-15T17:46:46.551Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '2023-05-15 14:56:41.053'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 14:56:41.053'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-05-15 14:56:41.052'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 14:56:41.052'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '2023-05-15 14:56:41.052'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 14:56:41.052'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-15 14:56:41.05'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 14:56:41.05'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-15 14:56:41.049'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-15 14:56:41.049'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" RENAME COLUMN "updated_at" TO "update_at"`,
    );
  }
}
