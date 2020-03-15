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
	siteUrl: 'https://olliejt.com',
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
	banner: 'static/img/photo-shanghai-s.jpg',

	/*
		BRAND

		LOGO: Full logo image link
		FAVICON: Browser and app icon
		THEMECOLOR: PWA Brand Color
		BACKGROUNDCOLOR: PWA Neutral Color
		INDUSTRY: Business Sector
	*/
	logo: 'static/img/logo.png',
	favicon: 'static/img/manifest-icon.png', // Used for manifest favicon generation
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
	socials: [
		{
			platform: 'twitter',
			username: '@TheOllieJT',
			url: 'https://www.twitter.com/TheOllieJT/',
		},
	],

	// JSONLD / Manifest
	googleAnalyticsID: '',
	companyTwitterID: '427323948',
	companyTwitterUsername: 'TheOllieJT',
};
