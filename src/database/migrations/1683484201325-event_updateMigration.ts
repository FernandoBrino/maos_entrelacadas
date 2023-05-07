import { MigrationInterface, QueryRunner } from 'typeorm';

export class eventUpdateMigration1683484201325 implements MigrationInterface {
  name = 'eventUpdateMigration1683484201325';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "events" ADD "start_time" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ADD "end_time" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T18:30:01.801Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T18:30:01.801Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T18:30:01.802Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T18:30:01.802Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T18:30:01.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T18:30:01.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T18:30:01.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T18:30:01.804Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-07T18:30:01.805Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-07T18:30:01.805Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-02 15:51:07.003'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '2023-05-02 15:51:07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-02 15:51:07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-02 15:51:07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-02 15:51:07'`,
    );
    await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "end_time"`);
    await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "start_time"`);
  }
}
