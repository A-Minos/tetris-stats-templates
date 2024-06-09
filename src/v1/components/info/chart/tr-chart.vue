<script lang="ts" setup>
import point from '@/v1/assets/images/chart/point.svg?url'
import Chart from '@/v1/components/info/chart/_base.vue'
import type { TetraLeagueHistoryRecord } from '@/v1/types'

import type { LineSeriesOption } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import type { GridComponentOption, MarkLineComponentOption } from 'echarts/components'
import { GridComponent, MarkLineComponent } from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import { use } from 'echarts/core'

use([GridComponent, MarkLineComponent, LineChart])

const props = defineProps<{
	readonly data: TetraLeagueHistoryRecord[]
	readonly split_interval: number
	readonly min_tr: number
	readonly max_tr: number
	readonly offset: number
}>()

type ChartOption = ComposeOption<GridComponentOption | MarkLineComponentOption | LineSeriesOption>

const option = computed<ChartOption>(() => {
	const interval = 3600 * 24 * 1000

	return {
		animation: false,
		grid: {
			left: '-5%',
			bottom: '17%',
			width: '90%',
			height: '70%'
		},
		xAxis: {
			type: 'time',
			minInterval: interval,
			maxInterval: interval,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				formatter: (value, index) => {
					const date = new Date(value)

					if (index === 0 || index % 2 !== 0) {
						return ''
					}

					const month = Number(date.getMonth() + 1)
						.toString()
						.padStart(2, '0')

					const day = date.getDate()
						.toString()
						.padStart(2, '0')

					if (index === 10) {
						return `{last_month|${month}}\n{last_day|${day}}`
					}

					return `{month|${month}}\n{day|${day}}`
				},
				rich: {
					month: {
						fontFamily: 'CabinetGrotesk-Variable',
						fontSize: 13,
						fontWeight: 400,
						color: '#ffffff99'
					},
					day: {
						fontFamily: 'CabinetGrotesk-Variable',
						fontSize: 20,
						fontWeight: 800,
						color: '#ffffff99'
					},
					last_month: {
						fontFamily: 'CabinetGrotesk-Variable',
						fontSize: 13,
						fontWeight: 400,
						color: '#373533',
						backgroundColor: '#fafafa',
						borderRadius: 6,
						padding: [-10, 0, 10, 0],
						width: 36,
						height: 37,
						lineHeight: 32
					},
					last_day: {
						fontFamily: 'CabinetGrotesk-Variable',
						fontSize: 20,
						fontWeight: 800,
						color: '#373533',
						padding: [-18, 0, 0, 0],
						lineHeight: 0
					}
				}
			},
			zlevel: 1
		},
		yAxis: {
			type: 'value',
			interval: props.split_interval,
			position: 'right',
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				align: 'right',
				formatter: (value) => {
					const tr = value.toString()
						.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

					return `{value|${tr}}`
				},
				rich: {
					value: {
						fontFamily: 'CabinetGrotesk-Variable',
						fontSize: 15,
						fontWeight: 500,
						color: '#ffffff99'
					}
				}
			},
			offset: 70,
			max: props.max_tr + props.offset,
			min: props.min_tr - props.offset
		},
		series: [
			{
				data: props.data.map(data => {
					return [
						new Date(data.record_at),
						Number(data.tr)
					]
				}),
				type: 'line',
				smooth: true,
				symbol: (_, series) => {
					if (series.dataIndex === props.data.length - 1) {
						return `image://${point}`
					}

					return 'none'
				},
				symbolSize: 75,
				symbolOffset: [0.79, 0],
				lineStyle: {
					color: '#fafafa99'
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#fafafa4d'
							},
							{
								offset: 1,
								color: '#fafafa00'
							}
						],
						global: false
					}
				},
				markLine: {
					data: [
						[
							{
								xAxis: 'max',
								yAxis: props.data[props.data.length - 1]['tr']
							},
							{
								xAxis: 'max',
								y: '300'
							}
						]
					],
					label: {
						show: false
					},
					lineStyle: {
						color: '#fafafa',
						width: 3,
						type: 'dashed',
						cap: 'round'
					},
					symbol: 'none',
					animation: false
				},
				z: 5
			}
		]
	}
})
</script>

<template>
	<div class="relative w-143.75 h-68.75 bg-[linear-gradient(222.34deg,#525252_11.97%,#1d1916_89.73%)]">
		<chart :option="option"/>

		<div class="absolute left-6 top-4.75 text-6.25 fw-extrabold text-[#fafafa]">
			Tetra Rating (TR)
		</div>

		<div class="absolute left-6 top-22.5">
			<slot/>
		</div>
	</div>
</template>