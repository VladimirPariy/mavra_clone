import AssortmentOfGoods from "@/components/assortment-of-goods";
import Header from "@/components/header";
import WelcomeSpeech from "@/components/welcome-speech";
import Head from "next/head";
import { FC } from "react";
import { Goods } from "@prisma/client";
import prisma from "@/backend/prisma";

export interface Props {
	goods: Goods[];
}

const Home: FC<Props> = (props) => {
	return (
		<>
			<Head>
				<title>Mavra Pizza | Замовляй i забирай!</title>
			</Head>
			<Header />
			<main className='max-w-[1170px] m-auto'>
				<WelcomeSpeech />
				<AssortmentOfGoods goods={props.goods} />
			</main>
			<footer></footer>
		</>
	);
};

export async function getServerSideProps() {
	const goods = await prisma.goods.findMany({
		include: {
			categories: true,
			price: true,
			weight: true,
			additivesTypes: {
				include: {
					additive: true,
				},
			},
			size: true,
		},
	});

	return {
		props: { goods },
	};
}

export default Home;
