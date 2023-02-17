import Image from "next/image";
import headerBackground from "public/image/home/utp-bg.jpg";

const HeaderBackground = () => {
	return (
		<Image
			src={headerBackground}
			alt='background'
			className='w-screen h-[90vh] absolute top-0 -z-10 object-cover'
		/>
	);
};

export default HeaderBackground;
