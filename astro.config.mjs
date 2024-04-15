import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { components } from './config/components'
import { locales } from './config/locales';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Finess docs',
			social: {
				github: 'https://github.com/tleperou/finess',
			},
			customCss: ['./src/finess/finess.css'],
			components,
			defaultLocale: 'en',
			locales,
		}),
	],
});
