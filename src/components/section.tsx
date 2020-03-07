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
		height: "100%",
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 100,
		paddingBottom: 50,
	};

	return (
		<section css={cssFn(sectionCss)}>
			<div css={containerCss}>{children}</div>
		</section>
	);
};

export default Section;
