/*
  Warnings:

  - Made the column `street` on table `PointsOfSales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `googleLink` on table `PointsOfSales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `PointsOfSales` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PointsOfSales" ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "googleLink" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;
