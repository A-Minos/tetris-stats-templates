import 'virtual:uno.css'
import '@/styles/main.scss'
import Binding from '@/components/Binding.vue'
import Home from '@/components/Home.vue'
import { data } from '@/core/template'

import { createApp, h } from 'vue'
import { createMemoryHistory, createRouter, RouterView } from 'vue-router'

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

	const targetPath = `/${data.value.type}`

	const routes = router.getRoutes()
	const routeExists = routes.some(route => {
		return targetPath === route.path
	})

	if (routeExists) {
		await router.push({
			path: targetPath
		})
	}

	document.body.appendChild(element)
} catch (e) {
	if (import.meta.env.DEV) {
		console.error(e)
	}
}