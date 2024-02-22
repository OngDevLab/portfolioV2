import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'William Ong\'s Portfolio',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/ongdevlab',
				'x.com': 'https://www.x.com/ongdevlab'
			},
			sidebar: [
				{
					label: 'Career',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide 2', link: '/career/example2/' },
						{ label: 'Example Guide', link: '/career/example/' },
					],
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
		}),
	],
});
