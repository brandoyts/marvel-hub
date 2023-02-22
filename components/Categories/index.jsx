import CategoryCard from './CategoryCard';
import categoriesData from '../../categoriesData';

function index() {
	return (
		<div className='my-20'>
			<h2 className='text-center text-3xl font-bold'>
				Select a category:
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto my-10 w-3/4  grid-flow-row-dense'>
				{categoriesData.map((category) => (
					<CategoryCard key={category.title} title={category.title} />
				))}
			</div>
		</div>
	);
}

export default index;
