import Link from "next/link";
import { withRouter } from "next/router";

function NavLink({ href, title, router }) {
	const activeClassName = router.pathname === href ? "text-[#e23636]" : "";

	return (
		<Link href={href} passHref>
			<a className={activeClassName}>{title}</a>
		</Link>
	);
}

export default withRouter(NavLink);
