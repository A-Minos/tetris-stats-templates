<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core'
import { type Component, h } from 'vue'

const tests = asyncComputed(async () => {
	return await Promise.all(
		Object.values(
			import.meta.glob<{
				readonly default: Component
			}>('@/components/tests/*.vue')
		).map(async loadModule => {
			const module = await loadModule()
			return h(module.default)
		})
	)
}, [])
</script>

<template>
	<div class="flex flex-col gap-1 p-2">
		<span>按住 ctrl 以修改值</span>

		<div class="flex gap-1">
			<Component :is="test" v-for="test in tests"/>
		</div>
	</div>
</template>