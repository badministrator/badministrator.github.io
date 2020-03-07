/** @jsx jsx */
import { jsx, CSSObject } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { ReactNode } from "react";

type CSSFn = (currentStyles: CSSObject) => CSSObject;

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
			}}
		>
			<div css={{ display: "flex", justifyContent: "space-between" }}>
				<h3 css={{ fontFamily: "Playfair Display", fontSize: 32 }}>{title}</h3>
				<div>
					<div>{startDate}</div>
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
								marginBottom: 10,
								color: "#4a4a4a",
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
