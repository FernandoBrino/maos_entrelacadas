import { MigrationInterface, QueryRunner } from 'typeorm';

export class eventMigration1682461712977 implements MigrationInterface {
  name = 'eventMigration1682461712977';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "images" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.486Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ADD "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.486Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.487Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.487Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-04-25T22:28:33.488Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-04-16 22:38:01.275'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-04-16 22:38:01.275'`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "created_at"`);
  }
}
