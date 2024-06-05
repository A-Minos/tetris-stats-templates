<script lang="ts">
import type { Avatar } from '@/types/shared'

export interface Data {
	readonly user: {
		readonly id: string
		readonly name: string
		readonly country?: string

		readonly avatar: Avatar
		readonly banner?: string

		readonly bio?: string

		readonly friend_count: number
		readonly supporter_tier: number

		readonly verified: boolean
		readonly bad_standing: boolean

		readonly badges: string[]
		readonly xp: number

		readonly playtime?: string
		readonly join_at?: Date
	}

	readonly tetra_league?: {
		readonly rank: string
		readonly tr: number

		readonly glicko: number
		readonly rd: number

		readonly global_rank: number
		readonly country_rank: number

		readonly pps: number
		readonly apm: number
		readonly vs: number

		readonly statistic: {
			readonly total: number
			readonly wins: number
		}
	}

	readonly statistic?: {
		readonly total: number
		readonly wins: number
	}

	readonly sprint?: {
		readonly time: string
		readonly global_rank?: number
		readonly play_at: Date
	}

	readonly blitz?: {
		readonly score: number
		readonly global_rank?: number
		readonly play_at: Date
	}

	readonly zen?: {
		readonly score: number
		readonly level: number
	}
}
</script>

<script lang="ts" setup>
import { CheckCircleOutlined, ClockCircleOutlined, HeartFilled, StarFilled } from '@vicons/antd'
import { createReusableTemplate } from '@vueuse/core'
import Identicon from 'identicon.js'
import {
	darkTheme,
	NConfigProvider,
	NLayout,
	NLayoutContent,
	NImage,
	NAvatar,
	NFlex,
	NCard,
	NDivider,
	NGrid,
	NGridItem,
	NText,
	NIcon,
	NAlert,
	NProgress,
	NStatistic
} from 'naive-ui'
import logo from '@/assets/v2/images/logos/tetrio.svg'
import { isNonNullish, isNullish, isString } from 'remeda'
import { computed } from 'vue'

const data: Data = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

const avatar = computed(() => {
	if (isString(data.user.avatar)) {
		return data.user.avatar
	}

	switch (data.user.avatar.type) {
		case 'identicon':
			// @ts-ignore
			const data = new Identicon(props.avatar.hash, {
				background: [8, 10, 6, 255],
				margin: 0.15,
				size: 300,
				brightness: 0.48,
				saturation: 0.65,
				format: 'svg'
			}).toString()

			return `data:image/svg+xml;base64,${data}`
	}
})

const level = computed(() => {
	return Math.pow(data.user.xp / 500, 0.6) + data.user.xp / (5000 + Math.max(0, data.user.xp - 4000000) / 5000) + 1
})

const calculateWinRate = (total: number, wins: number) => {
	const rate = (wins / total * 100).toFixed(2)
	return `${wins}/${total} (${rate}%)`
}

const adpm = computed(() => {
	if (isNullish(data.tetra_league)) {
		return 0
	}

	return data.tetra_league.apm / data.tetra_league.pps / 24
})

const adpl = computed(() => {
	if (isNullish(data.tetra_league)) {
		return 0
	}

	return (data.tetra_league.vs / data.tetra_league.pps / 24) * 0.6
})

const { define: UserDefine, reuse: User } = createReusableTemplate()
const { define: LogoDefine, reuse: Logo } = createReusableTemplate()

