import Localization from "@/ui/header/components/localization";
import Navbar from "@/ui/header/components/nav";
import Logo from "@/ui/header/components/logo";
import Social from "@/ui/header/components/social";
import Partnership from "@/ui/header/components/partnership";
import HeaderBackground from "@/ui/header/components/header-background";
import MainTitle from "@/ui/header/components/main-title";
import DeliveryOffer from "@/ui/header/components/offer";

const Header = () => {
	return (
		<header className='relative'>
			<HeaderBackground />
			<div className='flex items-center relative text-white max-w-[1190px] m-auto pt-10 px-3'>
				<Localization />
				<Navbar />
				<Logo />
				<Partnership />
				<Social />
			</div>
			<div className='max-w-[1190px] m-auto text-white flex flex-col justify-center items-center mt-16'>
				<MainTitle />
				<DeliveryOffer />
			</div>
		</header>
	);
};

export default Header;
