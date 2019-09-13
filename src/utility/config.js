module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Ollie Taylor", // Navigation and Site Title
  titleAlt: "Ollie Taylor, Digital Designer", // Title for JSONLD
  description:
    "A digital designer who builds online experiences for gamers and esports",
  headline: "Ollie Taylor, Digital Designer", // Headline for schema.org JSONLD
  url: "https://olliejt.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/media/images/manifest-icon.png", // Used for manifest favicon generation
  shortName: "OllieJT", // shortname for manifest. MUST be shorter than 12 characters
  author: "Ollie Tsylor", // Author for schemaORGJSONLD
  themeColor: "#FF3D1F",
  backgroundColor: "#141414",

  twitter: "@TheOllieJT", // Twitter Username
  facebook: "", // Facebook Site Name
  googleAnalyticsID: "UA-00000000-0",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}
