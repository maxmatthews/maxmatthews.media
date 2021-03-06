module.exports = {
	siteMetadata: {
		title: 'Max Matthews Media',
		author: 'Max Matthews',
		description: 'Youtube, Blog, & Podcast',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [
						'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
					],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/gatsby-icon.png',
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: ['G-9BQ949WSZY'],
			},
		},
	],
};
