import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataQuery {
	site: {
		siteMetadata: SiteMetadata;
	};
}
export interface SiteMetadata {
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
	alias?: string;
	nameFirst?: string;
	nameLast?: string;
	gender?: 'male' | 'female';

	socials: {
		platform:
			| 'twitter'
			| 'facebook'
			| 'twitch'
			| 'mixer'
			| 'youtube'
			| 'linkedin'
			| 'discord'
			| 'email'
			| 'instagram';
		username: string;
		url: string;
		id?: string;
	}[];

	googleAnalyticsID?: string;
	companyTwitterID?: string;
	companyTwitterUsername?: string;
}

export default () => {
	const data: SiteMetadataQuery = useStaticQuery(graphql`
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
					alias
					nameFirst
					nameLast
					gender

					socials {
						platform
						url
						username
					}

					googleAnalyticsID
					companyTwitterID
					companyTwitterUsername
				}
			}
		}
	`);

	const metadata: SiteMetadata = data.site.siteMetadata;

	return metadata;
};
