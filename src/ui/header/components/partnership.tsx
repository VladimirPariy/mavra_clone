import Link from "next/link";

const Partnership = () => {
	return (
		<div className='flex flex-1 justify-center'>
			<Link
				href='/'
				className='py-3 px-7 bg-green-600 rounded-3xl text-xs border hover:bg-lime-500 transition-all duration-500 '
			>
				ПАРТНЕРСТВО
			</Link>
		</div>
	);
};

export default Partnership;
