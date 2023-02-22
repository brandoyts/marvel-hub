import Image from 'next/image';
import Link from 'next/link';

function Card({ obj }) {
	const imgSrc = `${obj.thumbnail.path}.${obj.thumbnail.extension}`;

	return (
		<div className='card card-bordered translate-y-0 hover:-translate-y-2 transition-transform group'>
			<figure>
				<Image
					src={imgSrc}
					width={200}
					height={200}
					layout='responsive'
					alt={obj.name}
				/>
			</figure>
			<div className='card-body group-hover:bg-[#e23636] transition-colors'>
				<h2 className='card-title text-center'>
					{obj.hasOwnProperty('name') ? obj.name : obj.title}
				</h2>
				<div className='justify-center card-actions '>
					<button className='btn bg-[#e23636] group-hover:bg-black transition-colors'>
						<Link href={`/characters/${obj.id}`} passHref>
							<a>More info</a>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
