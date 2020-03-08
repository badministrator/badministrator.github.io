/** @jsx jsx */
import { jsx, CSSObject, InterpolationWithTheme } from "@emotion/core";

import { ReactNode } from "react";

type CSSFn = (currentStyles: CSSObject) => CSSObject;

export interface SectionProps {
	children: ReactNode;
	cssFn?: CSSFn;
}

const Section = (props: SectionProps) => {
	const {
		children,
		cssFn = (styles: CSSObject) => {
			return styles;
		},
	} = props;

	const sectionCss: InterpolationWithTheme<"section"> = {
		minHeight: "100vh",
		scrollSnapAlign: "start",
	};

	const containerCss: InterpolationWithTheme<"div"> = {
		maxWidth: 1024,
		marginLeft: "auto",
		marginRight: "auto",
		paddingLeft: 24,
		paddingRight: 24,
		paddingTop: 100,
		paddingBottom: 50,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		minHeight: "100vh",
	};

	return (
		<section css={cssFn(sectionCss)}>
			<div css={containerCss}>{children}</div>
		</section>
	);
};

export default Section;
