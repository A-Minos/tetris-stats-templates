<script lang="ts" setup>
import type { SprintData } from '@/v2/pages/tetrio/record/40l/index.vue'
import type Type from '@/v2/pages/tetrio/record/schemas/type'
import type { Record, User } from '@/v2/types/tetrio'
import { isNonNullish } from 'remeda'

const path = 'v2/tetrio/record/40l'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then((response) => {
			return response.json()
		})
		.then((result) => {
			return result.data.user as User
		})

	const records = await fetch(`/_proxy/tetrio/users/${user._id}/records`)
		.then((response) => {
			return response.json()
		})
		.then((result) => {
			return result.data as Record
		})

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		type: 'best' as Type,
		user: {
			id: user._id,
			name: user.username
		},
		time: (() => {
			const time = records.records['40l'].record.endcontext.finalTime / 1000

			const hours = Math.trunc(time / 60)
			const seconds = Math.trunc(time % 60)
			const milliseconds = Math.trunc((time % 1) * 1000)

			return `${hours}:${seconds}.${milliseconds}`
		})(),
		replay_id: records.records['40l'].record.replayid,
		rank: records.records['40l'].rank,
		personal_rank: 1,
		statistic: {
			pieces: records.records['40l'].record.endcontext.piecesplaced,
			pps: Number(
				(
					records.records['40l'].record.endcontext.piecesplaced /
					(records.records['40l'].record.endcontext.finalTime / 1000)
				).toFixed(2)
			),
			keys: records.records['40l'].record.endcontext.inputs,
			kpp: Number(
				(
					records.records['40l'].record.endcontext.inputs /
					records.records['40l'].record.endcontext.piecesplaced
				).toFixed(2)
			),
			kps: Number(
				(
					records.records['40l'].record.endcontext.inputs /
					(records.records['40l'].record.endcontext.finalTime / 1000)
				).toFixed(2)
			),
			lpm: Math.trunc(
				Number(
					(
						records.records['40l'].record.endcontext.piecesplaced /
						(records.records['40l'].record.endcontext.finalTime / 1000)
					).toFixed(2)
				) * 24
			),
			holds: isNonNullish(records.records['40l'].record.endcontext.holds)
				? records.records['40l'].record.endcontext.holds
				: null,
			score: records.records['40l'].record.endcontext.score,

			lines: records.records['40l'].record.endcontext.lines,
			tspins: {
				total: records.records['40l'].record.endcontext.clears.realtspins,
				single: records.records['40l'].record.endcontext.clears.tspinsingles,
				double: records.records['40l'].record.endcontext.clears.tspindoubles,
				triple: records.records['40l'].record.endcontext.clears.tspintriples,

				mini: {
					total: records.records['40l'].record.endcontext.clears.minitspins,
					single: records.records['40l'].record.endcontext.clears.minitspinsingles,
					double: records.records['40l'].record.endcontext.clears.minitspindoubles
				}
			},
			single: records.records['40l'].record.endcontext.clears.singles,
			double: records.records['40l'].record.endcontext.clears.doubles,
			triple: records.records['40l'].record.endcontext.clears.triples,
			quad: records.records['40l'].record.endcontext.clears.quads,
			all_clear: records.records['40l'].record.endcontext.clears.allclear,

			finesse: {
				faults: records.records['40l'].record.endcontext.finesse.faults,
				accuracy:
					Math.round(
						(records.records['40l'].record.endcontext.finesse.perfectpieces /
							records.records['40l'].record.endcontext.piecesplaced) *
						10000
					) / 100
			},

			max: {
				combo: records.records['40l'].record.endcontext.topcombo,
				btb: records.records['40l'].record.endcontext.topbtb
			}
		},
		play_at: records.records['40l'].record.ts
	} satisfies SprintData)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>
