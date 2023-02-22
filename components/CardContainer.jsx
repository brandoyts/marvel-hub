import React from 'react';

function CardContainer({ children }) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  my-10 w-full  grid-flow-row-dense'>
			{children}
		</div>
	);
}

export default CardContainer;
