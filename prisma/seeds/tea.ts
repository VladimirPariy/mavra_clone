import { PrismaClient, Goods, Category, Price, Weight } from "@prisma/client";
const prisma = new PrismaClient();

const teas: Goods[] = [
	{
		id: 1,
		title: "Palmira (чай в пакетиках)",
		composition: null,
		image: "/static/kraft-tea.jpg",
	},
	{
		id: 2,
		title: "Вишнева Смакота",
		composition: "Вишня перетерта з цукром, апельсин",
		image: "/static/kraft-tea.jpg",
	},
	{
		id: 3,
		title: "Мандариновый чай",
		composition:
			"Чорний чай, мандарин, кардамон, куркума, сироп мандариновий",
		image: "/static/kraft-tea.jpg",
	},
	{
		id: 4,
		title: "Кисiль вишневий",
		composition: "Кисіль, вишня",
		image: "/static/kraft-tea.jpg",
	},
	{
		id: 5,
		title: "Мятно-малиновый чай",
		composition: null,
		image: "/static/kraft-tea.jpg",
	},
];

const teasCategory: Category = { id: 1, category: "Крафтовые чаи" };

const teasWeight: Weight[] = [
	{ id: 1, goodsId: 1, weight: 400, sizeId: null },
	{ id: 2, goodsId: 2, weight: 400, sizeId: null },
	{ id: 3, goodsId: 3, weight: 400, sizeId: null },
	{ id: 4, goodsId: 4, weight: 400, sizeId: null },
	{ id: 5, goodsId: 5, weight: 400, sizeId: null },
];

const teasPrice: Price[] = [
	{ goodsId: 1, price: 19, id: 1, sizeId: null },
	{ goodsId: 2, price: 30, id: 2, sizeId: null },
	{ goodsId: 3, price: 30, id: 3, sizeId: null },
	{ goodsId: 4, price: 30, id: 4, sizeId: null },
	{ goodsId: 5, price: 30, id: 5, sizeId: null },
];

const seedTea = async () => {
	const teaPromises = teas.map(({ title, id, composition, image }) => {
		const currentWeight: Weight | undefined = teasWeight.find(
			(el) => el.goodsId === id
		);

		const currentPrice: Price | undefined = teasPrice.find(
			(el) => el.goodsId === id
		);

		if (currentWeight && currentPrice) {
			return prisma.goods.upsert({
				where: {
					title,
				},
				update: {
					image,
				},
				create: {
					id,
					title,
					composition,
					image,
					categories: {
						connectOrCreate: {
							where: { category: teasCategory.category },
							create: {
								id: teasCategory.id,
								category: teasCategory.category,
							},
						},
					},
					weight: {
						connectOrCreate: {
							where: { id: currentWeight.id },
							create: {
								id: currentWeight.id,
								weight: currentWeight.weight,
							},
						},
					},
					price: {
						connectOrCreate: {
							where: { id: currentPrice.id },
							create: {
								id: currentPrice.id,
								price: currentPrice.price,
							},
						},
					},
				},
			});
		}
	});

	const teasArr = await Promise.all(teaPromises);

	console.log("[SEEDER] Teas have been updated");
};

export const seed = async () => {
	await seedTea();
	console.log("[SEEDER] Done");
};

if (process.env.CLI_START) {
	seed()
		.catch((err) => {
			console.error(err);
			process.exit(1);
		})
		.finally(async () => {
			await prisma.$disconnect();
		});
}
