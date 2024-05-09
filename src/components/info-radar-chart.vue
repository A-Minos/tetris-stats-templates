<script lang="ts" setup>
import type { RadarSeriesOption } from 'echarts/charts'
import { RadarChart } from 'echarts/charts'
import type { ComposeOption } from 'echarts/core'
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

use([RadarChart, SVGRenderer])

const props = defineProps<{
	readonly pps: number
	readonly app: number
	readonly dsps: number
	readonly dspp: number
	readonly ci: number
	readonly ge: number
}>()

const option: ComposeOption<RadarSeriesOption> = {
	animation: false,
	radar: [
		{
			indicator: [
				{ name: 'PPS' },
				{ name: 'APP', nameRotate: 60 },
				{ name: 'DSPS', nameRotate: -60 },
				{ name: 'DSPP' },
				{ name: 'CI', nameRotate: 60 },
				{ name: 'GE', nameRotate: -60 }
			],
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
					value: [props.pps, props.app, props.dsps, props.dspp, props.ci, props.ge].map(value => {
						return Number(
							Number(value).toFixed(2)
						)
					})
				}
			]
		}
	]
}
</script>

<template>
	<v-chart :option="option"/>
</template>