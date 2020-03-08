/** @jsx jsx */
import { jsx } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export interface WorkExperienceProps {
	title: string;
	startDate: string;
	endDate: string;
	render: string;
}

const WorkExperience = (props: WorkExperienceProps) => {
	const { title, startDate, endDate, render } = props;

	return (
		<div
			css={{
				marginBottom: 24,
				maxWidth: 720,
			}}
		>
			<div
				css={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3
					css={{
						fontFamily: "Playfair Display",
						fontSize: 32,
						marginBottom: 8,
					}}
				>
					{title}
				</h3>
				<div>
					<div css={{ marginBottom: 4 }}>{startDate}</div>
					<div>{endDate}</div>
				</div>
			</div>
			<MDXProvider
				components={{
					p: (props: any) => (
						<p
							css={{
								fontSize: 18,
								fontFamily: "Josefin Sans",
								maxWidth: 720,
								color: "#666666",
								marginTop: 8,
								marginBottom: 8,
							}}
							{...props}
						/>
					),
				}}
			>
				<MDXRenderer>{render}</MDXRenderer>
			</MDXProvider>
		</div>
	);
};

export default WorkExperience;
