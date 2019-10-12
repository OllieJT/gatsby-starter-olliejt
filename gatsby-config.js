require("dotenv").config({
	path: `.env`, //`.env.${process.env.NODE_ENV}`
})
const website = require("./src/utility/config")
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
	pathPrefix: website.pathPrefix,
	siteMetadata: {
		siteUrl: website.url + website.pathPrefix, // For gatsby-plugin-sitemap
		pathPrefix,
		title: website.title,
		titleAlt: website.titleAlt,
		description: website.description,
		banner: website.logo,
		headline: website.headline,
		siteLanguage: website.siteLanguage,
		ogLanguage: website.ogLanguage,
		author: website.author,
		twitter: website.twitter,
		facebook: website.facebook,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/media/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-json`,
		`gatsby-plugin-styled-components`,
		{
			resolve: "gatsby-plugin-netlify-cache",
			options: {
				extraDirsToCache: ["src/media/images"],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: website.title,
				short_name: website.titleAlt,
				description: website.description,
				start_url: pathPrefix,
				background_color: website.backgroundColor,
				theme_color: website.themeColor,
				display: "standalone",
				icon: website.favicon,
			},
		},
		//`gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Bai Jamjuree:400,700"],
				},
			},
		},
	],
}
