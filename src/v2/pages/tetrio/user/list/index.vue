<script lang="ts">
import { z } from 'zod'

const Data = z
	.object({
		show_index: z.boolean(),
		users: z.array(
			z.object({
				id: z.string(),
				name: z.string(),
				country: z.string().nullable(),
				verified: z.boolean(),

				tetra_league: z.object({
					rank: Rank,
					tr: z.number(),

					glicko: z.number().nullable(),
					rd: z.number().nullable(),
					decaying: z.boolean(),
					pps: z.number().nullable(),
					apm: z.number().nullable(),
					apl: z.number().nullable(),
					vs: z.number().nullable(),
					adpl: z.number().nullable()
				}),
				xp: z.number(),
				join_at: z.coerce.date().nullable()
			})
		)
	})
	.strict()
	.readonly()

export type Data = z.infer<typeof Data>;

const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()))
</script>

<script lang="ts" setup>
import Rank from '@/shared/schemas/rank'
import powered from '@/v2/components/common/footer.vue'
import layout from '@/v2/components/common/layout.vue'

import list_statistic from '@/v2/pages/tetrio/user/list/_statistic.vue'
import list_tl from '@/v2/pages/tetrio/user/list/_tetra-league.vue'
import list_user from '@/v2/pages/tetrio/user/list/_user.vue'

import { isNullish } from 'remeda'

const checkDecaying = (user: Data['users'][number]) => {
	if (isNullish(user.tetra_league.rd)) {
		return false
	}

	return user.tetra_league.decaying && user.tetra_league.rd >= 98
}
</script>

<template>
	<layout content_class="max-w-320">
		<template v-for="(user, index) in data.users">
			<n-card :class="{ 'opacity-50': checkDecaying(user) }" size="small">
				<n-flex justify="space-between">
					<list_user
						:id="user.id"
						:country="user.country"
						:index="data.show_index ? index + 1 : null"
						:name="user.name"
						:verified="user.verified"
						:xp="user.xp"
					/>

					<list_statistic
						:adpl="user.tetra_league.adpl"
						:apl="user.tetra_league.apl"
						:apm="user.tetra_league.apm"
						:pps="user.tetra_league.pps"
						:vs="user.tetra_league.vs"
					/>

					<list_tl
						:decaying="user.tetra_league.decaying"
						:glicko="user.tetra_league.glicko"
						:rank="user.tetra_league.rank"
						:rd="user.tetra_league.rd"
						:tr="user.tetra_league.tr"
					/>
				</n-flex>
			</n-card>
		</template>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import "@/v2/styles/main";
</style>
