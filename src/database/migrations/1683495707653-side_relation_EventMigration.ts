import { MigrationInterface, QueryRunner } from 'typeorm';

export class sideRelationEventMigration1683495707653
  implements MigrationInterface
{
  name = 'sideRelationEventMigration1683495707653';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T21:41:48.106Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T21:41:48.106Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T21:41:48.107Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T21:41:48.107Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T21:41:48.109Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '2023-05-07 18:30:01.805'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-07 18:30:01.805'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-05-07 18:30:01.804'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-07 18:30:01.804'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '2023-05-07 18:30:01.804'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-07 18:30:01.804'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '2023-05-07 18:30:01.802'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-07 18:30:01.802'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-07 18:30:01.801'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-07 18:30:01.801'`,
    );
  }
}
