<script lang="ts">
import Avatar from '@/shared/types/avatar'
import type { Badge } from '@/v2/types/tetrio'

const data: {
	readonly user: {
		readonly id: string
		readonly name: string
		readonly country: string | null

		readonly avatar: Avatar
		readonly banner: string | null

		readonly bio: string | null

		readonly friend_count: number
		readonly supporter_tier: number

		readonly verified: boolean
		readonly bad_standing: boolean

		readonly badges: Badge[]
		readonly xp: number

		readonly playtime: string | null
		readonly join_at: Date | null
	}

	readonly tetra_league: {
		readonly rank: string
		readonly highest_rank: string

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
	} | null

	readonly statistic: {
		readonly total: number | null
		readonly wins: number | null
	} | null

	readonly sprint: {
		readonly time: string
		readonly global_rank: number | null
		readonly play_at: Date
	} | null

	readonly blitz: {
		readonly score: number
		readonly global_rank: number | null
		readonly play_at: Date
	} | null

	readonly zen: {
		readonly score: number
		readonly level: number
	} | null
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)
</script>

<script lang="ts" setup>
import info_header from '@/v2/pages/tetrio/info/_header.vue'
import info_detail from '@/v2/pages/tetrio/info/_detail.vue'
import info_bs from '@/v2/pages/tetrio/info/_bad-standing.vue'
import info_bio from '@/v2/pages/tetrio/info/_bio.vue'
import info_badges from '@/v2/pages/tetrio/info/_badges.vue'
import info_xp from '@/v2/pages/tetrio/info/_xp.vue'
import info_tl from '@/v2/pages/tetrio/info/_tetra-league.vue'
import info_40l from '@/v2/pages/tetrio/info/_40l.vue'
import info_blitz from '@/v2/pages/tetrio/info/_blitz.vue'
import info_zen from '@/v2/pages/tetrio/info/_zen.vue'
import info_footer from '@/v2/pages/tetrio/info/_footer.vue'

import { darkTheme } from 'naive-ui'
import { isNonNullish } from 'remeda'
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content id="content" class="p-2 max-w-320">
				<n-flex vertical>
					<info_header :id="data.user.id" :avatar="data.user.avatar" :banner="data.user.banner"
								 :country="data.user.country" :friend_count="data.user.friend_count"
								 :name="data.user.name"
								 :supporter_tier="data.user.supporter_tier" :verified="data.user.verified"/>

					<template v-if="data.user.bad_standing">
						<info_bs/>
					</template>

					<!-- Bio -->

					<template v-if="isNonNullish(data.user.bio)">
						<info_bio :content="data.user.bio"/>
					</template>

					<n-divider class="!my-0">多人游戏</n-divider>

					<!-- 勋章 -->

					<template v-if="isNonNullish(data.user.badges)">
						<info_badges :badges="data.user.badges"/>
					</template>

					<n-flex :wrap="false" class="[&>*]:(h-full flex-1)">
						<n-flex class="h-full" vertical>
							<info_xp :value="data.user.xp"/>

							<template v-if="[data.user.playtime, data.statistic, data.user.join_at].some(isNonNullish)">
								<info_detail :join_at="data.user.join_at" :playtime="data.user.playtime"
											 :statistic="data.statistic"/>
							</template>
						</n-flex>

						<template v-if="isNonNullish(data.tetra_league)">
							<info_tl :adpl="data.tetra_league.adpl" :apl="data.tetra_league.apl"
									 :apm="data.tetra_league.apm" :country="data.user.country"
									 :country_rank="data.tetra_league.country_rank" :glicko="data.tetra_league.glicko"
									 :global_rank="data.tetra_league.global_rank"
									 :highest_rank="data.tetra_league.highest_rank" :pps="data.tetra_league.pps"
									 :rank="data.tetra_league.rank" :rd="data.tetra_league.rd"
									 :statistic="data.tetra_league.statistic" :tr="data.tetra_league.tr"
									 :vs="data.tetra_league.vs"/>
						</template>
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

					<info_footer/>
				</n-flex>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>