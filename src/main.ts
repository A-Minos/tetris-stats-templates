import 'virtual:uno.css'
import '@/styles/main.scss'

import { type Component, createApp, h } from 'vue'
import { createMemoryHistory, createRouter, type RouteRecordRaw, RouterView } from 'vue-router'

(async () => {
	try {
		const element = document.createElement('div')
		const app = createApp({
			render: () => h(RouterView)
		})

		const router = createRouter({
			history: createMemoryHistory(),
			routes: await Promise.all(
				Object.entries(
					import.meta.glob<{
						readonly default: Component
					}>('@/pages/**/*.vue')
				).map(async ([path, loadPage]) => {
					const name = path
						.replace(/(.*)(\/)(pages)(\/)/g, '')
						.replace(/(index)/g, '')
						.replace(/(\.vue)$/g, '')

					return {
						path: `/${name}`,
						component: async () => {
							return await loadPage()
								.then(page => {
									return page.default
								})
						}
					} satisfies RouteRecordRaw
				})
			)
		})

		const handlePathUpdate = async () => {
			const path = `/${document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML.trim()}`

			if (
				router.getRoutes()
					.some(record => {
						return path === record.path
					})
			) {
				await router.push({
					path
				})
			}
		}

		new MutationObserver(handlePathUpdate)
			.observe(document.querySelector<HTMLTemplateElement>('template#path')!.content, {
				childList: true
			})

		await handlePathUpdate()

		app.use(router)
		app.mount(element)

		document.body.appendChild(element)
	} catch (e) {
		if (import.meta.env.DEV) {
			console.error(e)
		}
	}
})()