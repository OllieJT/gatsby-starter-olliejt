/* eslint-disable */
module.exports = {
	/*
		SITE_SETTINGS

		SITENAME: hortname for manifest. MUST be shorter than 12 characters
		URL: Website domain with no trailing slash
		PATHPREFIX: Prefix for all links. example.com/portfolio would be "portfolio"
		SKIPNAVID: HTML ID for the element that screen readers(a11y) can skip to for the main content
	*/
	siteName: 'OllieJT',
	url: 'https://olliejt.com',
	pathPrefix: '',
	skipNavId: 'reach-skip-nav',
	siteLanguage: 'en',
	ogLanguage: 'en_US',

	/*
		METADATA

		TITLE: Human readable name of the website
		HEADLINE: Caption or CTA for SEO
	*/
	title: 'OllieJT',
	headline: 'Web Designer & Developer',
	description: 'A digital designer who builds online experiences for gamers and esports',
	banner: 'src/images/photo-shanghai-s.jpg',

	/*
		BRAND

		LOGO: Full logo image link
		FAVICON: Browser and app icon
		THEMECOLOR: PWA Brand Color
		BACKGROUNDCOLOR: PWA Neutral Color
		INDUSTRY: Business Sector
	*/
	logo: 'src/images/logo.png',
	favicon: 'src/images/manifest-icon.png', // Used for manifest favicon generation
	themeColor: '#FF3D1F',
	backgroundColor: '#141414',
	industry: 'Design',

	/*
		PROFILE

		AUTHOR: Full Name
	*/
	author: 'Ollie Taylor',
	nameFirst: 'Ollie',
	nameLast: 'Taylor',
	gender: 'male',

	/*
		SOCIAL

		ALIAS: Username
		...url
	*/
	alias: 'TheOllieJT',
	twitter: '@TheOllieJT', // Twitter Username
	facebook: '', // Facebook Site Name
	discord: '',

	// JSONLD / Manifest
	googleAnalyticsID: 'UA-00000000-0',
};
