import Vue from '@vitejs/plugin-vue'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		UnoCSS(),
		Vue()
	]
})