import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1684162600537 implements MigrationInterface {
  name = 'initialMigration1684162600537';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "events" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "event_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.049Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.049Z"', "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "images" ("id" BIGSERIAL NOT NULL, "url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.050Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.050Z"', "eventId" bigint, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "genders" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_529fb131dd4164c94529f53e19d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" BIGSERIAL NOT NULL, "country" character varying NOT NULL, "state" character varying NOT NULL, "district" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "zipcode" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.052Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.052Z"', CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "person" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.052Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.052Z"', "cpf" integer, "addressId" bigint, "genderId" bigint, CONSTRAINT "REL_a793ed25458ce9bc1584889cb1" UNIQUE ("addressId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_admin" boolean NOT NULL DEFAULT false, "status" character varying NOT NULL DEFAULT 'voluntário', "cellphone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.053Z"', "update_at" TIMESTAMP NOT NULL DEFAULT '"2023-05-15T14:56:41.053Z"', "personId" bigint, "imageId" bigint, CONSTRAINT "REL_ddd0d20e45dbd0d1536dc08203" UNIQUE ("personId"), CONSTRAINT "REL_0b9cf86bd47b4393165e9bddf3" UNIQUE ("imageId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
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
      `DROP INDEX "public"."IDX_a3fcb2c2f04d5bce01975994e0"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d76969863bc119c557f3114725"`,
    );
    await queryRunner.query(`DROP TABLE "events_users_users"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "person"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
    await queryRunner.query(`DROP TABLE "genders"`);
    await queryRunner.query(`DROP TABLE "images"`);
    await queryRunner.query(`DROP TABLE "events"`);
  }
}
