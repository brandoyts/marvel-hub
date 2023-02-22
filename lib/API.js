import axios from 'axios';

export default axios.create({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	params: {
		ts: 1,
		apikey: process.env.NEXT_PUBLIC_API_KEY,
		hash: process.env.NEXT_PUBLIC_HASH,
	},
});
