/* eslint-disable */
require('dotenv').config({
	path: '.env', //`.env.${process.env.NODE_ENV}`
});
const config = require('./web-config.js');
const isStaging = process.env.NODE_ENV === 'development';

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: config,
	plugins: [
		{
			resolve: `gatsby-theme-loadup`,
			options: config,
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				allExtensions: true, // defaults to false
			},
		},
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
				path: `${__dirname}/static/img`,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-netlify-cache',
			options: {
				extraDirsToCache: ['src/images'],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				start_url: config.pathPrefix,
				display: 'standalone',
				name: config.title,
				short_name: config.siteName,
				description: config.description,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				icon: config.favicon,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Sen`,
						variants: [`400`, `700`, `800`],
					},
				],
			},
		},
	],
};
