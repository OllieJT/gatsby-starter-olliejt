/* eslint-disable */
module.exports = {
	pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
	url: "https://olliejt.com", // Domain of your site. No trailing slash!
	siteName: "OllieJT", // shortname for manifest. MUST be shorter than 12 characters
	siteLanguage: "en", // Language Tag on <html> element
	ogLanguage: "en_US", // Facebook Language
	/* ----
		METADATA
	---- */
	headline: "Ollie Taylor, Digital Designer", // Headline for schema.org JSONLD
	title: "Ollie Taylor", // Navigation and Site Title
	description: "A digital designer who builds online experiences for gamers and esports",
	banner: "src/images/photo-shanghai-s.jpg", // Used for SEO
	/* ----
		BRAND
	---- */
	author: "Ollie Taylor", // Author for schemaORGJSONLD
	logo: "src/images/logo.png", // Used for SEO
	themeColor: "#FF3D1F",
	backgroundColor: "#141414",
	industry: "",
	/* ----
	PROFILE
	---- */
	nameFirst: "Ollie",
	nameLast: "Taylor",
	gender: "male", // [male, femaile]
	/* ----
	SOCIAL
	---- */
	alias: "TheOllieJT",
	twitter: "@TheOllieJT", // Twitter Username
	facebook: "", // Facebook Site Name

	// JSONLD / Manifest
	favicon: "src/images/manifest-icon.png", // Used for manifest favicon generation
	googleAnalyticsID: "UA-00000000-0",
	skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}
