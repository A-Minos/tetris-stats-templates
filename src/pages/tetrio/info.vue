<script lang="ts">
import type { Avatar, TetraLeagueHistoryRecord } from '@/types/shared'

interface Data {
	readonly user: {
		readonly avatar: Avatar
		readonly name: string
		readonly bio: string
	}

	readonly ranking: {
		readonly rating: number
		readonly rd: number
	}

	readonly tetra_league: {
		readonly rank: string
		readonly tr: number
		readonly global_rank: number

		readonly pps: number
		readonly lpm: number

		readonly apm: number
		readonly apl: number

		readonly vs: number
		readonly adpm: number
		readonly adpl: number
	}

	readonly tetra_league_history: {
		readonly data: TetraLeagueHistoryRecord[]
		readonly split_interval: number
		readonly min_tr: number
		readonly max_tr: number
		readonly offset: number
	}

	readonly radar: {
		readonly app: number
		readonly dsps: number
		readonly dspp: number
		readonly ci: number
		readonly ge: number
	}

	readonly sprint: string
	readonly blitz: string
}
</script>

<script lang="ts" setup>
import logo from '@/assets/images/logo/tetrio.svg'
import Info40l from '@/components/info-40l.vue'
import InfoAdpm from '@/components/info-adpm.vue'
import InfoApm from '@/components/info-apm.vue'
import InfoBlitz from '@/components/info-blitz.vue'
import InfoLpm from '@/components/info-lpm.vue'
import InfoRadarChart from '@/components/info-radar-chart.vue'
import InfoTrChart from '@/components/info-tr-chart.vue'
import { asyncComputed } from '@vueuse/core'
import { isEmpty, isNonNullish } from 'remeda'
import { inject } from 'vue'
import { THEME_KEY } from 'vue-echarts'

const data: Data = JSON.parse(
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()
)

inject(THEME_KEY, 'dark')

const rankImage = asyncComputed(async () => {
	return await import(`@/assets/images/rank/${data.tetra_league.rank}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<div class="w-fit p-6.25 bg-[#f1f1f1] font-template">
		<span class="text-8.75 fw-black">Account & Rankings</span>

		<div class="mt-2.5">
			<div class="flex flex-col gap-6.25">
				<div class="flex gap-6.25">
					<div class="w-68.75 max-h-68.75 rounded-7.5 bg-white">
						<div class="flex flex-col items-center p-6.25 gap-2.5">
							<img :src="data.user.avatar" alt="用户头像" class="w-31.25 h-31.25 rounded-full"/>

							<div class="break-all">
								<span class="text-6.25 font-extrabold">{{ data.user.name }}</span>
							</div>

							<template v-if="!isEmpty(data.user.bio)">
								<div class="break-all line-clamp-3">
									<span class="text-4.5">
										{{ data.user.bio }}
									</span>
								</div>
							</template>
						</div>
					</div>

					<div class="w-68.75 max-h-68.75 rounded-7.5 bg-white">
						<div class="flex flex-col p-6.25">
							<img :src="logo" alt="Logo" class="w-15 h-15 rounded-2.5"/>
							<span class="text-7.5 fw-extrabold">TETR.IO</span>

							<div class="w-full border-b-(1 solid #bababa) my-2.5"/>

							<span class="text-6.25 fw-extrabold">Ranking</span>

							<span class="text-12.5 leading-15">{{ data.ranking.rating }}</span>
							<span class="text-7.5 leading-9 fw-light -mt-4">±{{ data.ranking.rd }}</span>
						</div>
					</div>
				</div>

				<div class="rounded-7.5 overflow-hidden">
					<info-tr-chart :current_tr="data.tetra_league.tr" :data="data.tetra_league_history.data"
								   :max_tr="data.tetra_league_history.max_tr" :min_tr="data.tetra_league_history.min_tr"
								   :offset="data.tetra_league_history.offset"
								   :split_interval="data.tetra_league_history.split_interval">
						<div class="flex flex-col">
							<template v-if="isNonNullish(rankImage)">
								<img :alt="data.tetra_league.rank" :src="rankImage" class="w-12.5 h-12.5"/>
							</template>

							<div class="flex items-center">
								<span class="text-11.25 fw-extrabold text-white">{{ data.tetra_league.tr }}</span>
								<span class="text-7.5 text-[#fafafa]">&nbsp;(#{{
										data.tetra_league.global_rank
									}})</span>
							</div>
						</div>
					</info-tr-chart>
				</div>

				<span class="text-8.75 fw-black mt-4.5">Multiplayer Stats</span>

				<div class="flex gap-6.25">
					<div class="flex flex-col gap-6.25">
						<info-lpm>
							{{ Number(data.tetra_league.lpm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">{{
										Number(data.tetra_league.pps).toFixed(2)
									}} pps</span>
							</template>
						</info-lpm>

						<info-apm>
							{{ Number(data.tetra_league.apm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">x{{ Number(data.tetra_league.apl).toFixed(2) }}</span>
							</template>
						</info-apm>

						<info-adpm>
							{{ Number(data.tetra_league.adpm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">{{ Number(data.tetra_league.vs).toFixed(2) }} vs</span>

								<br/>

								<span class="whitespace-nowrap">x{{ Number(data.tetra_league.adpl).toFixed(2) }}</span>
							</template>
						</info-adpm>
					</div>

					<div
						class="w-68.75 h-68.75 bg-[linear-gradient(222.34deg,#525252_11.97%,#1d1916_89.73%),linear-gradient(222.34deg,#4f9dff_11.97%,#2563ea_89.73%)] rounded-7.5">
						<info-radar-chart :app="data.radar.app" :ci="data.radar.ci" :dspp="data.radar.dspp"
										  :dsps="data.radar.dsps" :ge="data.radar.ge" :pps="data.tetra_league.pps"/>
					</div>
				</div>

				<span class="text-8.75 fw-black mt-4.5">Singleplayer Stats</span>

				<div class="flex gap-6.25">
					<info-40l>{{ data.sprint }}</info-40l>
					<info-blitz>{{ data.blitz }}</info-blitz>
				</div>

				<div class="text-7.5 text-center fw-750">
					<span>Powered by</span>

					<br/>

					<span>Nonebot2 x nonebot-plugin-tetris-stats</span>
				</div>
			</div>
		</div>
	</div>
</template>