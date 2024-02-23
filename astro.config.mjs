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
					label: 'About Me',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Experience', link: '/about/experience/' },
						{ label: 'Contacts', link: '/about/contacts/' },
					],
				},
				{
					label: 'Career',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Contracting', link: '/career/contracting/' },
						{ label: 'Tutoring', link: '/career/tutoring/' },
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
