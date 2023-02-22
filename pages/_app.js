import MasterLayout from '../components/layouts/MasterLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<MasterLayout>
			<Component {...pageProps} />
		</MasterLayout>
	);
}

export default MyApp;
