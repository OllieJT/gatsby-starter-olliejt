import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadata {
	site: {
		siteMetadata: {
			siteName: string;
			siteUrl: string;
			pathPrefix: string;
			skipNavId: string;
			siteLanguage: string;
			ogLanguage: string;

			title: string;
			headline: string;
			description: string;
			banner: string;

			logo: string;
			favicon: string;
			themeColor: string;
			backgroundColor: string;
			industry: string;

			author: string;
			nameFirst?: string;
			nameLast?: string;
			gender?: 'male' | 'female';

			alias?: string;
			twitter?: string;
			facebook?: string;
			discord?: string;

			googleAnalyticsID?: string;
		};
	};
}

export default () => {
	const data: SiteMetadata = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					siteName
					siteUrl
					pathPrefix
					skipNavId
					siteLanguage
					ogLanguage

					title
					headline
					description
					banner

					logo
					favicon
					themeColor
					backgroundColor
					industry

					author
					nameFirst
					nameLast
					gender

					alias
					twitter
					facebook
					discord

					googleAnalyticsID
				}
			}
		}
	`);

	return data.site.siteMetadata;
};
