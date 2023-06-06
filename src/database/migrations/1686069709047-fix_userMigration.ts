import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixUserMigration1686069709047 implements MigrationInterface {
  name = 'fixUserMigration1686069709047';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_events" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.446Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.446Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-06-06T16:41:49.446Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.447Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.447Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.448Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.448Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.449Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.449Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "birth_date" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "cellphone" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2023-06-06T16:41:49.593Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "cellphone" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "birth_date" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.08'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.08'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.078'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.078'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-29 00:13:56.078'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.078'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-29 00:13:56.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-29 00:13:56.076'`,
    );
  }
}
