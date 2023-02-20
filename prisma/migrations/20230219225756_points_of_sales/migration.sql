-- CreateTable
CREATE TABLE "PointsOfSales" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT,
    "googleLink" TEXT,
    "image" TEXT,
    "shopPhone" TEXT,
    "deliveryPhone" TEXT,
    "greeting" TEXT,
    "workingDay" TEXT,
    "workingTime" TEXT,

    CONSTRAINT "PointsOfSales_pkey" PRIMARY KEY ("id")
);
