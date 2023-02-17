import Image from "next/image";
import pizza from "public/image/home/partn-2-1024x683.jpg";
import heart from "public/image/home/hr-heart.png";
import CustomLink from "@/components/ui/custom-link";

const WelcomeSpeech = () => {
	return (
		<div className='flex py-[70px] flex-wrap justify-center'>
			<Image
				alt='pizza'
				src={pizza}
				className='max-w-[585px] px-[15px]'
			/>
			<div className='max-w-[585px] px-[50px] py-[35px] text-center'>
				<Image
					alt='icon'
					src={heart}
					className='mx-auto mt-5 mb-4'
				/>
				<h2 className='pb-5 text-4xl font-semibold text-[#402813]'>
					Привет! Я – MAVRA PIZZA!
				</h2>
				<div className='text-sm flex flex-col gap-2.5 leading-7'>
					<p>
						Создаю для тебя самую волшебную и вкусную пиццу
						Запорожья. Авторские рецепты, фирменные ингредиенты и
						немного магии.
					</p>
					<p>Моя фаворитка – «Лесная фантазия». Попробуешь?))</p>
					<p>
						Просто найди меня, подожди 15 минут и получи свою
						коробочку
					</p>
					<p>с горячей пиццей 😉</p>
				</div>
				<div className='my-6'>
					<CustomLink
						href='/'
						text='Подробнее'
						withBorder={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default WelcomeSpeech;
