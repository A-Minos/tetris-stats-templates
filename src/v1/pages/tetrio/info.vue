<script lang="ts">
import Rank from "@/schemas/rank";
import User from "@/schemas/user";
import { z } from "zod";
const Data = z.object({
	user: User.extend({ bio: z.string().optional() }),

	ranking: z.object({
		rating: z.number(),
		rd: z.number(),
	}),

	tetra_league: z.object({
		rank: Rank,
		tr: z.number(),
		global_rank: z.number(),

		pps: z.number(),
		lpm: z.number(),

		apm: z.number(),
		apl: z.number(),

		vs: z.number(),
		adpm: z.number(),
		adpl: z.number(),
	}),

	tetra_league_history: z.object({
		data: z.array(
			z.object({
				record_at: z.coerce.date(),
				tr: z.number(),
			})
		),
		split_interval: z.number(),
		min_tr: z.number(),
		max_tr: z.number(),
		offset: z.number(),
	}),

	radar: z.object({
		app: z.number(),
		dsps: z.number(),
		dspp: z.number(),
		ci: z.number(),
		ge: z.number(),
	}),

	sprint: z.string(),
	blitz: z.string(),
});
</script>

<script lang="ts" setup>
import Avatar from "@/shared/components/avatar.vue";
import logo from "@/v1/assets/images/logo/tetrio.svg";
import Info40l from "@/v1/components/info/card/40l.vue";
import InfoAdpm from "@/v1/components/info/card/adpm.vue";
import InfoApm from "@/v1/components/info/card/apm.vue";
import InfoBlitz from "@/v1/components/info/card/blitz.vue";
import InfoLpm from "@/v1/components/info/card/lpm.vue";
import InfoRadarChart from "@/v1/components/info/chart/radar-chart.vue";
import InfoTrChart from "@/v1/components/info/chart/tr-chart.vue";
import { isNonNullish } from "remeda";
import { THEME_KEY } from "vue-echarts";

const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>("template#data")!.innerHTML.trim()));

inject(THEME_KEY, "dark");

const rankImage = asyncComputed(async () => {
	return await import(`@/shared/assets/images/ranks/${data.tetra_league.rank}.svg?url`).then((module) => {
		return module.default;
	});
});

const unescape = (content: string) => {
	const element = document.createElement("div");
	element.innerHTML = content;
	return element.textContent;
};

const radar_chart_data = [
	{
		label: "APP",
		value: data.radar.app,
	},
	{
		label: "CI",
		value: data.radar.ci,
	},
	{
		label: "DSPP",
		value: data.radar.dspp,
	},
	{
		label: "DSPS",
		value: data.radar.dsps,
	},
	{
		label: "GE",
		value: data.radar.ge,
	},
	{
		label: "PPS",
		value: data.tetra_league.pps,
	},
];
</script>

<template>
	<div id="content" class="tetrio-info">
		<span class="tetrio-info__title">Account & Rankings</span>

		<div class="tetrio-info__container">
			<div class="tetrio-info__col">
				<div class="tetrio-info__row">
					<div class="tetrio-info__user">
						<div class="tetrio-info__user__wrapper">
							<div class="tetrio-info__user__container">
								<Avatar :avatar="data.user.avatar" alt="用户头像" class="tetrio-info__user__avatar" />

								<div class="tetrio-info__user__name__container">
									<span class="tetrio-info__user__name__body">{{ data.user.name }}</span>
								</div>

								<div v-if="isNonNullish(data.user.bio)" class="tetrio-info__user__bio__container">
									<span class="tetrio-info__user__bio__body">{{ unescape(data.user.bio) }}</span>
								</div>
							</div>
						</div>
					</div>

					<div class="tetrio-info__game-ranking">
						<div class="tetrio-info__game-ranking__wrapper">
							<div class="tetrio-info__game-ranking__container">
								<img :src="logo" alt="Logo" class="tetrio-info__game-ranking__game-logo" />
								<span class="tetrio-info__game-ranking__game-name">TETR.IO</span>

								<div class="tetrio-info__game-ranking__divider" />

								<span class="tetrio-info__game-ranking__ranking-title">Ranking</span>

								<span class="tetrio-info__game-ranking__ranking-rating">{{ data.ranking.rating }}</span>
								<span class="tetrio-info__game-ranking__ranking-rd">±{{ data.ranking.rd }}</span>
							</div>
						</div>
					</div>
				</div>

				<div class="tetrio-info__tr-chart">
					<info-tr-chart
						:data="data.tetra_league_history.data"
						:max_tr="data.tetra_league_history.max_tr"
						:min_tr="data.tetra_league_history.min_tr"
						:offset="data.tetra_league_history.offset"
						:split_interval="data.tetra_league_history.split_interval"
					>
						<div class="flex flex-col">
							<img
								v-if="isNonNullish(rankImage)"
								:alt="data.tetra_league.rank"
								:src="rankImage"
								class="w-12.5 h-12.5"
							/>

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
								{{ data.tetra_league.lpm }}

								<template #extra>
									<span class="whitespace-nowrap"> {{ data.tetra_league.pps }} pps </span>
								</template>
							</info-lpm>
						</div>

						<div class="tetrio-info__card">
							<info-apm>
								{{ data.tetra_league.apm }}

								<template #extra>
									<span class="whitespace-nowrap"> x{{ data.tetra_league.apl }} </span>
								</template>
							</info-apm>
						</div>

						<div class="tetrio-info__card">
							<info-adpm>
								{{ data.tetra_league.adpm }}

								<template #extra>
									<span class="whitespace-nowrap"> {{ data.tetra_league.vs }} vs </span>

									<br />

									<span class="whitespace-nowrap"> x{{ data.tetra_league.adpl }} </span>
								</template>
							</info-adpm>
						</div>
					</div>

					<div class="tetrio-info__radar-chart">
						<info-radar-chart :data="radar_chart_data" />
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
						<br />
						<span class="tetrio-info__footer__powered-by__content"
							>NoneBot2 x nonebot-plugin-tetris-stats</span
						>
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

<style lang="scss">
@import "@/v1/styles/main";
</style>

<style lang="scss" scoped>
@import "@/v1/styles/main";

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

		&__wrapper {
			@apply flex flex-col justify-center items-center h-full;
		}

		&__container {
			@apply flex flex-col justify-evenly items-center h-full gap-2.5 p-6.25;
		}

		&__avatar {
			@apply w-31.25 h-31.25 drop-shadow-[0_0.6875rem_1.4375rem_#00000038] rounded-full;
		}

		&__name {
			&__container {
				@apply break-all line-clamp-1;
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
