<script lang="ts" setup>
import type { Data } from '@/v2/pages/tetrio/rank/detail/index.vue'

const path = 'v2/tetrio/rank/detail'

const test = async () => {
	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		name: 'x',
		trending: 1.01,
		require_tr: 1,
		players: 2,

		minimum_data: {
			apm: 3,
			pps: 4,
			lpm: 21,
			vs: 5,
			adpm: 18,
			apl: 6,
			adpl: 7,
			apm_holder: 'p1',
			pps_holder: 'p2',
			vs_holder: 'p3'
		},
		average_data: {
			apm: 8,
			pps: 9,
			lpm: 22,
			vs: 10,
			adpm: 19,
			apl: 11,
			adpl: 12,
			apm_holder: 'p4',
			pps_holder: 'p5',
			vs_holder: 'p6'
		},
		maximum_data: {
			apm: 13,
			pps: 14,
			lpm: 23,
			vs: 15,
			adpm: 20,
			apl: 16,
			adpl: 17,
			apm_holder: 'p7',
			pps_holder: 'p8',
			vs_holder: 'p9'
		},

		updated_at: new Date()
	} satisfies Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>
