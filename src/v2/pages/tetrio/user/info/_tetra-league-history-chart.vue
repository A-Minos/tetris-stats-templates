<script lang="ts" setup>
import type { TetraLeagueHistory } from '@/v2/types/data'
import { Chart } from '@antv/g2'

const props = defineProps<{
	readonly current_tr: number;
	readonly data: TetraLeagueHistory[];
}>()

const container = ref<HTMLElement>()

tryOnMounted(() => {
	const chart = new Chart({
		container: container.value,
		autoFit: true,
		theme: 'dark'
	})

	chart.options({
		type: 'view',

		data: {
			value: props.data
		},

		axis: {
			x: {
				labelFormatter: (date: Date) => date.toLocaleDateString('zh-CN')
			},
			y: {
				title: 'Tetra Rating'
			}
		},

		encode: {
			x: (data: TetraLeagueHistory) => {
				return data.record_at
			},
			y: (data: TetraLeagueHistory) => {
				return Number(data.tr)
			}
		},

		children: [
			{
				type: 'line'
			},
			{
				type: 'point'
			}
		]
	})

	setTimeout(() => {
		chart.render()
	}, 0)
})
</script>

<template>
	<n-card size="small">
		<div ref="container" class="h-80"/>
	</n-card>
</template>
