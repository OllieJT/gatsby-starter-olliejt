/* eslint-disable */
require("dotenv").config({
	path: ".env", //`.env.${process.env.NODE_ENV}`
})
const config = require("./src/utility/config")
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: config.url + config.pathPrefix, // For gatsby-plugin-sitemap
		pathPrefix,
		title: config.title,
		titleAlt: config.titleAlt,
		description: config.description,
		banner: config.logo,
		headline: config.headline,
		siteLanguage: config.siteLanguage,
		ogLanguage: config.ogLanguage,
		author: config.author,
		twitter: config.twitter,
		facebook: config.facebook,
	},
	plugins: [
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/src/data`,
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-transformer-remark",
		"gatsby-transformer-json",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-plugin-netlify-cache",
			options: {
				extraDirsToCache: ["src/images"],
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.title,
				short_name: config.titleAlt,
				description: config.description,
				start_url: pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "standalone",
				icon: config.favicon,
			},
		},
		//`gatsby-plugin-offline`,
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
						variants: [`400`, `700`]
					},
				],
			},
		}
	],
}
