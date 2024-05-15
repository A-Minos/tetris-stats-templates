<script lang="ts">
import type { Avatar as AvatarType, TetraLeagueHistoryRecord } from '@/types/shared'

export interface Data {
	readonly user: {
		readonly avatar: AvatarType
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
import InfoLpm from '@/components/info/lpm.vue'
import logo from '@/assets/images/logo/tetrio.svg'
import Avatar from '@/components/avatar.vue'
import Info40l from '@/components/info/40l.vue'
import InfoAdpm from '@/components/info/adpm.vue'
import InfoApm from '@/components/info/apm.vue'
import InfoBlitz from '@/components/info/blitz.vue'
import InfoRadarChart from '@/components/info/radar-chart.vue'
import InfoTrChart from '@/components/info/tr-chart.vue'
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

const unescape = (content: string) => {
	const element = document.createElement('div')
	element.innerHTML = content
	return element.textContent
}

const radar_chart_data = [
	{
		label: 'APP',
		value: data.radar.app
	},
	{
		label: 'CI',
		value: data.radar.ci
	},
	{
		label: 'DSPP',
		value: data.radar.dspp
	},
	{
		label: 'DSPS',
		value: data.radar.dsps
	},
	{
		label: 'GE',
		value: data.radar.ge
	},
	{
		label: 'PPS',
		value: data.tetra_league.pps
	}
]
</script>

<template>
	<div class="tetrio-info">
		<span class="tetrio-info__title">Account & Rankings</span>

		<div class="tetrio-info__container">
			<div class="tetrio-info__col">
				<div class="tetrio-info__row">
					<div class="tetrio-info__user">
						<div class="tetrio-info__user__container">
							<Avatar :avatar="data.user.avatar" alt="用户头像" class="tetrio-info__user__avatar"/>

							<div class="tetrio-info__user__name__container">
								<span class="tetrio-info__user__name__body">{{ data.user.name }}</span>
							</div>

							<div v-if="!isEmpty(data.user.bio)" class="tetrio-info__user__bio__container">
								<span class="tetrio-info__user__bio__body">{{ unescape(data.user.bio) }}</span>
							</div>
						</div>
					</div>

					<div class="tetrio-info__game-ranking">
						<div class="tetrio-info__game-ranking__container">
							<img :src="logo" alt="Logo" class="tetrio-info__game-ranking__game-logo"/>
							<span class="tetrio-info__game-ranking__game-name">TETR.IO</span>

							<div class="tetrio-info__game-ranking__divider"/>

							<span class="tetrio-info__game-ranking__ranking-title">Ranking</span>

							<span class="tetrio-info__game-ranking__ranking-rating">{{ data.ranking.rating }}</span>
							<span class="tetrio-info__game-ranking__ranking-rd">±{{ data.ranking.rd }}</span>
						</div>
					</div>
				</div>

				<div class="tetrio-info__tr-chart">
					<info-tr-chart :data="data.tetra_league_history.data" :max_tr="data.tetra_league_history.max_tr"
								   :min_tr="data.tetra_league_history.min_tr" :offset="data.tetra_league_history.offset"
								   :split_interval="data.tetra_league_history.split_interval">
						<div class="flex flex-col">
							<template v-if="isNonNullish(rankImage)">
								<img :alt="data.tetra_league.rank" :src="rankImage" class="w-12.5 h-12.5"/>
							</template>

							<div class="tetrio-info__tr-chart__tr-rank">
								<span class="tetrio-info__tr-chart__tr-rank__tr">
									{{ data.tetra_league.tr }}
								</span>

								<span class="tetrio-info__tr-chart__tr-rank__rank">
									(#{{ data.tetra_league.global_rank }})
								</span>
							</div>
						</div>
					</info-tr-chart>
				</div>

				<span class="tetrio-info__multiplayer-stats-title">Multiplayer Stats</span>

				<div class="tetrio-info__row">
					<div class="tetrio-info__col">
						<div class="tetrio-info__card">
							<info-lpm>
								{{ Number(data.tetra_league.lpm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										{{ Number(data.tetra_league.pps).toFixed(2) }} pps
									</span>
								</template>
							</info-lpm>
						</div>

						<div class="tetrio-info__card">
							<info-apm>
								{{ Number(data.tetra_league.apm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										x{{ Number(data.tetra_league.apl).toFixed(2) }}
									</span>
								</template>
							</info-apm>
						</div>

						<div class="tetrio-info__card">
							<info-adpm>
								{{ Number(data.tetra_league.adpm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										{{ Number(data.tetra_league.vs).toFixed(2) }} vs
									</span>

									<br/>

									<span class="whitespace-nowrap">
										x{{ Number(data.tetra_league.adpl).toFixed(2) }}
									</span>
								</template>
							</info-adpm>
						</div>
					</div>

					<div class="tetrio-info__radar-chart">
						<info-radar-chart :data="radar_chart_data"/>
					</div>
				</div>

				<span class="tetrio-info__singleplayer-stats-title">Singleplayer Stats</span>

				<div class="tetrio-info__row">
					<div class="tetrio-info__card">
						<info-40l>{{ data.sprint }}</info-40l>
					</div>

					<div class="tetrio-info__card">
						<info-blitz>{{ data.blitz }}</info-blitz>
					</div>
				</div>

				<div class="tetrio-info__footer">
					<div class="tetrio-info__footer__powered-by">
						<span class="tetrio-info__footer__powered-by__title">Powered by</span>
						<br/>
						<span
							class="tetrio-info__footer__powered-by__content">NoneBot2 x nonebot-plugin-tetris-stats</span>
					</div>

					<div class="tetrio-info__footer__designer">
						<span class="tetrio-info__footer__designer__title">Graphic Design by</span>

						<span>C</span>
						<span class="tetrio-info__footer__designer__sub">29</span>
						<span>H</span>
						<span class="tetrio-info__footer__designer__sub">25</span>
						<span>N</span>
						<span class="tetrio-info__footer__designer__sub">3</span>
						<span>O</span>
						<span class="tetrio-info__footer__designer__sub">5</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/main';

.tetrio-info {
	@extend .font-template;
	@apply w-fit p-6.25 bg-[#f1f1f1];

	&__title {
		@apply text-8.75 fw-black;
	}

	&__container {
		@apply mt-2.5;
	}

	&__row {
		@apply flex gap-6.25;
	}

	&__col {
		@apply flex flex-col gap-6.25;
	}

	&__box {
		@apply w-68.75 max-h-68.75 rounded-7.5 bg-[#fafafa];
		@apply drop-shadow-[0_0.5625rem_1.5625rem_#00000026];
	}

	&__user {
		@extend .tetrio-info__box;
		@apply py-6.25;

		&__container {
			@apply flex flex-col justify-evenly items-center h-full gap-2.5;
		}

		&__avatar {
			@apply w-31.25 h-31.25 drop-shadow-[0_0.6875rem_1.4375rem_#00000038] rounded-full;
		}

		&__name {
			&__container {
				@apply break-all;
			}

			&__body {
				@apply text-6.25 font-extrabold;
			}
		}

		&__bio {
			&__container {
				@apply break-all line-clamp-3;
			}

			&__body {
				@apply text-4.5;
			}
		}
	}

	&__game-ranking {
		@extend .tetrio-info__box;

		&__container {
			@apply flex flex-col p-6.25;
		}

		&__game-logo {
			@apply w-15 h-15 rounded-2.5;
		}

		&__game-name {
			@apply text-7.5 fw-extrabold;
		}

		&__divider {
			@apply w-full border-b-(1 solid #bababa) my-2.5;
		}

		&__ranking-title {
			@apply text-6.25 fw-extrabold;
		}

		&__ranking-rating {
			@apply text-12.5 leading-15;
		}

		&__ranking-rd {
			@apply text-7.5 leading-9 fw-light -mt-4;
		}
	}

	&__tr-chart {
		@apply drop-shadow-[0_0.9375rem_1.875rem_#0000004d] rounded-7.5 overflow-hidden;

		&__container {
			@apply flex flex-col;
		}

		&__rank-image {
			@apply w-12.5 h-12.5;
		}

		&__tr-rank {
			@apply flex items-end;

			&__tr {
				@apply text-11.25 fw-extrabold text-white;
			}

			&__rank {
				@apply text-7.5 align-bottom text-[#fafafa] ml-1 mb-1;
			}
		}
	}

	&__multiplayer-stats-title {
		@extend .tetrio-info__title;
		@apply mt-4.5;
	}

	&__card {
		@apply drop-shadow-[0_0.5625rem_1.5625rem_#00000026];
	}

	&__radar-chart {
		@apply w-68.75 h-68.75;
		@apply bg-[linear-gradient(222.34deg,#525252_11.97%,#1d1916_89.73%),linear-gradient(222.34deg,#4f9dff_11.97%,#2563ea_89.73%)];
		@apply drop-shadow-[0_0.9375rem_1.875rem_#0000004d] rounded-7.5;
	}

	&__singleplayer-stats-title {
		@extend .tetrio-info__title;
		@apply mt-4.5;
	}

	&__footer {
		@apply text-5 text-[#71717b] text-center;

		&__powered-by {
			@apply leading-5;

			&__title {
				@apply fw-black;
			}

			&__content {
				@apply fw-medium;
			}
		}

		&__designer {
			@apply mt-1.5 fw-medium;

			&__title {
				@apply mr-1;
			}

			&__sub {
				@apply text-4 align-sub;
			}
		}
	}
}
</style>