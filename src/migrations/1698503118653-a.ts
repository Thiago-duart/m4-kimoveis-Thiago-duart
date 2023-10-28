import { MigrationInterface, QueryRunner } from "typeorm";

export class A1698503118653 implements MigrationInterface {
  name = "A1698503118653";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categories" DROP CONSTRAINT "FK_ec945e5474b690cab5c6485dd40"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "categories" DROP COLUMN "realEstatesId"`
    );
    await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updateAt"`);
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD "categoryId" integer`
    );
    await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD "value" integer NOT NULL DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`
    );
    await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD "value" numeric NOT NULL DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" DROP COLUMN "categoryId"`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ADD "realEstatesId" integer`
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ADD CONSTRAINT "FK_ec945e5474b690cab5c6485dd40" FOREIGN KEY ("realEstatesId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
