import Head from 'next/head';
import Footer from '../Footer';

function MasterLayout({ children }) {
	return (
		<div className='flex flex-col h-screen'>
			<main className='bg-black flex-grow'>{children}</main>
			<Footer />
		</div>
	);
}

export default MasterLayout;
