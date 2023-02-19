import { Goods } from "@prisma/client";

const AssortmentOfGoods = ({ goods }: { goods: Goods[] }) => {
	console.log(goods);

	return <div>goods</div>;
};

export default AssortmentOfGoods;
