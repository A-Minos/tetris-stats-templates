<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly time: string;
	readonly global_rank: number | null;
	readonly play_at: Date;
}>()
</script>

<template>
	<n-card size="small" title="40L">
		<n-flex align="center" justify="space-between">
			<n-flex :size="0" vertical>
				<n-text class="text-3xl fw-bold">{{ time }}</n-text>

				<n-text :depth="3" class="text-sm"> 达成时间: {{ play_at.toLocaleString('zh-CN') }}</n-text>
			</n-flex>

			<n-text v-if="isNonNullish(global_rank)" class="text-sm fw-bold" type="success">
				#{{ global_rank }}
			</n-text>
		</n-flex>
	</n-card>
</template>
