<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly pieces: number
	readonly pps: number
	readonly lines: number
	readonly lpm: number
	readonly holds: number | null
	readonly level: number
	readonly score: number
	readonly spp: number
}>()
</script>

<template>
	<n-card class="w-1/2" size="small">
		<n-flex :size="0" vertical>
			<n-flex justify="space-between">
				<n-text>块数</n-text>
				<n-text>{{ pieces }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>块/秒</n-text>
				<n-text>{{ pps }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>消行</n-text>
				<n-text>{{ lines }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>消行/分钟</n-text>
				<n-text>{{ lpm }}</n-text>
			</n-flex>

			<template v-if="isNonNullish(holds)">
				<n-flex justify="space-between">
					<n-text>暂存</n-text>
					<n-text>{{ holds }}</n-text>
				</n-flex>
			</template>

			<n-flex justify="space-between">
				<n-text>等级</n-text>
				<n-text>{{ level }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>分数</n-text>
				<n-text>{{ score }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>分数/块</n-text>
				<n-text>{{ spp }}</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>