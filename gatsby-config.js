module.exports = {
	siteMetadata: {
		title: 'The Thai Astronomical Society',
		authors: [
			{
				name: 'Thammarith Likittheerameth',
				summary: 'the one who codes this',
				social: {
					twitter: 'thammarith',
				},
			},
		],
		image: '/default-thumbnail.png',
		description: 'The Definitive Astronomical Website for Thais',
		siteUrl: 'https://thaiastro.nectec.or.th',
		social: {
			twitter: 'theThaiAstro',
		},
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/content/blog`,
				name: 'blog',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets`,
				name: 'assets',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 704,
							wrapperStyle: 'max-width: 88rem',
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				//trackingId: 'ADD YOUR TRACKING ID HERE',
			},
		},
		'gatsby-plugin-feed',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'The Thai Astronomical Society',
				short_name: 'TAS',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/assets/images/logo.png',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
};
