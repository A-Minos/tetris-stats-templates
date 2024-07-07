<script lang="ts" setup>
import type { Data } from '@/v2/pages/tetrio/rank/index.vue'

const path = 'v2/tetrio/rank'

const test = async () => {
	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		items: {
			D: {
				require_tr: 1,
				trending: 1.1,
				average_data: {
					apm: 1,
					pps: 2,
					vs: 3,
					apl: 52,
					adpl: 53
				},
				players: 86
			},
			'D+': {
				require_tr: 2,
				trending: -1.2,
				average_data: {
					apm: 4,
					pps: 5,
					vs: 6,
					apl: 54,
					adpl: 55
				},
				players: 87
			},
			'C-': {
				require_tr: 3,
				trending: 1.3,
				average_data: {
					apm: 7,
					pps: 8,
					vs: 9,
					apl: 56,
					adpl: 57
				},
				players: 88
			},
			C: {
				require_tr: 4,
				trending: -1.4,
				average_data: {
					apm: 10,
					pps: 11,
					vs: 12,
					apl: 58,
					adpl: 59
				},
				players: 89
			},
			'C+': {
				require_tr: 5,
				trending: 1.5,
				average_data: {
					apm: 13,
					pps: 14,
					vs: 15,
					apl: 60,
					adpl: 61
				},
				players: 90
			},
			'B-': {
				require_tr: 6,
				trending: -1.6,
				average_data: {
					apm: 16,
					pps: 17,
					vs: 18,
					apl: 62,
					adpl: 63
				},
				players: 91
			},
			B: {
				require_tr: 7,
				trending: 1.7,
				average_data: {
					apm: 19,
					pps: 20,
					vs: 21,
					apl: 64,
					adpl: 65
				},
				players: 92
			},
			'B+': {
				require_tr: 8,
				trending: -1.8,
				average_data: {
					apm: 22,
					pps: 23,
					vs: 24,
					apl: 66,
					adpl: 67
				},
				players: 93
			},
			'A-': {
				require_tr: 9,
				trending: 1.9,
				average_data: {
					apm: 25,
					pps: 26,
					vs: 27,
					apl: 68,
					adpl: 69
				},
				players: 94
			},
			A: {
				require_tr: 10,
				trending: -1.10,
				average_data: {
					apm: 28,
					pps: 29,
					vs: 30,
					apl: 70,
					adpl: 71
				},
				players: 95
			},
			'A+': {
				require_tr: 11,
				trending: 1.11,
				average_data: {
					apm: 31,
					pps: 32,
					vs: 33,
					apl: 72,
					adpl: 73
				},
				players: 96
			},
			'S-': {
				require_tr: 12,
				trending: -1.12,
				average_data: {
					apm: 34,
					pps: 35,
					vs: 36,
					apl: 74,
					adpl: 75
				},
				players: 97
			},
			S: {
				require_tr: 13,
				trending: 1.13,
				average_data: {
					apm: 37,
					pps: 38,
					vs: 39,
					apl: 76,
					adpl: 77
				},
				players: 98
			},
			'S+': {
				require_tr: 14,
				trending: -1.14,
				average_data: {
					apm: 40,
					pps: 41,
					vs: 42,
					apl: 78,
					adpl: 79
				},
				players: 99
			},
			SS: {
				require_tr: 15,
				trending: 1.15,
				average_data: {
					apm: 43,
					pps: 44,
					vs: 45,
					apl: 80,
					adpl: 81
				},
				players: 100
			},
			U: {
				require_tr: 16,
				trending: -1.16,
				average_data: {
					apm: 46,
					pps: 47,
					vs: 48,
					apl: 82,
					adpl: 83
				},
				players: 101
			},
			X: {
				require_tr: 17,
				trending: 1.17,
				average_data: {
					apm: 49,
					pps: 50,
					vs: 51,
					apl: 84,
					adpl: 85
				},
				players: 102
			}
		},
		updated_at: new Date().toLocaleString('zh-CN')
	} satisfies Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>