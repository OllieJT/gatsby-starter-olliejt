import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { setThemeColor } from "../utility/functions"
import Header from "../components/Page/Header"
import Demo from "../components/Demo"

const IndexPage = ({ data }) => (
	<Layout theme={setThemeColor("switch-invert")}>
		<SEO
			title="OllieJT"
			keywords={[
				`portfolio`,
				`ollie`,
				`taylor`,
				`olliejt`,
				`theolliejt`,
				`designer`,
				`product designer`,
				`esports`,
				`gaming`,
			]}
		/>
		<Header />
		<Demo />
	</Layout>
)

export const query = graphql`
	query homePageQuery {
		allFile(filter: { name: { in: ["avatar-thailand", "photo-shanghai-s", "hero-video"] } }) {
			edges {
				node {
					name
					relativePath
				}
			}
		}
	}
`

export default IndexPage
