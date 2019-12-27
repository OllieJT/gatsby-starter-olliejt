import React from 'react';
import Helmet from 'react-helmet';

//import Schema from "./Schema"
//import { useStaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line
const config = require('../../../utility/config');

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

interface Props {
	title: string;
	type: ['website', 'article', 'profile'];
	image: string;
	url: string;
	desc: string;
	typeProfile: {
		nameFirst: string;
		nameLast: string;
		username: string;
		gender: ['male', 'female'];
	};
	typeArticle: {
		datePublished: Date;
		dateModified: Date;
		dateExpire: Date;
		author: string;
		section: string;
		tag: string;
	};
	keywords: Array<string>;
}

const SEO = ({
	title,
	type,
	image,
	url,
	desc,
	typeProfile,
	typeArticle,
	keywords,
}: Props) => {
	const authorName =
		typeArticle.author ||
		typeProfile.nameFirst + ' ' + typeProfile.nameLast;
	//const pageUrl = `${config.url}${pathname ? pathname : "/"}`,
	return (
		<Helmet
			htmlAttributes={{
				lang: 'en',
			}}
			title={title}
			titleTemplate={`%s | ${config.siteName}`}
			meta={[
				{
					name: 'description',
					content: desc,
				},
				{
					name: 'image',
					content: image,
				},
				{
					name: 'author',
					content: authorName,
				},
				/* ----
					ARTICLE
				---- */
				{
					name: 'article:published_time',
					content: typeArticle.datePublished,
				},
				{
					name: 'article:modified_time',
					content: typeArticle.dateModified,
				},
				{
					name: 'article:expiration_time',
					content: typeArticle.dateExpire,
				},
				{
					name: 'article:author',
					content: authorName,
				},
				{
					name: 'article:section',
					content: typeArticle.section,
				},
				{
					name: 'article:tag',
					content: typeArticle.tag,
				},
				/* ----
					PROFILE
				---- */
				{
					name: 'profile:first_name',
					content: typeProfile.nameFirst,
				},
				{
					name: 'profile:last_name',
					content: typeProfile.nameLast,
				},
				{
					name: 'profile:username',
					content: typeProfile.username,
				},
				{
					name: 'profile:gender',
					content: typeProfile.gender,
				},

				/* ----
					TWITTER
				---- */
				/* ----
					Open Graph
				---- */
				{
					property: 'og:site_name',
					content: config.siteName,
				},
				{
					property: 'og:locale',
					content: config.ogLanguage,
				},
				{
					property: 'og:url',
					content: url,
				},
				{
					property: 'og:type',
					content: type,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: desc,
				},
				{
					property: 'og:image',
					content: image,
				},
				{
					property: 'og:image:alt',
					content: desc,
				},
				/* ----
					TWITTER
				---- */
				{
					name: 'twitter:card',
					content: 'summary',
				},
				{
					name: 'twitter:creator',
					content: config.twitter,
				},
				{
					name: 'twitter:title',
					content: title,
				},
				{
					name: 'twitter:description',
					content: desc,
				},
				{
					name: 'twitter:image',
					content: image,
				},
				{
					name: 'twitter:image:alt',
					content: desc,
				},
			].concat(
				keywords.length > 0
					? {
							name: 'keywords',
							content: keywords.join(', '),
					  }
					: [],
			)}
		/>
	);
};

SEO.defaultProps = {
	title: config.title,
	type: 'website',
	image: config.banner,
	url: config.url,
	desc: config.description,
	typeProfile: {
		nameFirst: config.nameFirst,
		nameLast: config.nameLast,
		username: config.alias,
		gender: config.gender,
	},
	typeArticle: {
		dateModified: new Date(),
		author: config.author,
		section: config.industry,
	},
	keywords: [],
};

export default SEO;

/*
< Schema
	type = { type }
	title = { title }
	headline = { config.headline }
	desc = { desc }
	author = { authorName }
	image = { image }
	siteUrl = { config.url }
	pageUrl = { url }
	lang = { config.ogLanguage }
	logo = { config.logo }
	datePublished = { typeArticle.datePublished }
	dateModified = { typeArticle.dateModified }
/>
 */
