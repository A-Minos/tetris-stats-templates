import Vue from '@vitejs/plugin-vue'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		UnoCSS(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'@vueuse/core',
				'date-fns',
				{
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useModal',
						'useNotification',
						'useLoadingBar'
					]
				}
			]
		}),
		Components({
			resolvers: [
				NaiveUiResolver()
			]
		}),
		Vue()
	]
})