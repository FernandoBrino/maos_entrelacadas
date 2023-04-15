import { MigrationInterface, QueryRunner } from 'typeorm';

export class renamedBirthdateUserMigration1681512097561
  implements MigrationInterface
{
  name = 'renamedBirthdateUserMigration1681512097561';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-14T22:41:38.035Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '"2023-04-14T22:41:38.035Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "update_at" SET DEFAULT '2023-04-10 16:45:02.934'`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "created_at" SET DEFAULT '2023-04-10 16:45:02.934'`,
    );
  }
}
