<script lang="ts" setup>
import type { User } from '@/v2/types/tetrio'

const props = defineProps<{
	readonly rank: User['league']['rank']
}>()

const rank_url = asyncComputed(async () => {
	return await import(`@/shared/assets/images/ranks/${props.rank}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<n-image :src="rank_url"/>
</template>