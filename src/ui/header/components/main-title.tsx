import Image from "next/image";
import mavraPizza from "public/image/home/mavra-pizza.png";

const MainTitle = () => {
	return (
		<Image
			src={mavraPizza}
			alt='mavra pizza'
		/>
	);
};

export default MainTitle;
