import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
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
    <h1>Homepage</h1>
  </Layout>
)

export const query = graphql`
  query homePageQuery {
    allFile(
      filter: {
        name: { in: ["avatar-thailand", "photo-shanghai-s", "hero-video"] }
      }
    ) {
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
