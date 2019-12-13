import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
//import Schema from "./Schema"
//import { useStaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line
const website = require("../../../utility/config")

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, type, image, url, desc, typeProfile, typeArticle, keywords }) => {
	const authorName = typeArticle.author || typeProfile.nameFirst + " " + typeProfile.nameLast
	//const pageUrl = `${website.url}${pathname ? pathname : "/"}`,
	return (
		<Helmet
			htmlAttributes={{
				lang: "en"
			}}
			title={title}
			titleTemplate={`%s | ${website.siteName}`}

			meta={[
				{
					name: "description",
					content: desc
				},
				{
					name: "image",
					content: image
				},
				{
					name: "author",
					content: authorName,
				},
				/* ----
					ARTICLE
				---- */
				{
					name: "article:published_time",
					content: typeArticle.datePublished,
				},
				{
					name: "article:modified_time",
					content: typeArticle.dateModified,
				},
				{
					name: "article:expiration_time",
					content: typeArticle.dateExpire,
				},
				{
					name: "article:author",
					content: authorName,
				},
				{
					name: "article:section",
					content: typeArticle.section,
				},
				{
					name: "article:tag",
					content: typeArticle.tag,
				},
				/* ----
					PROFILE
				---- */
				{
					name: "profile:first_name",
					content: typeProfile.nameFirst,
				},
				{
					name: "profile:last_name",
					content: typeProfile.nameLast,
				},
				{
					name: "profile:username",
					content: typeProfile.username,
				},
				{
					name: "profile:gender",
					content: typeProfile.gender,
				},

				/* ----
					TWITTER
				---- */
				/* ----
					Open Graph
				---- */
				{
					property: "og:site_name",
					content: website.siteName,
				},
				{
					property: "og:locale",
					content: website.ogLanguage,
				},
				{
					property: "og:url",
					content: url,
				},
				{
					property: "og:type",
					content: type,
				},
				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:description",
					content: desc,
				},
				{
					property: "og:image",
					content: image,
				},
				{
					property: "og:image:alt",
					content: desc,
				},
				/* ----
					TWITTER
				---- */
				{
					name: "twitter:card",
					content: "summary",
				},
				{
					name: "twitter:creator",
					content: website.twitter,
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "twitter:description",
					content: desc,
				},
				{
					name: "twitter:image",
					content: image,
				},
				{
					name: "twitter:image:alt",
					content: desc,
				},
			]
				.concat(
					keywords.length > 0
						? {
							name: "keywords",
							content: keywords.join(", "),
						}
						: []
				)
			}

		/>
	)
}

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["website", "article", "profile"]),
	image: PropTypes.string,
	url: PropTypes.string,
	desc: PropTypes.string,
	typeProfile: PropTypes.shape(
		{
			nameFirst: PropTypes.string,
			nameLast: PropTypes.string,
			username: PropTypes.string,
			gender: PropTypes.string
		}
	),
	typeArticle: PropTypes.shape(
		{
			datePublished: PropTypes.date,
			dateModified: PropTypes.date,
			dateExpire: PropTypes.date,
			author: PropTypes.string,
			section: PropTypes.string,
			tag: PropTypes.string,
		}
	),
	keywords: PropTypes.arrayOf(PropTypes.string)
}

SEO.defaultProps = {
	type: "website",
	image: website.banner,
	url: website.url,
	desc: website.description,
	typeProfile: {
		nameFirst: website.nameFirst,
		nameLast: website.nameLast,
		username: website.alias,
		gender: website.gender
	}
	,
	typeArticle: {
		dateModified: new Date(),
		author: website.author,
		section: website.industry,
	},
	keywords: []
}


export default SEO


/*
< Schema
	type = { type }
	title = { title }
	headline = { website.headline }
	desc = { desc }
	author = { authorName }
	image = { image }
	siteUrl = { website.url }
	pageUrl = { url }
	lang = { website.ogLanguage }
	logo = { website.logo }
	datePublished = { typeArticle.datePublished }
	dateModified = { typeArticle.dateModified }
/>
 */