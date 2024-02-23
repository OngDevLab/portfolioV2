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
						{ label: 'Contracting (2010-present)', link: '/career/contracting/' },
						{ label: 'Tutoring (2015-present)', link: '/career/tutoring/' },
						{ label: 'Tembo (2023-2024)', link: '/career/tembo/' },
						{ label: 'Procter and Gamble (2019-2023)', link: '/career/pg/' },
						{ label: 'Cutco (2017-2018)', link: '/career/cutco/' },
						{ label: 'Real Estate (2010-2020)', link: '/career/realestate/' },
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
