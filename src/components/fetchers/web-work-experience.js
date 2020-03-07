import React from "react";
import { StaticQuery, graphql } from "gatsby";
import WorkExperience from "../work-experience";

const WebFetcher = () => (
	<StaticQuery
		query={graphql`
			query {
				allMdx(filter: { frontmatter: { domain: { eq: "web" } } }) {
					nodes {
						frontmatter {
							title
							startDate
							endDate
						}
						body
					}
				}
			}
		`}
		render={data => {
			return data.allMdx.nodes.map(node => {
				return (
					<WorkExperience
						key={node.frontmatter.title}
						title={node.frontmatter.title}
						startDate={node.frontmatter.startDate}
						endDate={node.frontmatter.endDate}
						render={node.body}
					/>
				);
			});
		}}
	/>
);

export default WebFetcher;
