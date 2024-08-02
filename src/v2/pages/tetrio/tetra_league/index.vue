<script lang="ts">
import { z } from 'zod'

const SpecialData = z.object({
	pps: z.number(),
	apm: z.number(),
	apl: z.number(),
	vs: z.number(),
	adpl: z.number()
})

const Data = z
	.object({
		replay_id: z.string(),
		games: z.array(
			z.object({
				user: z.object({
					id: z.string(),
					name: z.string()
				}),
				points: z.number(),
				average_data: SpecialData,
				data: z.array(SpecialData),
				handling: z.object({
					arr: z.number(),
					das: z.number(),
					sdf: z.number()
				})
			})
		),
		play_at: z.coerce.date()
	})
	.strict()
	.readonly()

export type Data = z.infer<typeof Data>;
const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()))
</script>

<script lang="ts" setup>
import powered from '@/v2/components/common/footer.vue'
import layout from '@/v2/components/common/layout.vue'

import tl_handling from '@/v2/pages/tetrio/tetra_league/_handling.vue'
import tl_player from '@/v2/pages/tetrio/tetra_league/_player.vue'
import tl_replay_id from '@/v2/pages/tetrio/tetra_league/_replay_id.vue'
import tl_round from '@/v2/pages/tetrio/tetra_league/_round.vue'

const winner_user_id = computed(() => {
	return data.games.sort((game) => {
		return game.points
	})[0].user.id
})
</script>

<template>
	<layout content_class="max-w-320">
		<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
			<n-grid-item v-for="game in data.games">
				<tl_player
					:average_data="game.average_data"
					:is_winner="winner_user_id === game.user.id"
					:points="game.points"
					:user="game.user"
				/>
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
