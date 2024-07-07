<script lang="ts">
import type { TetraLeagueHistory } from '@/v2/types/data'
import type { User } from '@/v2/types/tetrio'
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly user: {
		readonly id: string
		readonly name: string
		readonly country: string | null

		readonly role: User['role']

		readonly banner: string | null

		readonly bio: string | null

		readonly friend_count: number | null
		readonly supporter_tier: number

		readonly verified: boolean
		readonly bad_standing: boolean

		readonly badges: {
			readonly id: string
			readonly description: string
			readonly group: string | null
			readonly receive_at: BackendTime | null
		}[]

		readonly xp: number

		readonly playtime: string | null
		readonly join_at: BackendTime | null
	}

	readonly tetra_league: {
		readonly rank: User['league']['rank']
		readonly highest_rank: User['league']['rank']

		readonly tr: number

		readonly glicko: number
		readonly rd: number

		readonly global_rank: number | null
		readonly country_rank: number | null

		readonly pps: number

		readonly apm: number
		readonly apl: number

		readonly vs: number | null
		readonly adpl: number | null

		readonly statistic: {
			readonly total: number
			readonly wins: number
		}

		readonly decaying: boolean
		readonly history: TetraLeagueHistory[] | null
	} | null

	readonly statistic: {
		readonly total: number | null
		readonly wins: number | null
	} | null

	readonly sprint: {
		readonly time: string
		readonly global_rank: number | null
		readonly play_at: string
	} | null

	readonly blitz: {
		readonly score: number
		readonly global_rank: number | null
		readonly play_at: string
	} | null

	readonly zen: {
		readonly score: number
		readonly level: number
	} | null
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import info_header from '@/v2/pages/tetrio/user/info/_header.vue'
import info_banned from '@/v2/pages/tetrio/user/info/_banned.vue'
import info_detail from '@/v2/pages/tetrio/user/info/_detail.vue'
import info_bs from '@/v2/pages/tetrio/user/info/_bad-standing.vue'
import info_bio from '@/v2/pages/tetrio/user/info/_bio.vue'
import info_badges from '@/v2/pages/tetrio/user/info/_badges.vue'
import info_xp from '@/v2/pages/tetrio/user/info/_xp.vue'
import info_tl from '@/v2/pages/tetrio/user/info/_tetra-league.vue'
import info_tl_history_chart from '@/v2/pages/tetrio/user/info/_tetra-league-history-chart.vue'
import info_40l from '@/v2/pages/tetrio/user/info/_40l.vue'
import info_blitz from '@/v2/pages/tetrio/user/info/_blitz.vue'
import info_zen from '@/v2/pages/tetrio/user/info/_zen.vue'

import { isNonNullish } from 'remeda'
</script>

<template>
	<layout content_class="max-w-320">
		<info_header :id="data.user.id" :banner="data.user.banner"
					 :country="data.user.country" :friend_count="data.user.friend_count"
					 :name="data.user.name"
					 :supporter_tier="data.user.supporter_tier" :verified="data.user.verified"/>

		<template v-if="(data.user.role === 'banned')">
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

					<info_tl :adpl="data.tetra_league.adpl" :apl="data.tetra_league.apl"
							 :apm="data.tetra_league.apm" :country="data.user.country"
							 :country_rank="data.tetra_league.country_rank"
							 :decaying="data.tetra_league.decaying" :glicko="data.tetra_league.glicko"
							 :global_rank="data.tetra_league.global_rank"
							 :highest_rank="data.tetra_league.highest_rank" :pps="data.tetra_league.pps"
							 :rank="data.tetra_league.rank" :rd="data.tetra_league.rd"
							 :statistic="data.tetra_league.statistic" :tr="data.tetra_league.tr"
							 :vs="data.tetra_league.vs"/>
				</template>

				<n-flex :wrap="false">
					<info_xp :value="data.user.xp"/>

					<template v-if="[data.user.playtime, data.statistic, data.user.join_at].some(isNonNullish)">
						<info_detail :join_at="data.user.join_at" :playtime="data.user.playtime"
									 :statistic="data.statistic"/>
					</template>
				</n-flex>
			</n-flex>

			<template v-if="[data.sprint, data.blitz, data.zen].some(isNonNullish)">
				<n-divider class="!my-0">单人游戏</n-divider>
			</template>

			<n-flex :wrap="false" class="[&>*]:(h-full flex-1)">
				<template v-if="isNonNullish(data.sprint)">
					<info_40l :global_rank="data.sprint.global_rank" :play_at="data.sprint.play_at"
							  :time="data.sprint.time"/>
				</template>

				<template v-if="isNonNullish(data.blitz)">
					<info_blitz :global_rank="data.blitz.global_rank" :play_at="data.blitz.play_at"
								:score="data.blitz.score"/>
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
@import '@/v2/styles/main';
</style>