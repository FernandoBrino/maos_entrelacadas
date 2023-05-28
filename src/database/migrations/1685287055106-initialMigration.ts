import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1685287055106 implements MigrationInterface {
  name = 'initialMigration1685287055106';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_events" ("userId" bigint NOT NULL, "eventId" bigint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.511Z"', CONSTRAINT "PK_4bc8864800651979b9d5c410127" PRIMARY KEY ("userId", "eventId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "events" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "event_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.512Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.512Z"', "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "images" ("id" BIGSERIAL NOT NULL, "url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.512Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.512Z"', "eventId" bigint, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "genders" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.513Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.513Z"', CONSTRAINT "PK_529fb131dd4164c94529f53e19d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" BIGSERIAL NOT NULL, "country" character varying NOT NULL, "state" character varying NOT NULL, "district" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "zipcode" integer NOT NULL, "complement" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "person" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', "cpf" integer, "addressId" bigint, "genderId" bigint, CONSTRAINT "REL_a793ed25458ce9bc1584889cb1" UNIQUE ("addressId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_admin" boolean NOT NULL DEFAULT false, "status" character varying NOT NULL DEFAULT 'Voluntário', "cellphone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.662Z"', "personId" bigint, "imageId" bigint, CONSTRAINT "REL_ddd0d20e45dbd0d1536dc08203" UNIQUE ("personId"), CONSTRAINT "REL_0b9cf86bd47b4393165e9bddf3" UNIQUE ("imageId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "announcements" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.663Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-28T15:17:35.663Z"', CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" ADD CONSTRAINT "FK_63cb9d79f7be87efc6efc72a6ad" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" ADD CONSTRAINT "FK_cdc20a262881171de056ae2e5aa" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" ADD CONSTRAINT "FK_6a583d8235697646ab49f93fd54" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD CONSTRAINT "FK_a793ed25458ce9bc1584889cb13" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD CONSTRAINT "FK_512527b75541c47b591be68a579" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_ddd0d20e45dbd0d1536dc082039" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_ddd0d20e45dbd0d1536dc082039"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" DROP CONSTRAINT "FK_512527b75541c47b591be68a579"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" DROP CONSTRAINT "FK_a793ed25458ce9bc1584889cb13"`,
    );
    await queryRunner.query(
      `ALTER TABLE "images" DROP CONSTRAINT "FK_6a583d8235697646ab49f93fd54"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" DROP CONSTRAINT "FK_cdc20a262881171de056ae2e5aa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_events" DROP CONSTRAINT "FK_63cb9d79f7be87efc6efc72a6ad"`,
    );
    await queryRunner.query(`DROP TABLE "announcements"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "person"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
    await queryRunner.query(`DROP TABLE "genders"`);
    await queryRunner.query(`DROP TABLE "images"`);
    await queryRunner.query(`DROP TABLE "events"`);
    await queryRunner.query(`DROP TABLE "user_events"`);
  }
}
