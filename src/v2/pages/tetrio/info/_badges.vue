<script lang="ts" setup>
import type { Badge } from '@/v2/types/tetrio'

defineProps<{
	readonly badges: Badge[]
}>()
</script>

<template>
	<n-card size="small">
		<n-flex justify="center">
			<template v-for="badge in badges">
				<n-image :src="(`https://tetr.io/res/badges/${badge.id}.png`)" class="[&>img]:h-6"/>
			</template>
		</n-flex>
	</n-card>
</template>