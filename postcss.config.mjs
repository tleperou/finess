import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import csso from 'postcss-csso'
import postcssGlobals from '@csstools/postcss-global-data'


export default {
	plugins: [
		postcssGlobals({
			files: [
				'./src/finess/props/media/media.breakpoints.css',
				'./src/finess/props/media/media.devices.css',
				'./src/finess/props/media/media.prefers.css',
				'./src/finess/icons.css',
			]
		}),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
			},
		}),
		autoprefixer(),
		csso(),
	],
}
