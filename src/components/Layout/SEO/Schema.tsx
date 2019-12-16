import React from "react"
import Helmet from "react-helmet"
// eslint-disable-next-line

interface Props {
	type: "website" | "article" | "profile"
	title: string
	headline: string
	desc: string
	author: string
	image: string
	siteUrl: string
	pageUrl: string
	lang: string
	logo: string
	datePublished: Date
	dateModified: Date

}

const Schema = ({
	type,
	title,
	headline,
	desc,
	author,
	image,
	siteUrl,
	pageUrl,
	lang,
	logo,
	datePublished,
	dateModified
}: Props) => {
	// schema.org in JSONLD format
	// https://developers.google.com/search/docs/guides/intro-structured-data
	// You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
	const schemaDefault = {
		"@context": "http://schema.org",
		url: siteUrl,
		mainEntityOfPage: pageUrl,
		headline: headline,
		inLanguage: lang,
		description: desc,
		name: title,
		author: {
			"@type": "Person",
			name: author
		},
		copyrightHolder: {
			"@type": "Person",
			name: author,
		},
		copyrightYear: new Date().getFullYear(),
		creator: {
			"@type": "Person",
			name: author,
		},
		publisher: {
			"@type": "Person",
			name: author,
			logo: {
				"@type": "ImageObject",
				url: logo,
			},
		},
		datePublished: datePublished,
		dateModified: dateModified,
		image: {
			"@type": "ImageObject",
			url: image,
		},
	}
	const schemaOrgWebPage = {
		"@type": "WebPage",
		schemaDefault
	}
	const itemListElement = [
		{
			"@type": "ListItem",
			item: {
				"@id": siteUrl,
				name: "Homepage",
			},
			position: 1,
		},
	]
	let schemaArticle = null
	if (type === "article") {
		schemaArticle = {
			"@type": "Article",
			schemaDefault
		},
			// Push current blogpost into breadcrumb list
			itemListElement.push({
				"@type": "ListItem",
				item: {
					"@id": pageUrl,
					name: title,
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
	/*
	return ({
		page: JSON.stringify(schemaArticle) || JSON.stringify(schemaOrgWebPage),
		breadcrumb: JSON.stringify(breadcrumb)
	}) */

	return (
		<Helmet>
			{type === "article" ? (
				<script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
			) : (
					<script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
				)}

			<script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
		</Helmet>
	)
}

export default Schema
