import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Layout/SEO"


const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>Error: 404</h1>
	</Layout>
)

export default NotFoundPage