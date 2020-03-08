/** @jsx jsx */
import { jsx, CSSObject, InterpolationWithTheme } from "@emotion/core";

type NavLink = { name: string; id: string };

export interface NavigationProps {
	links: NavLink[];
}

const RightNavigation = (props: NavigationProps) => {
	const { links } = props;

	return (
		<div
			css={{
				display: "flex",
				height: "100vh",
				position: "fixed",
				right: 100,
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<nav
				css={{
					fontFamily: "Josefin Sans",
					fontSize: 36,
					color: "#4a4a4a",
					display: "grid",
					gridTemplateRows: "1fr repeat",
					gap: 20,
				}}
			>
				{links.map(link => (
					<a
						css={{
							color: "#666666",
							"&:visited": { color: "#666666" },
							"&:hover": { color: "#000000" },
							"&:focus": { outline: "1px solid blue" },
						}}
						key={link.id}
						href={link.id}
					>
						{link.name}
					</a>
				))}
			</nav>
		</div>
	);
};

export default RightNavigation;
