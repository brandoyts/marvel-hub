import Link from "next/link";
import NavLink from "./NavLink";

function Navigation() {
	return (
		<nav className="flex flex-col lg:flex-row items-center h-20 gap-12">
			<p className="flex-1 text-4xl sm:text-5xl font-bold border-y-4 border-[#e23636] pb-2">
				<Link href="/">
					<a>MarvelHub</a>
				</Link>
			</p>

			<div className="w-full">
				<ul className="flex justify-evenly lg:justify-end lg:gap-20 font-bold tracking-wide text-xl">
					<li>
						<NavLink href="/characters" title="Characters" />
					</li>
					<li>
						<NavLink href="/events" title="Events" />
					</li>
					<li>
						<NavLink href="/comics" title="Comics" />
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
