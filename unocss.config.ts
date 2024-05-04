import {
	defineConfig,
	presetUno,
	presetWebFonts,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'none',
			fonts: {
				sans: ['HarmonyOS Sans SC', 'HarmonyOS Sans']
			}
		})
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass()
	]
})