<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import { type Component, h } from 'vue'

const tests = asyncComputed(async () => {
	return await Promise.all(
		Object.values(
			import.meta.glob<{
				readonly default: Component
			}>('@/v2/components/tests/*.vue')
		).map(async loadModule => {
			const module = await loadModule()
			return h(module.default)
		})
	)
}, [])
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content class="relative">
				<div class="w-screen h-screen">
					<div class="absolute top-1/2 left-1/2 -translate-1/2">
						<Component :is="test" v-for="test in tests"/>
					</div>
				</div>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>