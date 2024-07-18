<script lang="ts" setup>
import type { Data } from '@/v1/pages/tetrio/rank.vue'

const path = 'v1/tetrio/rank'

const test = () => {
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify({
		items: {
			D: {
				require_tr: 1,
				trending: 1.1,
				players: 86
			},
			'D+': {
				require_tr: 2,
				trending: -1.2,
				players: 87
			},
			'C-': {
				require_tr: 3,
				trending: 1.3,
				players: 88
			},
			C: {
				require_tr: 4,
				trending: -1.4,
				players: 89
			},
			'C+': {
				require_tr: 5,
				trending: 1.5,
				players: 90
			},
			'B-': {
				require_tr: 6,
				trending: -1.6,
				players: 91
			},
			B: {
				require_tr: 7,
				trending: 1.7,
				players: 92
			},
			'B+': {
				require_tr: 8,
				trending: -1.8,
				players: 93
			},
			'A-': {
				require_tr: 9,
				trending: 1.9,
				players: 94
			},
			A: {
				require_tr: 10,
				trending: -1.10,
				players: 95
			},
			'A+': {
				require_tr: 11,
				trending: 1.11,
				players: 96
			},
			'S-': {
				require_tr: 12,
				trending: -1.12,
				players: 97
			},
			S: {
				require_tr: 13,
				trending: 1.13,
				players: 98
			},
			'S+': {
				require_tr: 14,
				trending: -1.14,
				players: 99
			},
			SS: {
				require_tr: 15,
				trending: 1.15,
				players: 100
			},
			U: {
				require_tr: 16,
				trending: -1.16,
				players: 101
			},
			X: {
				require_tr: 17,
				trending: 1.17,
				players: 102
			}
		},
		updated_at: +new Date()
	} satisfies Data)

	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = path
}
</script>

<template>
	<button @click="test">测试 {{ path }}</button>
</template>