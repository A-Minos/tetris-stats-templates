<script lang="ts">
import Rank, { ValidRank } from '@/shared/schemas/rank'
import BaseUser from '@/shared/schemas/user'
import { z } from 'zod'

const Data = z
	.object({
		user: BaseUser.extend({
			id: z.string(),
			country: z.string().nullable(),

			role: z.union([
				z.literal('anon'),
				z.literal('user'),
				z.literal('bot'),
				z.literal('halfmod'),
				z.literal('mod'),
				z.literal('admin'),
				z.literal('sysop'),
				z.literal('banned')
			]),

			banner: z.string().nullable(),

			bio: z.string().nullable(),

			friend_count: z.number().nullable(),
			supporter_tier: z.number(),

			verified: z.boolean(),
			bad_standing: z.boolean(),

			badges: z.array(
				z.object({
					id: z.string(),
					description: z.string(),
					group: z.string().nullable(),
					receive_at: z.string().nullable()
				})
			),

			xp: z.number(),

			playtime: z.string().nullable(),
			join_at: z.coerce.date().nullable()
		}),
		tetra_league: z
			.object({
				rank: Rank,
				highest_rank: ValidRank,

				tr: z.number(),

				glicko: z.number().nullable(),
				rd: z.number().nullable(),

				global_rank: z.number().nullable(),
				country_rank: z.number().nullable(),

				pps: z.number().nullable(),

				apm: z.number().nullable(),
				apl: z.number().nullable(),

				vs: z.number().nullable(),
				adpl: z.number().nullable(),

				statistic: z.object({
					total: z.number(),
					wins: z.number()
				}),

				decaying: z.boolean(),

				history: z
					.array(
						z.object({
							tr: z.number(),
							record_at: z.coerce.date()
						})
					)
					.nullable()
			})
			.nullable(),

		statistic: z
			.object({
				total: z.number().nullable(),
				wins: z.number().nullable()
			})
			.nullable(),

		sprint: z
			.object({
				time: z.string(),
				global_rank: z.number().nullable(),
				play_at: z.coerce.date()
			})
			.nullable(),

		blitz: z
			.object({
				score: z.number(),
				global_rank: z.number().nullable(),
				play_at: z.coerce.date()
			})
			.nullable(),

		zen: z
			.object({
				score: z.number(),
				level: z.number()
			})
			.nullable()
	})
	.strict()
	.readonly()

export type Data = z.infer<typeof Data>;
const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()))
</script>

<script lang="ts" setup>
import powered from '@/v2/components/common/footer.vue'
import layout from '@/v2/components/common/layout.vue'

import info_40l from '@/v2/pages/tetrio/user/info/_40l.vue'
import info_bs from '@/v2/pages/tetrio/user/info/_bad-standing.vue'
import info_badges from '@/v2/pages/tetrio/user/info/_badges.vue'
import info_banned from '@/v2/pages/tetrio/user/info/_banned.vue'
import info_bio from '@/v2/pages/tetrio/user/info/_bio.vue'
import info_blitz from '@/v2/pages/tetrio/user/info/_blitz.vue'
import info_detail from '@/v2/pages/tetrio/user/info/_detail.vue'
import info_header from '@/v2/pages/tetrio/user/info/_header.vue'
import info_tl_history_chart from '@/v2/pages/tetrio/user/info/_tetra-league-history-chart.vue'
import info_tl from '@/v2/pages/tetrio/user/info/_tetra-league.vue'
import info_xp from '@/v2/pages/tetrio/user/info/_xp.vue'
import info_zen from '@/v2/pages/tetrio/user/info/_zen.vue'

import { isNonNullish } from 'remeda'
</script>

<template>
	<layout content_class="max-w-320">
		<info_header
			:id="data.user.id"
			:banner="data.user.banner"
			:country="data.user.country"
			:friend_count="data.user.friend_count"
			:name="data.user.name"
			:supporter_tier="data.user.supporter_tier"
			:verified="data.user.verified"
		/>

		<template v-if="data.user.role === 'banned'">
			<info_banned/>
		</template>

		<template v-else>
			<template v-if="data.user.bad_standing">
				<info_bs/>
			</template>

			<template v-if="isNonNullish(data.user.bio)">
				<info_bio :content="data.user.bio"/>
			</template>

			<n-divider class="!my-0">多人游戏</n-divider>

			<template v-if="isNonNullish(data.user.badges)">
				<info_badges :badges="data.user.badges"/>
			</template>

			<n-flex vertical>
				<template v-if="isNonNullish(data.tetra_league)">
					<template v-if="isNonNullish(data.tetra_league.history)">
						<info_tl_history_chart :current_tr="data.tetra_league.tr" :data="data.tetra_league.history"/>
					</template>

					<info_tl
						:adpl="data.tetra_league.adpl"
						:apl="data.tetra_league.apl"
						:apm="data.tetra_league.apm"
						:country="data.user.country"
						:country_rank="data.tetra_league.country_rank"
						:decaying="data.tetra_league.decaying"
						:glicko="data.tetra_league.glicko"
						:global_rank="data.tetra_league.global_rank"
						:highest_rank="data.tetra_league.highest_rank"
						:pps="data.tetra_league.pps"
						:rank="data.tetra_league.rank"
						:rd="data.tetra_league.rd"
						:statistic="data.tetra_league.statistic"
						:tr="data.tetra_league.tr"
						:vs="data.tetra_league.vs"
					/>
				</template>

				<n-flex :wrap="false">
					<info_xp :value="data.user.xp"/>

					<template v-if="[data.user.playtime, data.statistic, data.user.join_at].some(isNonNullish)">
						<info_detail
							:join_at="data.user.join_at"
							:playtime="data.user.playtime"
							:statistic="data.statistic"
						/>
					</template>
				</n-flex>
			</n-flex>

			<template v-if="[data.sprint, data.blitz, data.zen].some(isNonNullish)">
				<n-divider class="!my-0">单人游戏</n-divider>
			</template>

			<n-flex :wrap="false" class="[&>*]:(h-full flex-1)">
				<template v-if="isNonNullish(data.sprint)">
					<info_40l
						:global_rank="data.sprint.global_rank"
						:play_at="data.sprint.play_at"
						:time="data.sprint.time"
					/>
				</template>

				<template v-if="isNonNullish(data.blitz)">
					<info_blitz
						:global_rank="data.blitz.global_rank"
						:play_at="data.blitz.play_at"
						:score="data.blitz.score"
					/>
				</template>
			</n-flex>

			<template v-if="isNonNullish(data.zen)">
				<info_zen :level="data.zen.level" :score="data.zen.score"/>
			</template>
		</template>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import "@/v2/styles/main";
</style>
