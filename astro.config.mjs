import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { components } from './config/components'
import { locales } from './config/locales';

// https://astro.build/config
export default defineConfig({
	site: 'https://finess.dev',
	integrations: [
		starlight({
			title: 'Finess docs',
			social: {
				github: 'https://github.com/tleperou/finess',
			},
			customCss: ['./src/finess/finess.css', './src/styles.css'],
			components,
			defaultLocale: 'en',
			locales,
			editLink: {
				baseUrl: 'https://github.com/tleperou/finess/edit/main/',
			},
		}),
	],
});
