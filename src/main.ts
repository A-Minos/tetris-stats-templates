import 'virtual:uno.css'
import '@/styles/main.scss'

import Binding from '@/components/Binding.vue'
import Home from '@/components/Home.vue'

import { createApp, h } from 'vue'
import { createMemoryHistory, createRouter, RouterView } from 'vue-router'

(async () => {
	try {
		const element = document.createElement('div')
		const app = createApp({
			render: () => h(RouterView)
		})

		const router = createRouter({
			history: createMemoryHistory(),
			routes: [
				{
					path: '/',
					component: Home
				},
				{
					path: '/binding',
					component: Binding
				}
			]
		})

		app.use(router)
		app.mount(element)

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

		document.body.appendChild(element)
	} catch (e) {
		if (import.meta.env.DEV) {
			console.error(e)
		}
	}
})()