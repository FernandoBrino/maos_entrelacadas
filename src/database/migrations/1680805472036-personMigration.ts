import { MigrationInterface, QueryRunner } from "typeorm";

export class personMigration1680805472036 implements MigrationInterface {
    name = 'personMigration1680805472036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "update_at" TIMESTAMP NOT NULL, "rg" integer NOT NULL, "cpf" integer NOT NULL, "contact_id" integer NOT NULL, "address_id" integer NOT NULL, "gender_id" integer NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
