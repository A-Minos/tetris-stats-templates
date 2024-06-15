<script lang="ts" setup>
import type { Record, User } from '@/v2/types/tetrio'
import { md5 } from 'hash-wasm'
import { isNonNullish } from 'remeda'

const path = 'v2/tetrio/record/blitz'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data.user as User
		})

	const records = await fetch(`/_proxy/tetrio/users/${user._id}/records`)
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data as Record
		})

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: user._id,
			name: user.username,
			avatar: isNonNullish(user.avatar_revision) && user.avatar_revision > 0 ? `https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}` : {
				type: 'identicon',
				hash: await md5(user._id)
			},
			tetra_league: user.league.rating !== -1 ? {
				rank: user.league.rank,
				tr: Number(
					user.league.rating.toFixed(2)
				)
			} : null
		},
		time: (() => {
			const time = records.records['blitz'].record.endcontext.finalTime / 1000

			const hours = Math.trunc(time / 60)
			const seconds = Math.trunc(time % 60)
			const milliseconds = Math.trunc((time % 1) * 1000)

			return `${hours}:${seconds}.${milliseconds}`
		})(),
		rank: records.records['blitz'].rank,
		statistic: {
			pieces: records.records['blitz'].record.endcontext.piecesplaced,
			pps: Number(
				(
					records.records['blitz'].record.endcontext.piecesplaced / (records.records['blitz'].record.endcontext.finalTime / 1000)
				).toFixed(2)
			),
			keys: records.records['blitz'].record.endcontext.inputs,
			kpp: Number(
				(records.records['blitz'].record.endcontext.inputs / records.records['blitz'].record.endcontext.piecesplaced).toFixed(2)
			),
			kps: Number(
				(
					records.records['blitz'].record.endcontext.inputs / (records.records['blitz'].record.endcontext.finalTime / 1000)
				).toFixed(2)
			),
			lpm: Math.trunc(
				Number(
					(
						records.records['blitz'].record.endcontext.piecesplaced / (records.records['blitz'].record.endcontext.finalTime / 1000)
					).toFixed(2)
				) * 24
			),
			holds: isNonNullish(records.records['blitz'].record.endcontext.holds) ? records.records['blitz'].record.endcontext.holds : null,
			score: records.records['blitz'].record.endcontext.score,

			lines: records.records['blitz'].record.endcontext.lines,
			tspins: {
				total: records.records['blitz'].record.endcontext.clears.realtspins,
				single: records.records['blitz'].record.endcontext.clears.tspinsingles,
				double: records.records['blitz'].record.endcontext.clears.tspindoubles,
				triple: records.records['blitz'].record.endcontext.clears.tspintriples,

				mini: {
					total: records.records['blitz'].record.endcontext.clears.minitspins,
					single: records.records['blitz'].record.endcontext.clears.minitspinsingles,
					double: records.records['blitz'].record.endcontext.clears.minitspindoubles
				}
			},
			single: records.records['blitz'].record.endcontext.clears.singles,
			double: records.records['blitz'].record.endcontext.clears.doubles,
			triple: records.records['blitz'].record.endcontext.clears.triples,
			quad: records.records['blitz'].record.endcontext.clears.quads,
			all_clear: records.records['blitz'].record.endcontext.clears.allclear,

			finesse: {
				faults: records.records['blitz'].record.endcontext.finesse.faults,
				accuracy: Math.round(records.records['blitz'].record.endcontext.finesse.perfectpieces / records.records['blitz'].record.endcontext.piecesplaced * 10000) / 100
			},

			max: {
				combo: records.records['blitz'].record.endcontext.topcombo,
				btb: records.records['blitz'].record.endcontext.topbtb
			},

			level: records.records['blitz'].record.endcontext.level,
			spp: Number(
				(records.records['blitz'].record.endcontext.score / records.records['blitz'].record.endcontext.piecesplaced).toFixed(2)
			)
		},
		play_at: records.records['blitz'].record.ts
	})

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>