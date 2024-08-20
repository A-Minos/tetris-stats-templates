<script lang="ts" setup>
import type { User } from '@/v2/types/tetrio'
import rgbaster from 'rgbaster-plus'

const props = defineProps<{
	readonly name: User['league']['rank']
}>()

const icon = asyncComputed(async () => {
	return await import(`@/shared/assets/images/ranks/${props.name.toLowerCase()}.svg?url`)
		.then(module => {
			return module.default
		})
})

const color = asyncComputed(async () => {
	const pixels = await rgbaster(icon.value)
	const [r, g, b] = pixels[0].color.split('(')[1].split(')')[0].split(',').slice(0, 3)

	return `rgba(${r}, ${g}, ${b}, 0.5)`
})
</script>

<template>
	<n-card :style='{ backgroundColor: color }'>
		<slot/>
	</n-card>
</template>