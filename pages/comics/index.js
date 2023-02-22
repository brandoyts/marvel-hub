// import API from '../../lib/API';
import axios from 'axios';
import Layout from '../../components/layouts/Layout';
import CardContainer from '../../components/CardContainer';
import Card from '../../components/Card.jsx';

function index({ comics }) {
	return (
		<Layout title='Comics'>
			<CardContainer>
				{comics.map((character) => (
					<Card key={character.id} obj={character} />
				))}
			</CardContainer>
		</Layout>
	);
}

export async function getStaticProps(ctx) {
	const result = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/comics?ts=${1}&apikey=${
			process.env.NEXT_PUBLIC_API_KEY
		}&hash=${process.env.NEXT_PUBLIC_HASH}`
	);

	const comics = result.data.data.results;

	return {
		props: { comics },
	};
}

export default index;
