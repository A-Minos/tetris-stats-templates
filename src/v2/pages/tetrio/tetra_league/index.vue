<script lang="ts">
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly replay_id: string

	readonly games: {
		readonly user: {
			readonly id: string
			readonly name: string
		}

		readonly points: number

		readonly average_data: {
			readonly pps: number
			readonly apm: number
			readonly apl: number
			readonly vs: number
			readonly adpl: number
		}

		readonly data: {
			readonly pps: number
			readonly apm: number
			readonly apl: number
			readonly vs: number
			readonly adpl: number
		}[]

		readonly handling: {
			readonly arr: number
			readonly das: number
			readonly sdf: number
		}
	}[]

	readonly play_at: BackendTime
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import tl_player from '@/v2/pages/tetrio/tetra_league/_player.vue'
import tl_replay_id from '@/v2/pages/tetrio/tetra_league/_replay_id.vue'
import tl_round from '@/v2/pages/tetrio/tetra_league/_round.vue'
import tl_handling from '@/v2/pages/tetrio/tetra_league/_handling.vue'

const winner_user_id = computed(() => {
	return data.games.sort(game => {
		return game.points
	})[0].user.id
})
</script>

<template>
	<layout content_class="max-w-320">
		<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
			<n-grid-item v-for="game in data.games">
				<tl_player :average_data="game.average_data" :is_winner="winner_user_id === game.user.id"
						   :points="game.points"
						   :user="game.user"/>
			</n-grid-item>
		</n-grid>

		<tl_replay_id :replay_id="data.replay_id"/>

		<n-flex class="[&_*]:!text-4" vertical>
			<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
				<n-grid-item v-for="game in data.games">
					<n-grid :cols="1" :x-gap="10" :y-gap="10">
						<n-grid-item v-for="data in game.data">
							<tl_round :adpl="data.adpl" :apl="data.apl" :apm="data.apm" :pps="data.pps" :vs="data.vs"/>
						</n-grid-item>
					</n-grid>
				</n-grid-item>
			</n-grid>

			<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
				<n-grid-item v-for="game in data.games">
					<tl_handling :arr="game.handling.arr" :das="game.handling.das" :sdf="game.handling.sdf"/>
				</n-grid-item>
			</n-grid>
		</n-flex>

		<powered/>
	</layout>
</template>