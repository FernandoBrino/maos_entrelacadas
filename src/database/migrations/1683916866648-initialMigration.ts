import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1683916866648 implements MigrationInterface {
  name = 'initialMigration1683916866648';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "events_users_users" ("eventsId" bigint NOT NULL, "usersId" bigint NOT NULL, CONSTRAINT "PK_19f73b8d7cde9d2d720dc63d641" PRIMARY KEY ("eventsId", "usersId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d76969863bc119c557f3114725" ON "events_users_users" ("eventsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a3fcb2c2f04d5bce01975994e0" ON "events_users_users" ("usersId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-12T18:41:07.088Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-12T18:41:07.088Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-12T18:41:07.088Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-12T18:41:07.088Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-12T18:41:07.090Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-12T18:41:07.090Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-12T18:41:07.091Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-12T18:41:07.091Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-12T18:41:07.091Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-12T18:41:07.091Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_users_users" ADD CONSTRAINT "FK_d76969863bc119c557f3114725d" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_users_users" ADD CONSTRAINT "FK_a3fcb2c2f04d5bce01975994e0d" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "events_users_users" DROP CONSTRAINT "FK_a3fcb2c2f04d5bce01975994e0d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_users_users" DROP CONSTRAINT "FK_d76969863bc119c557f3114725d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "update_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-12 18:33:21.296'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "update_at" SET DEFAULT '2023-05-12 18:33:21.294'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-12 18:33:21.294'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-12 18:33:21.293'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-12 18:33:21.293'`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a3fcb2c2f04d5bce01975994e0"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d76969863bc119c557f3114725"`,
    );
    await queryRunner.query(`DROP TABLE "events_users_users"`);
  }
}
