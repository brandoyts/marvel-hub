// import API from '../../lib/API';
import axios from "axios";
import Layout from "../../components/layouts/Layout";
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card.jsx";

function index({ characters }) {
	return (
		<Layout title="Characters">
			<CardContainer>
				{characters.map((character) => (
					<Card key={character.id} obj={character} />
				))}
			</CardContainer>
		</Layout>
	);
}

export async function getStaticProps(ctx) {
	const result = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/characters?ts=${1}&apikey=${
			process.env.NEXT_PUBLIC_API_KEY
		}&hash=${process.env.NEXT_PUBLIC_HASH}`
	);

	const characters = result.data.data.results;

	return {
		props: { characters },
	};
}

export default index;
