<script lang="ts" setup>
import Chart from '@/components/info/chart/_base.vue'
import type { RadarSeriesOption } from 'echarts/charts'
import { RadarChart } from 'echarts/charts'
import type { ComposeOption } from 'echarts/core'
import { use } from 'echarts/core'
import { computed } from 'vue'

use([RadarChart])

const props = defineProps<{
	readonly data: ({
		readonly label: string
		readonly value: number
	} & Partial<{
		readonly min: number
		readonly max: number
	}>)[]
}>()

type ChartOption = ComposeOption<RadarSeriesOption>

const option = computed<ChartOption>(() => {
	return {
		animation: false,
		radar: [
			{
				indicator: (() => {
					return props.data.map((data, index) => {
						return {
							name: data.label,
							nameRotate: (() => {
								if (props.data.length === 6) {
									switch (index) {
										case 2:
											return -60
										case 3:
											return 0
										case 4:
											return 60
									}
								}

								return 360 / props.data.length * index
							})(),
							min: data.min,
							max: data.max
						}
					})
				})(),
				center: ['50%', '50%'],
				radius: '65%',
				startAngle: 90,
				splitNumber: 4,
				shape: 'circle',
				silent: true,
				axisName: {
					color: '#fafafa',
					fontFamily: 'CabinetGrotesk-Variable',
					fontSize: 15,
					fontWeight: '800'
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#fafafa4d'
					}
				},
				axisLabel: {
					show: true,
					rotate: 0,
					margin: -1,
					fontFamily: 'CabinetGrotesk-Variable',
					fontSize: 7,
					fontWeight: '800',
					color: 'white'
				},
				splitLine: {
					lineStyle: {
						color: '#fafafa4d'
					}
				}
			}
		],
		series: [
			{
				type: 'radar',
				symbol: 'none',
				label: {
					show: true
				},
				emphasis: {
					disabled: true
				},
				lineStyle: {
					color: '#fafafa',
					width: 2.5,
					shadowBlur: 20,
					shadowColor: '#fafafa'
				},
				areaStyle: {
					color: '#fafafa73'
				},
				data: [
					{
						value: props.data.map(data => {
							return Number(
								Number(data.value).toFixed(2)
							)
						})
					}
				]
			}
		]
	}
})
</script>

<template>
	<chart :option="option"/>
</template>