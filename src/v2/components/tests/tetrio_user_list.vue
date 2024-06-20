<script lang="ts" setup>
import type { User } from '@/v2/types/tetrio'
import { isNonNullish } from 'remeda'

const path = 'v2/tetrio/user/list'

const test = async () => {
	const users = await fetch('/_proxy/tetrio/users/lists/league?country=CN')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data.users as User[]
		})

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		show_index: true,
		users: users.map(user => {
			return {
				id: user._id,
				name: user.username,
				country: user.country,
				verified: user.verified,

				tetra_league: {
					rank: user.league.rank,
					tr: Number(
						Number(user.league.rating).toFixed(2)
					),

					glicko: isNonNullish(user.league.glicko) ? Number(
						user.league.glicko.toFixed(2)
					) : null,
					rd: isNonNullish(user.league.rd) ? Number(
						user.league.rd.toFixed(2)
					) : null,

					pps: user.league.pps,

					apm: user.league.apm,
					apl: isNonNullish(user.league.apm) && isNonNullish(user.league.pps) ? Number(
						(user.league.apm / user.league.pps / 24).toFixed(2)
					) : null,

					vs: user.league.vs,
					adpl: isNonNullish(user.league.vs) && isNonNullish(user.league.pps) ? Number(
						(user.league.vs / user.league.pps / 24 * 0.6).toFixed(2)
					) : null,

					decaying: user.league.decaying
				},

				xp: user.xp,
				join_at: user.ts
			}
		})
	})

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>