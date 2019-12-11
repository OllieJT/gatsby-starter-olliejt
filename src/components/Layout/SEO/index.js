import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from 'gatsby';
import Facebook from "./Facebook"
import Twitter from "./Twitter"
// eslint-disable-next-line
const website = require("../../../utility/config")

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, desc, banner, pathname, isArticle, firstDate, lastDate }) => {
	const metadata = {
		title: title ? title : website.title,
		titleTemplate: website.titleTemplate,
		headline: website.headline,
		description: desc ? desc : website.description,
		image: `${website.url}${banner ? banner : website.banner}`,
		siteUrl: website.url,
		pageUrl: `${website.url}${pathname ? pathname : "/"}`,
		language: website.ogLanguage,
		author: website.author,
		twitterUsername: website.twitter,
		facebookUsername: website.facebook,
		datePublished: firstDate ? firstDate : website.originDate,
		dateUpdated: lastDate ? lastDate : new Date(),
		isArticle: isArticle,
	}

	// schema.org in JSONLD format
	// https://developers.google.com/search/docs/guides/intro-structured-data
	// You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

	const schemaOrgWebPage = {
		"@context": "http://schema.org",
		"@type": "WebPage",
		url: metadata.siteUrl,
		headline: metadata.headline,
		inLanguage: metadata.language,
		mainEntityOfPage: metadata.pageUrl,
		description: metadata.description,
		name: metadata.title,
		author: {
			"@type": "Person",
			name: metadata.author,
		},
		copyrightHolder: {
			"@type": "Person",
			name: metadata.author,
		},
		copyrightYear: new Date().getFullYear(),
		creator: {
			"@type": "Person",
			name: metadata.author,
		},
		publisher: {
			"@type": "Person",
			name: metadata.author,
		},
		datePublished: metadata.datePublished,
		dateModified: metadata.dateUpdated,
		image: {
			"@type": "ImageObject",
			url: metadata.image,
		},
	}

	const itemListElement = [
		{
			"@type": "ListItem",
			item: {
				"@id": metadata.siteUrl,
				name: "Homepage",
			},
			position: 1,
		},
	]

	let schemaArticle = null

	if (metadata.isArticle) {
		schemaArticle = {
			"@context": "http://schema.org",
			"@type": "Article",
			author: {
				"@type": "Person",
				name: metadata.author,
			},
			copyrightHolder: {
				"@type": "Person",
				name: metadata.author,
			},
			copyrightYear: new Date().getFullYear(),
			creator: {
				"@type": "Person",
				name: metadata.author,
			},
			publisher: {
				"@type": "Organization",
				name: metadata.author,
				logo: {
					"@type": "ImageObject",
					url: metadata.image,
				},
			},
			datePublished: firstDate ? firstDate : null,
			dateModified: lastDate ? lastDate : Date(),
			description: desc,
			headline: title,
			inLanguage: "en",
			url: pathname,
			name: title,
			image: {
				"@type": "ImageObject",
				url: banner,
			},
			mainEntityOfPage: pathname,
		}
		// Push current blogpost into breadcrumb list
		itemListElement.push({
			"@type": "ListItem",
			item: {
				"@id": pathname,
				name: metadata.title,
			},
			position: 2,
		})
	}

	const breadcrumb = {
		"@context": "http://schema.org",
		"@type": "BreadcrumbList",
		description: "Breadcrumbs list",
		name: "Breadcrumbs",
		itemListElement,
	}

	return (
		<Helmet title={metadata.title} titleTemplate={metadata.titleTemplate}>
			<html lang={metadata.language} />

			<meta name="description" content={metadata.description} />
			<meta name="image" content={metadata.image} />

			{!metadata.isArticle && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
			{metadata.isArticle && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}

			<script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

			<Facebook
				desc={metadata.description}
				image={metadata.image}
				title={metadata.title}
				type={metadata.isArticle ? "article" : "website"}
				url={metadata.pageUrl}
				locale={metadata.language}
				name={metadata.facebookUsername}
			/>
			<Twitter
				title={metadata.title}
				image={metadata.image}
				desc={metadata.description}
				username={metadata.twitterUsername}
			/>
		</Helmet>
	)
}

SEO.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	banner: PropTypes.string,
	pathname: PropTypes.string,
	isArticle: PropTypes.bool,
	firstDate: PropTypes.string,
	lastDate: PropTypes.string,
}
export default SEO
