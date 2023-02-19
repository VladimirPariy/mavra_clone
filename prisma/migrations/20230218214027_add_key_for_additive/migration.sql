/*
  Warnings:

  - Added the required column `additiveTypeId` to the `Additive` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Additive" DROP CONSTRAINT "Additive_id_fkey";

-- AlterTable
ALTER TABLE "Additive" ADD COLUMN     "additiveTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Additive" ADD CONSTRAINT "Additive_additiveTypeId_fkey" FOREIGN KEY ("additiveTypeId") REFERENCES "AdditiveType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
