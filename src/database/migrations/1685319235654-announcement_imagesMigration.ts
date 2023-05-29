import { MigrationInterface, QueryRunner } from 'typeorm';

export class announcementImagesMigration1685319235654
  implements MigrationInterface
{
  name = 'announcementImagesMigration1685319235654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "images" ADD "announcementId" bigint`);
    await queryRunner.query(
      `ALTER TABLE "user_events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.076Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '"2023-05-29T00:13:56.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.078Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.078Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.078Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.078Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.080Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.080Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2023-05-29T00:13:56.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.228'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.228'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.227'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.227'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.227'`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.227'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.072'`,
    );
    await queryRunner.query(
      `ALTER TABLE "genders" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.072'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "updated_at" SET DEFAULT '2023-05-28 17:02:11.229'`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcements" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.229'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "update_at" SET DEFAULT '2023-05-28 17:02:11.07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" ALTER COLUMN "created_at" SET DEFAULT '2023-05-28 17:02:11.07'`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" DROP COLUMN "announcementId"`,
    );
  }
}
