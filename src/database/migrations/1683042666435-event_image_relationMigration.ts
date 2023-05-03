import { MigrationInterface, QueryRunner } from 'typeorm';

export class eventImageRelationMigration1683042666435
  implements MigrationInterface
{
  name = 'eventImageRelationMigration1683042666435';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "events" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "event_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-02T15:51:07.000Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-02T15:51:07.000Z"', CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "genders" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "images" ADD "eventId" bigint`);
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-02T15:51:07.000Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-02T15:51:07.000Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-02T15:51:07.003Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ADD CONSTRAINT "FK_6a583d8235697646ab49f93fd54" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "images" DROP CONSTRAINT "FK_6a583d8235697646ab49f93fd54"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-04-25 22:28:33.488'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '2023-04-25 22:28:33.486'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-04-25 22:28:33.486'`,
    );
    await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "eventId"`);
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "update_at" TIMESTAMP NOT NULL DEFAULT '2023-04-25 22:28:33.487'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '2023-04-25 22:28:33.487'`,
    );
    await queryRunner.query(`DROP TABLE "events"`);
  }
}
