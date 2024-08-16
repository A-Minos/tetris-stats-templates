<script lang="ts" setup>
import type { User } from '@/v2/types/tetrio'

const props = defineProps<{
	readonly rank: User['league']['rank']
}>()

const url = asyncComputed(async () => {
	const name = props.rank.toLowerCase()
	if (name === 'x+') {
		return await import(`@/shared/assets/images/ranks/${name}.png?url`).then((module) => {
			return module.default
		})
	}
	return await import(`@/shared/assets/images/ranks/${name}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<n-image :src="url"/>
</template>