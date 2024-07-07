<script lang="ts" setup>
import type { Data } from '@/v2/pages/tetrio/user/list/index.vue'
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
		users: await Promise.all(
			users.map(async user => {
				return {
					id: user._id,
					name: user.username,
					country: user.country ?? null,
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

						pps: user.league.pps ?? null,

						apm: user.league.apm ?? null,
						apl: isNonNullish(user.league.apm) && isNonNullish(user.league.pps) ? Number(
							(user.league.apm / user.league.pps / 24).toFixed(2)
						) : null,

						vs: user.league.vs ?? null,
						adpl: isNonNullish(user.league.vs) && isNonNullish(user.league.pps) ? Number(
							(user.league.vs / user.league.pps / 24 * 0.6).toFixed(2)
						) : null,

						decaying: user.league.decaying
					},

					xp: user.xp,
					join_at: user.ts ?? null
				}
			})
		)
	} satisfies Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>