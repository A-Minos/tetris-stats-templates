<script lang="ts" setup>
import type { Data } from '@/v2/pages/tetrio/tetra_league/index.vue'
import type { TetraLeagueRecord, User } from '@/v2/types/tetrio'
import { first, isNullish, map, sample, sum } from 'remeda'

const path = 'v2/tetrio/tetra_league'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data.user as User
		})

	const records = await fetch(`/_proxy/tetrio/streams/league_userrecent_${user._id}`)
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data.records as TetraLeagueRecord[]
		})

	const record = first(
		sample(records, 1)
	)

	if (isNullish(record)) {
		alert('记录不存在')
		return
	}

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		replay_id: record.replayid,
		games: map(record.endcontext, game => {
			const average_apm = game.points.secondary
			const average_pps = game.points.tertiary
			const average_vs = game.points.extra.vs

			return {
				user: {
					id: game.id,
					name: game.username
				},

				points: game.points.primary,

				average_data: {
					pps: Number(
						Number(average_pps).toFixed(2)
					),
					apm: Number(
						Number(average_apm).toFixed(2)
					),
					apl: Number(
						(average_apm / average_pps / 24).toFixed(2)
					),
					vs: Number(
						Number(average_vs).toFixed(2)
					),
					adpl: Number(
						(average_vs / average_pps / 24 * 0.6).toFixed(2)
					)
				},

				data: Array.from(
					new Array(
						sum(
							map(record.endcontext, game => {
								return game.wins
							})
						)
					).keys()
				).map(index => {
					const apm = game.points.secondaryAvgTracking[index]
					const pps = game.points.tertiaryAvgTracking[index]
					const vs = game.points.extraAvgTracking.aggregatestats___vsscore[index]

					return {
						pps: Number(
							Number(pps).toFixed(2)
						),
						apm: Number(
							Number(apm).toFixed(2)
						),
						apl: Number(
							(apm / pps / 24).toFixed(2)
						),
						vs: Number(
							Number(vs).toFixed(2)
						),
						adpl: Number(
							(vs / pps / 24 * 0.6).toFixed(2)
						)
					}
				}),

				handling: {
					arr: game.handling.arr,
					das: game.handling.das,
					sdf: game.handling.sdf
				}
			}
		}),
		play_at: record.ts
	} satisfies Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>