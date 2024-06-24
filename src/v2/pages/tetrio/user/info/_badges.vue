<script lang="ts" setup>
import type { Data } from '@/v2/pages/tetrio/user/info/index.vue'

defineProps<{
	readonly badges: Data['user']['badges']
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