const numberFormatter = new Intl.NumberFormat()
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content class="p-2 max-w-1/2">
				<n-flex vertical>

					<!-- 顶部: 复用 -->

					<UserDefine>
						<div class="text-white">
							<n-flex size="small" vertical>
								<n-flex align="center" size="small">
									<n-avatar :size="4 * 12" :src="avatar"/>

									<n-flex :size="0" vertical>
										<n-text class="text-(6 current) fw-bold leading-none">
											{{ data.user.name }}
										</n-text>

										<n-text :depth="3" class="text-xs">{{ data.user.id }}</n-text>
									</n-flex>

									<template v-if="isNonNullish(data.user.country)">
										<n-image :src="(`https://tetr.io/res/flags/${data.user.country}.png`)"
												 :width="4 * 6"
												 class="rounded"/>
									</template>

									<template v-if="data.user.verified">
										<n-icon :component="CheckCircleOutlined"
												:size="4 * 5"
												color="#9CCA95"/>
									</template>
								</n-flex>

								<n-flex :size="0" align="center" justify="space-between">
									<n-flex align="center" class="!gap-0.5">
										<n-icon :component="HeartFilled" :size="4 * 5"/>
										<n-text class="text-current">{{ data.user.friend_count }}</n-text>
									</n-flex>

									<n-flex v-if="data.user.supporter_tier > 0" :size="0" align="center"
											class="ml-5">
										<template v-for="_ in data.user.supporter_tier">
											<n-icon :component="StarFilled" :size="4 * 5"
													class="drop-shadow-[0_0_0.5rem_#FF4A19]"/>
										</template>
									</n-flex>
								</n-flex>
							</n-flex>
						</div>
					</UserDefine>

					<LogoDefine>
						<div class="text-white">
							<n-flex :size="0" align="center" vertical>
								<n-image :src="logo" :width="4 * 8"/>
								<n-text class="text-current mt-2 fw-bold">TETR.IO</n-text>
							</n-flex>
						</div>
					</LogoDefine>

					<!-- 顶部: 有头图 -->

					<div v-if="isNonNullish(data.user.banner)" class="relative">
						<n-image :src="data.user.banner" class="[&>img]:(w-full)"/>

						<div class="absolute top-1/2 left-1/2 -translate-1/2 w-full">
							<div class="px-2.5">
								<n-flex align="center" justify="space-between">
									<div class="backdrop-(blur-sm brightness-50) p-2.5">
										<User/>
									</div>

									<div class="backdrop-(blur-sm brightness-50) p-1">
										<Logo/>
									</div>
								</n-flex>
							</div>
						</div>
					</div>

					<!-- 顶部: 无头图 -->

					<n-flex v-else align="center" justify="space-between">
						<User/>
						<Logo/>
					</n-flex>

					<!-- Bad Standing -->

					<n-alert v-if="data.user.bad_standing" :show-icon="false" type="error">
						<div class="text-center">
							<n-flex :size="0" vertical>
								<n-text class="text-2xl fw-bold">Bad Standing</n-text>
								<n-text class="my-2">近期有一次或多次违禁行为</n-text>
							</n-flex>
						</div>
					</n-alert>

					<!-- Bio -->

					<template v-if="isNonNullish(data.user.bio)">
						<n-card size="small">
							{{ data.user.bio }}
						</n-card>
					</template>

					<n-divider class="!my-0">多人游戏</n-divider>

					<!-- 勋章 -->

					<template v-if="isNonNullish(data.user.badges)">
						<n-card size="small">
							<n-flex justify="center">
								<template v-for="badge in data.user.badges">
									<n-image :src="(`https://tetr.io/res/badges/${badge}.png`)" :width="4 * 6"/>
								</template>
							</n-flex>
						</n-card>
					</template>

					<n-grid :cols="isNullish(data.tetra_league) ? 1 : 2" :x-gap="10">
						<n-grid-item>
							<n-flex class="h-full" vertical>
								<!-- 等级 -->

								<n-card size="small">
									<n-flex vertical>
										<div class="text-center">
											<n-text class="fw-bold">
												{{ Math.trunc(level) }} 级 ({{ numberFormatter.format(data.user.xp) }}
												XP)
											</n-text>
										</div>

										<n-progress :percentage="Math.trunc((level % 1) * 100)"
													indicator-placement="inside"/>
									</n-flex>
								</n-card>

								<!-- 额外信息 -->

								<template
									v-if="[data.user.playtime, data.statistic, data.user.join_at].some(isNonNullish)">
									<n-card class="h-full" size="small">
										<div class="flex flex-col justify-center items-center h-full">

											<template v-if="isNonNullish(data.user.playtime)">
												<n-flex align="center" class="!gap-1 mb-5">
													<n-icon :component="ClockCircleOutlined" :size="4 * 5"/>
													<n-text>{{ data.user.playtime }}</n-text>
												</n-flex>
											</template>

											<template v-if="isNonNullish(data.statistic)">
												<div class="text-center">
													<n-text :depth="3" class="text-sm">
														胜率: {{
															calculateWinRate(data.statistic.total, data.statistic.wins)
														}}
													</n-text>
												</div>
											</template>

											<template v-if="isNonNullish(data.user.join_at)">
												<div class="text-center">
													<n-text :depth="3" class="text-sm">
														注册时间: {{ new Date(data.user.join_at).toLocaleString() }}
													</n-text>
												</div>
											</template>

										</div>
									</n-card>
								</template>
							</n-flex>
						</n-grid-item>

						<n-grid-item>
							<n-flex vertical>
								<template v-if="isNonNullish(data.tetra_league)">
									<n-card size="small">
										<n-flex :size="0" vertical>

											<n-flex align="center" justify="space-between">

												<!-- Tetra League -->

												<n-flex :size="0" align="center">
													<n-image :src="(`https://tetr.io/res/league-ranks/${data.tetra_league.rank}.png`)"
															 :width="4 * 15"/>

													<n-flex :size="0" vertical>
														<n-text class="text-2xl fw-bold">{{ data.tetra_league.tr }} TR
														</n-text>

														<n-text :depth="3" class="text-sm">
															{{ data.tetra_league.glicko }}±{{ data.tetra_league.rd }}
														</n-text>
													</n-flex>
												</n-flex>

												<!-- 排名 -->

												<div class="text-right">
													<n-flex :size="0" vertical>
														<n-text class="text-xl fw-bold" type="success">
															#{{ data.tetra_league.global_rank }}
														</n-text>

														<template
															v-if="isNonNullish(data.user.country) && isNonNullish(data.tetra_league.country_rank)">
															<n-text class="text-xl fw-bold" type="info">
																{{
																	data.user.country.toUpperCase()
																}}#{{ data.tetra_league.country_rank }}
															</n-text>
														</template>
													</n-flex>
												</div>
											</n-flex>

											<div class="text-center">
												<n-text :depth="3" class="text-sm">
													胜率: {{
														calculateWinRate(data.tetra_league.statistic.total, data.tetra_league.statistic.wins)
													}}
												</n-text>
											</div>

										</n-flex>
									</n-card>

									<!-- 数据 -->

									<n-card size="small">
										<div class="text-center">
											<n-flex justify="space-evenly">

												<n-statistic :value="data.tetra_league.pps" label="PPS"/>

												<n-statistic label="APM">
													<n-flex :size="0" vertical>
														<n-text>{{ data.tetra_league.apm }}</n-text>
														<n-text :depth="3" class="text-sm">
															(x{{ adpm.toFixed(2) }})
														</n-text>
													</n-flex>
												</n-statistic>

												<n-statistic label="VS">
													<n-flex :size="0" vertical>
														<n-text>{{ data.tetra_league.vs }}</n-text>
														<n-text :depth="3" class="text-sm">
															(x{{ adpl.toFixed(2) }})
														</n-text>
													</n-flex>
												</n-statistic>

											</n-flex>
										</div>
									</n-card>
								</template>
							</n-flex>
						</n-grid-item>
					</n-grid>

					<template v-if="[data.sprint, data.blitz, data.zen].some(isNonNullish)">
						<n-divider class="!my-0">单人游戏</n-divider>
					</template>

					<template v-if="![data.sprint, data.blitz].map(isNonNullish).includes(false)">
						<n-grid :cols="[data.sprint, data.blitz].filter(isNonNullish).length" :x-gap="10">
							<!-- 40L -->

							<n-grid-item>
								<template v-if="isNonNullish(data.sprint)">
									<n-card size="small" title="40L">
										<n-flex align="center" justify="space-between">
											<n-flex :size="0" vertical>
												<n-text class="text-3xl fw-bold">{{ data.sprint.time }}</n-text>

												<n-text :depth="3" class="text-sm">
													达成时间: {{ new Date(data.sprint.play_at).toLocaleString() }}
												</n-text>
											</n-flex>

											<n-text v-if="isNonNullish(data.sprint.global_rank)" class="text-xl fw-bold"
													type="success">
												#{{ data.sprint.global_rank }}
											</n-text>
										</n-flex>
									</n-card>
								</template>
							</n-grid-item>

							<!-- Blitz -->

							<n-grid-item>
								<template v-if="isNonNullish(data.blitz)">
									<n-card size="small" title="Blitz">
										<n-flex align="center" justify="space-between">
											<n-flex :size="0" vertical>
												<n-text class="text-3xl fw-bold">
													{{ numberFormatter.format(data.blitz.score) }}
												</n-text>

												<n-text :depth="3" class="text-sm">
													达成时间: {{ new Date(data.blitz.play_at).toLocaleString() }}
												</n-text>
											</n-flex>

											<n-text v-if="isNonNullish(data.blitz.global_rank)" class="text-xl fw-bold"
													type="success">
												#{{ data.blitz.global_rank }}
											</n-text>
										</n-flex>
									</n-card>
								</template>
							</n-grid-item>
						</n-grid>
					</template>

					<!-- Zen -->

					<template v-if="isNonNullish(data.zen)">
						<n-card size="small" title="Zen">
							<n-flex align="center" justify="space-between">
								<n-text class="text-3xl fw-bold">{{ numberFormatter.format(data.zen.score) }}</n-text>
								<n-text :depth="3" class="text-3xl fw-bold">Level {{ data.zen.level }}</n-text>
							</n-flex>
						</n-card>
					</template>

					<!-- 底部 -->

					<n-card size="small">
						<div class="text-center">
							<n-text class="text-2xl fw-bold" type="warning">
								Powered by NoneBot2 x nonebot-plugin-tetris-stats
							</n-text>
						</div>
					</n-card>

				</n-flex>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>