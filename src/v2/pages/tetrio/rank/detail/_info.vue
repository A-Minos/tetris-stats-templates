<script lang="ts" setup>
import rank from '@/v2/components/common/rank.vue'
import type { User } from '@/v2/types/tetrio'

defineProps<{
	readonly name: User['league']['rank']
	readonly require_tr: number
	readonly players: number
}>()
</script>

<template>
	<n-flex align="center" size="small">
		<rank :rank="name" class="[&>img]:size-6"/>

		<n-flex :size="0" vertical>
			<n-text class="text-4 fw-bold">{{ require_tr }} TR</n-text>
			<n-text class="text-2 fw-bold">{{ players }} 玩家</n-text>
		</n-flex>
	</n-flex>
</template>