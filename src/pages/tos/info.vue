<script lang="ts">
import type { Avatar as AvatarType } from '@/types/shared'

export interface Data {
	readonly user: {
		readonly avatar: AvatarType
		readonly name: string
	}

	readonly ranking: {
		readonly rating: number
		readonly rd: number
	}

	readonly multiplayer: {
		readonly pps: number
		readonly lpm: number

		readonly apm: number
		readonly apl: number

		readonly vs: number
		readonly adpm: number
		readonly adpl: number
	}

	readonly radar: {
		readonly app: number
		readonly or: number
		readonly dspp: number
		readonly ci: number
		readonly ge: number
	}

	readonly sprint: string
	readonly challenge: string
	readonly marathon: string
}
</script>

<script lang="ts" setup>
import InfoLpm from '@/components/info/lpm.vue'
import logo from '@/assets/images/logo/tos.svg'
import Avatar from '@/components/avatar.vue'
import Info40l from '@/components/info/40l.vue'
import InfoChallenge from '@/components/info/challenge.vue'
import InfoMarathon from '@/components/info/marathon.vue'
import InfoAdpm from '@/components/info/adpm.vue'
import InfoApm from '@/components/info/apm.vue'
import InfoRadarChart from '@/components/info/radar-chart.vue'
import { inject } from 'vue'
import { THEME_KEY } from 'vue-echarts'

const data: Data = JSON.parse(
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()
)

inject(THEME_KEY, 'dark')

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
		label: 'OR',
		value: data.radar.or
	},
	{
		label: 'GE',
		value: data.radar.ge
	},
	{
		label: 'PPS',
		value: data.multiplayer.pps
	}
]
</script>

<template>
	<div class="tos-info">
		<span class="tos-info__title">Account & Rankings</span>

		<div class="tos-info__container">
			<div class="tos-info__col">
				<div class="tos-info__row">
					<div class="tos-info__user">
						<div class="tos-info__user__container">
							<Avatar :avatar="data.user.avatar" alt="用户头像" class="tos-info__user__avatar"/>

							<div class="tos-info__user__name__container">
								<span class="tos-info__user__name__body">{{ data.user.name }}</span>
							</div>
						</div>
					</div>

					<div class="tos-info__game-ranking">
						<div class="tos-info__game-ranking__container">
							<div class="tos-info__game-ranking__game-logo__container">
								<img :src="logo" alt="Logo" class="tos-info__game-ranking__game-logo__body"/>
							</div>

							<span class="tos-info__game-ranking__game-name">T.O.S.</span>

							<div class="tos-info__game-ranking__divider"/>

							<span class="tos-info__game-ranking__ranking-title">Ranking</span>

							<span class="tos-info__game-ranking__ranking-rating">{{ data.ranking.rating }}</span>
							<span class="tos-info__game-ranking__ranking-rd">±{{ data.ranking.rd }}</span>
						</div>
					</div>
				</div>

				<span class="tos-info__multiplayer-stats-title">Multiplayer Stats</span>

				<div class="tos-info__row">
					<div class="tos-info__col">
						<div class="tos-info__card">
							<info-lpm>
								{{ Number(data.multiplayer.lpm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										{{ Number(data.multiplayer.pps).toFixed(2) }} pps
									</span>
								</template>
							</info-lpm>
						</div>

						<div class="tos-info__card">
							<info-apm>
								{{ Number(data.multiplayer.apm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										x{{ Number(data.multiplayer.apl).toFixed(2) }}
									</span>
								</template>
							</info-apm>
						</div>

						<div class="tos-info__card">
							<info-adpm>
								{{ Number(data.multiplayer.adpm).toFixed(2) }}

								<template #extra>
									<span class="whitespace-nowrap">
										{{ Number(data.multiplayer.vs).toFixed(2) }} vs
									</span>

									<br/>

									<span class="whitespace-nowrap">
										x{{ Number(data.multiplayer.adpl).toFixed(2) }}
									</span>
								</template>
							</info-adpm>
						</div>
					</div>

					<div class="tos-info__radar-chart">
						<info-radar-chart :data="radar_chart_data"/>
					</div>
				</div>

				<span class="tos-info__singleplayer-stats-title">Singleplayer Stats</span>

				<div class="tos-info__col">
					<div class="tos-info__row">
						<div class="tos-info__card">
							<info-40l>{{ data.sprint }}</info-40l>
						</div>

						<div class="tos-info__card">
							<info-challenge>{{ data.challenge }}</info-challenge>
						</div>
					</div>

					<div class="tos-info__row">
						<div class="tos-info__card">
							<info-marathon>{{ data.marathon }}</info-marathon>
						</div>
					</div>
				</div>

				<div class="tos-info__footer">
					<div class="tos-info__footer__powered-by">
						<span class="tos-info__footer__powered-by__title">Powered by</span>
						<br/>
						<span
							class="tos-info__footer__powered-by__content">NoneBot2 x nonebot-plugin-tetris-stats</span>
					</div>

					<div class="tos-info__footer__designer">
						<span class="tos-info__footer__designer__title">Graphic Design by</span>

						<span>C</span>
						<span class="tos-info__footer__designer__sub">29</span>
						<span>H</span>
						<span class="tos-info__footer__designer__sub">25</span>
						<span>N</span>
						<span class="tos-info__footer__designer__sub">3</span>
						<span>O</span>
						<span class="tos-info__footer__designer__sub">5</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/main';

.tos-info {
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
		@extend .tos-info__box;
		@apply py-7.5;

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
	}

	&__game-ranking {
		@extend .tos-info__box;

		&__container {
			@apply flex flex-col p-6.25;
		}

		&__game-logo {
			&__container {
				@apply w-15 h-15 rounded-2.5 bg-black;
			}

			&__body {
				@apply w-full h-full scale-9/10;
			}
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

	&__multiplayer-stats-title {
		@extend .tos-info__title;
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
		@extend .tos-info__title;
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