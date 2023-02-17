import Header from "@/components/header";
import WelcomeSpeech from "@/components/welcome-speech";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>Mavra Pizza | Замовляй i забирай!</title>
			</Head>
			<Header />
			<main className='max-w-[1170px] m-auto'>
				<WelcomeSpeech />
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
