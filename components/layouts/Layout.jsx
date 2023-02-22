import Head from 'next/head';
import Navigation from '../Navigation';

function Layout({ children, title }) {
	return (
		<>
			<Head>
				<title>Marvel {title}</title>
			</Head>

			<div className='container m-auto mt-10 p-5'>
				<Navigation />

				<div className='mt-[120px]'>{children}</div>
			</div>
		</>
	);
}

export default Layout;
