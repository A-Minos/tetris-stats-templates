<script lang="ts">
import Avatar from "@/schemas/avatar";
import z from "zod";

const DetailData = z.object({
	pps: z.number(),
	lpm: z.number(),

	apm: z.number(),
	apl: z.number(),
});

const Data = z.object({
	user: z.object({
		avatar: Avatar,
		name: z.string(),
	}),
	today: DetailData,
	history: DetailData,
});
</script>

<script lang="ts" setup>
import logo from "@/v1/assets/images/logo/top.svg";
import InfoApm from "@/v1/components/info/card/apm.vue";
import InfoLpm from "@/v1/components/info/card/lpm.vue";
import { THEME_KEY } from "vue-echarts";

const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>("template#data")!.innerHTML.trim()));

inject(THEME_KEY, "dark");
</script>

<template>
	<div id="content" class="tos-info">
		<span class="tos-info__title">Account & Rankings</span>

		<div class="tos-info__container">
			<div class="tos-info__col">
				<div class="tos-info__row">
					<div class="tos-info__user">
						<div class="tos-info__user__wrapper">
							<div class="tos-info__user__container">
								<Avatar :avatar="data.user.avatar" alt="用户头像" class="tos-info__user__avatar" />

								<div class="tos-info__user__name__container">
									<span class="tos-info__user__name__body">{{ data.user.name }}</span>
								</div>
							</div>
						</div>
					</div>

					<div class="tos-info__game-ranking">
						<div class="tos-info__game-ranking__container">
							<img :src="logo" alt="Logo" class="tos-info__game-ranking__game-logo" />
							<span class="tos-info__game-ranking__game-name">
								Tetris Online
								<br />
								Poland
							</span>
						</div>
					</div>
				</div>

				<span class="tos-info__today-stats-title">Today’s Stats</span>

				<div class="tos-info__row">
					<div class="tos-info__card">
						<info-lpm>
							{{ data.today.lpm }}

							<template #extra>
								<span class="whitespace-nowrap"> {{ data.today.pps }} pps </span>
							</template>
						</info-lpm>
					</div>

					<div class="tos-info__card">
						<info-apm>
							{{ data.today.apm }}

							<template #extra>
								<span class="whitespace-nowrap"> x{{ data.today.apl }} </span>
							</template>
						</info-apm>
					</div>
				</div>

				<span class="tos-info__historical-stats-title">Historical Stats</span>

				<div class="tos-info__row">
					<div class="tos-info__card">
						<info-lpm>
							{{ data.history.lpm }}

							<template #extra>
								<span class="whitespace-nowrap"> {{ data.history.pps }} pps </span>
							</template>
						</info-lpm>
					</div>

					<div class="tos-info__card">
						<info-apm>
							{{ data.history.apm }}

							<template #extra>
								<span class="whitespace-nowrap"> x{{ data.history.apl }} </span>
							</template>
						</info-apm>
					</div>
				</div>

				<div class="tos-info__footer">
					<div class="tos-info__footer__powered-by">
						<span class="tos-info__footer__powered-by__title">Powered by</span>
						<br />
						<span class="tos-info__footer__powered-by__content"
							>NoneBot2 x nonebot-plugin-tetris-stats</span
						>
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

<style lang="scss">
@import "@/v1/styles/main";
</style>

<style lang="scss" scoped>
@import "@/v1/styles/main";

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
		@apply w-68.75 h-31.25 rounded-7.5 bg-[#fafafa];
		@apply drop-shadow-[0_0.5625rem_1.5625rem_#00000026];
	}

	&__user {
		@extend .tos-info__box;

		&__wrapper {
			@apply flex flex-col justify-center items-center h-full;
		}

		&__container {
			@apply flex justify-center items-center h-full gap-7 p-7.5;
		}

		&__avatar {
			@apply w-15 h-15 drop-shadow-[0_0.6875rem_1.4375rem_#00000038] rounded-full;
		}

		&__name {
			&__container {
				@apply break-all line-clamp-2;
			}

			&__body {
				@apply text-7.5 font-extrabold;
			}
		}
	}

	&__game-ranking {
		@extend .tos-info__box;

		@apply flex justify-center items-center;

		&__container {
			@apply flex justify-center gap-5;
		}

		&__game-logo {
			@apply w-15 h-15 rounded-2.5;
		}

		&__game-name {
			@apply text-6.25 fw-extrabold;
		}
	}

	&__today-stats-title {
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

	&__historical-stats-title {
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
