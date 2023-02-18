/*
  Warnings:

  - The primary key for the `Price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Weight` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `weight` to the `Weight` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_sizeId_fkey";

-- DropForeignKey
ALTER TABLE "Weight" DROP CONSTRAINT "Weight_sizeId_fkey";

-- AlterTable
ALTER TABLE "Price" DROP CONSTRAINT "Price_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "sizeId" DROP NOT NULL,
ADD CONSTRAINT "Price_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Weight" DROP CONSTRAINT "Weight_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL,
ALTER COLUMN "sizeId" DROP NOT NULL,
ADD CONSTRAINT "Weight_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;
