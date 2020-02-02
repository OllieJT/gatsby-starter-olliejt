/* eslint-disable */
require('dotenv').config({
	path: '.env', //`.env.${process.env.NODE_ENV}`
});
const config = require('./src/utility/config');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteName: config.siteName,
		siteUrl: config.url + config.pathPrefix, // For gatsby-plugin-sitemap
		pathPrefix,

		siteLanguage: config.siteLanguage,
		ogLanguage: config.ogLanguage,

		title: config.title,
		headline: config.headline,
		description: config.description,
		banner: config.banner,
		logo: config.logo,

		author: config.author,
		nameFirst: config.nameFirst,
		nameLast: config.nameLast,
		gender: config.gender,

		alias: config.alias,
		twitter: config.twitter,
		facebook: config.facebook,
		discord: config.twitter,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$|\.tsx$|\.ts$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-plugin-netlify-cache',
			options: {
				extraDirsToCache: ['src/images'],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.title,
				short_name: config.siteName,
				description: config.description,
				start_url: pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: config.favicon,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Oswald`,
						subsets: [`latin`],
					},
					{
						family: `Bai Jamjuree`,
						variants: [`400`, `700`],
					},
				],
			},
		},
	],
};
