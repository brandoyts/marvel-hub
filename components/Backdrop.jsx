function Backdrop() {
	return (
		<div
			className='bg-backdrop-img bg-cover bg-repeat-x bg-center h-[500px] min-w-screen object-contain backdrop-blur-sm bg-white/30 relative
        '
		>
			<div className='bg-black opacity-80 h-full'></div>
			<h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold border-2 border-red-600 pb-1 px-3 tracking-wide text-4xl sm:text-6xl md:text-7xl lg:text-9xl'>
				MarvelHub
			</h1>
		</div>
	);
}

export default Backdrop;
1;
