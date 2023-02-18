-- CreateTable
CREATE TABLE "Goods" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "composition" TEXT,

    CONSTRAINT "Goods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "goodsId" INTEGER NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("goodsId","sizeId")
);

-- CreateTable
CREATE TABLE "Weight" (
    "goodsId" INTEGER NOT NULL,
    "sizeId" INTEGER NOT NULL,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("goodsId","sizeId")
);

-- CreateTable
CREATE TABLE "AdditiveType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "AdditiveType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Additive" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Additive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GoodsToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToGoods" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AdditiveTypeToGoods" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Goods_title_key" ON "Goods"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "Size"("size");

-- CreateIndex
CREATE UNIQUE INDEX "AdditiveType_title_key" ON "AdditiveType"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Additive_title_key" ON "Additive"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_GoodsToSize_AB_unique" ON "_GoodsToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_GoodsToSize_B_index" ON "_GoodsToSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToGoods_AB_unique" ON "_CategoryToGoods"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToGoods_B_index" ON "_CategoryToGoods"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdditiveTypeToGoods_AB_unique" ON "_AdditiveTypeToGoods"("A", "B");

-- CreateIndex
CREATE INDEX "_AdditiveTypeToGoods_B_index" ON "_AdditiveTypeToGoods"("B");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_goodsId_fkey" FOREIGN KEY ("goodsId") REFERENCES "Goods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_goodsId_fkey" FOREIGN KEY ("goodsId") REFERENCES "Goods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Additive" ADD CONSTRAINT "Additive_id_fkey" FOREIGN KEY ("id") REFERENCES "AdditiveType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GoodsToSize" ADD CONSTRAINT "_GoodsToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Goods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GoodsToSize" ADD CONSTRAINT "_GoodsToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToGoods" ADD CONSTRAINT "_CategoryToGoods_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToGoods" ADD CONSTRAINT "_CategoryToGoods_B_fkey" FOREIGN KEY ("B") REFERENCES "Goods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditiveTypeToGoods" ADD CONSTRAINT "_AdditiveTypeToGoods_A_fkey" FOREIGN KEY ("A") REFERENCES "AdditiveType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditiveTypeToGoods" ADD CONSTRAINT "_AdditiveTypeToGoods_B_fkey" FOREIGN KEY ("B") REFERENCES "Goods"("id") ON DELETE CASCADE ON UPDATE CASCADE;
