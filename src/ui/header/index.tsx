import Localization from "@/ui/header/components/localization";
import Navbar from "@/ui/header/components/nav";
import Logo from "@/ui/header/components/logo";
import Social from "@/ui/header/components/social";
import Partnership from "@/ui/header/components/partnership";
import Container from "@/ui/header/components/container";

const Header = () => {
	return (
		<div>
			<Container>
				<Localization />
				<Navbar />
			</Container>
			<Logo />
			<Container>
				<Social />
				<Partnership />
			</Container>
		</div>
	);
};

export default Header;
