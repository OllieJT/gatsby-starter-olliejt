import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Layout/SEO"
import Header from "../components/Header"

const IndexPage = ({ data }) => (
	<Layout theme={null}>
		<SEO
			title="OllieJT"
			keywords={[
				"portfolio",
				"ollie",
				"taylor",
				"olliejt",
				"theolliejt",
				"designer",
				"product designer",
				"esports",
				"gaming",
			]}
		/>
		{console.log(data)}
		<Header />
	</Layout>
)

IndexPage.propTypes = {
	data: PropTypes.any.isRequired,
}

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
