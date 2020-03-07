/** @jsx jsx */
import { jsx } from "@emotion/core";

import Section from "../components/section";

import WebWorkExperience from "../components/fetchers/web-work-experience";
import { slideTop, fadeIn } from "../helpers/animations";

const IndexPage = () => (
	<div
		css={{
			height: "100vh",
			overflowY: "scroll",
			scrollSnapType: "y mandatory",
			overflowX: "hidden",
			scrollBehavior: "smooth",
		}}
	>
		<Section>
			<h1 css={{ fontFamily: "Playfair Display", fontSize: 64 }}>Alex Su</h1>
			<p
				css={{
					fontFamily: "Josefin Sans",
					fontSize: 36,
					lineHeight: "50px",
					maxWidth: 480,
					animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${fadeIn} 0.5s linear both`,
				}}
			>
				Sometimes
				<span
					css={{
						fontFamily: "JosefinSans-BoldItalic",
						color: "#1242ed",
						animation: `${fadeIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both`,
					}}
				>
					{` magic `}
				</span>
				is just someone spending more time on something than anyone might
				reasonably expect
			</p>
			<p
				css={{
					fontFamily: "Josefin Sans",
					fontSize: 36,
					paddingLeft: 8,
					color: "#333333",
					fontStyle: "italic",
					animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${fadeIn} 0.5s linear both`,
				}}
			>
				- Teller
			</p>
		</Section>
		<Section
			cssFn={currentStyles => {
				return { ...currentStyles, backgroundColor: "#FFFBF5" };
			}}
		>
			<h2
				id="about"
				css={{
					fontFamily: "Playfair Display",
					fontSize: 64,
				}}
			>
				About
			</h2>
			<div
				css={{
					fontFamily: "Josefin Sans",
					fontSize: 24,
					lineHeight: "36px",
					maxWidth: 720,
				}}
			>
				<p>
					As much as I can, I try to
					<span
						css={{
							transition: "opacity ease 0.2s",
							fontStyle: "italic",
							color: "#666666",
							"&:hover": {
								opacity: 0,
							},
						}}
					>
						{" hide what I do "}
					</span>
					behind seamless user-experiences.
				</p>
				<p>
					Deliver features that are elegant and intuitive. But, a discerning
					user should still be engaged and delighted by the substance and smarts
					working behind the scenes.
				</p>
				<p>
					I’m currently working to bring learnings from my experience in{" "}
					<a href="#web" css={{ color: "blue", textDecoration: "underline" }}>
						web development
					</a>{" "}
					to implement these principles in the robotics and automation space.
				</p>
			</div>
		</Section>
		<Section>
			<h2 id="web" css={{ fontFamily: "Playfair Display", fontSize: 64 }}>
				Web
			</h2>
			<WebWorkExperience domain="web" />
		</Section>
	</div>
);

export default IndexPage;
