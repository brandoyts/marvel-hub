import { useRouter } from 'next/router';

function CategoryCard({ title }) {
	const router = useRouter();

	const handleClick = () => {
		router.push(title.toLowerCase());
	};

	return (
		<div
			className='text-center bg-red-700 text-accent-content transition-transform translate-y-0 hover:-translate-y-1 cursor-pointer h-60 md:last:col-span-2 lg:last:col-span-1'
			onClick={handleClick}
		>
			<div className='card-body'>
				<h4 className='text-3xl font-bold'>{title}</h4>
			</div>
		</div>
	);
}

export default CategoryCard;
