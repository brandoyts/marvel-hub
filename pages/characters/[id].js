import axios from 'axios';
import React from 'react';

function Character({ character }) {
	console.log(character);
	return (
		<div>
			<h1>Character</h1>
		</div>
	);
}

export async function getStaticPaths() {
	const result = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/characters?ts=${1}&apikey=${
			process.env.NEXT_PUBLIC_API_KEY
		}&hash=${process.env.NEXT_PUBLIC_HASH}`
	);

	const characters = result.data.data.results;

	const paths = characters.map((character) => ({
		params: { id: character.id.toString() },
	}));

	return {
		paths,
		fallback: true, // false or 'blocking'
	};
}

export async function getStaticProps({ params }) {
	const result = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/characters/${
			params.id
		}?ts=${1}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${
			process.env.NEXT_PUBLIC_HASH
		}`
	);

	const character = result.data.data.results;

	return {
		props: { character },
	};
}

export default Character;
