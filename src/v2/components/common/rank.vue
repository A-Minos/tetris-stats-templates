<script lang="ts" setup>
import type { User } from '@/v2/types/tetrio'

const props = defineProps<{
	readonly rank: User['league']['rank']
}>()

const url = asyncComputed(async () => {
	const name = props.rank.toLowerCase()

	return await import(`@/shared/assets/images/ranks/${name}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<n-image :src="url"/>
</template>