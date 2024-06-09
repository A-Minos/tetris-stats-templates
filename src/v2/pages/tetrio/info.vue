<script lang="ts">
import Avatar from '@/shared/types/avatar'

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
		readonly highest_rank: string

		readonly tr: number

		readonly glicko: number
		readonly rd: number

		readonly global_rank?: number
		readonly country_rank?: number

		readonly pps: number

		readonly apm: number
		readonly apl: number

		readonly vs: number
		readonly adpl: number

		readonly statistic: {
			readonly total: number
			readonly wins: number
		}
	}

	readonly statistic?: {
		readonly total?: number
		readonly wins?: number
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
import { darkTheme } from 'naive-ui'
import Identicon from 'identicon.js'
import logo from '@/v2/assets/images/logos/tetrio.svg'
import { isNonNullish, isNullish, isString } from 'remeda'

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
			const result = new Identicon(data.user.avatar.hash, {
				background: [8, 10, 6, 255],
				margin: 0.15,
				size: 300,
				brightness: 0.48,
				saturation: 0.65,
				format: 'svg'
			}).toString()

			return `data:image/svg+xml;base64,${result}`
	}
})

const level = computed(() => {
	return Math.pow(data.user.xp / 500, 0.6) + data.user.xp / (5000 + Math.max(0, data.user.xp - 4000000) / 5000) + 1
})

const calculateWinRate = (total: number, wins: number) => {
	const rate = (wins / total * 100).toFixed(2)
	return `${wins}/${total} (${rate}%)`
}

const { define: UserDefine, reuse: User } = createReusableTemplate()
const { define: LogoDefine, reuse: Logo } = createReusableTemplate()

const numberFormatter = new Intl.NumberFormat()

const zen_level_icons = computed(() => {
	let result = ''

	if (isNullish(data.zen) || isNullish(data.zen.level)) {
		return result
	}

	const symbols = {
		500000: 'ǰ',
		400000: 'ǯǰ',
		100000: 'ǯ',
		90000: 'ǭǯ',
		50000: 'Ǯ',
		40000: 'ǭǮ',
		10000: 'ǭ',
		9000: 'ǫǭ',
		5000: 'Ǭ',
		4000: 'ǫǬ',
		1000: 'ǫ',
		900: 'ǩǫ',
		500: 'Ǫ',
		400: 'ǩǪ',
		100: 'ǩ',
		90: 'ǧǩ',
		50: 'Ǩ',
		40: 'ǧǨ',
		10: 'ǧ',
		9: 'ǥǧ',
		5: 'Ǧ',
		4: 'ǥǦ',
		1: 'ǥ'
	}

	let level = Math.max(Math.floor(data.zen.level), 0)

	const keys = Object.keys(symbols)

	while (level >= 1) {
		for (let i = keys.length - 1; i >= 0; i--) {
			const key = keys[i]

			if (level / parseInt(key) >= 1) {
				level -= parseInt(key)

				// @ts-ignore ???
				result += symbols[key]
				break
			}
		}
	}

	return result
})
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content id="content" class="p-2 max-w-320">
				<n-flex vertical>

					<!-- 顶部: 复用 -->

					<UserDefine>
						<div class="text-white">
							<n-flex size="small" vertical>
								<n-flex align="center" size="small">
									<n-avatar :src="avatar" class="[&,&>img]:size-12"/>

									<n-flex :size="0" vertical>
										<n-text class="text-(6 current) fw-bold leading-none">
											{{ data.user.name }}
										</n-text>

										<n-text :depth="3" class="text-xs">{{ data.user.id }}</n-text>
									</n-flex>

									<template v-if="isNonNullish(data.user.country)">
										<n-image
											:src="(`https://tetr.io/res/flags/${data.user.country.toLowerCase()}.png`)"
											class="[&>img]:(h-6) rounded-sm"/>
									</template>

									<template v-if="data.user.verified">
										<n-icon :component="CheckCircleOutlined"
												class="text-5"
												color="#9CCA95"/>
									</template>
								</n-flex>

								<n-flex :size="0" align="center" justify="space-between">
									<n-flex align="center" class="!gap-0.5">
										<n-icon :component="HeartFilled" class="text-5"/>
										<n-text class="text-current">{{ data.user.friend_count }}</n-text>
									</n-flex>

									<n-flex v-if="data.user.supporter_tier > 0" :size="0" align="center"
											class="ml-5">
										<template v-for="_ in data.user.supporter_tier">
											<n-icon :component="StarFilled"
													class="text-5 drop-shadow-[0_0_0.5rem_#FF4A19]"/>
										</template>
									</n-flex>
								</n-flex>
							</n-flex>
						</div>
					</UserDefine>

					<LogoDefine>
						<div class="text-white">
							<n-flex :size="0" align="center" vertical>
								<n-image :src="logo" class="[&>img]:size-8"/>
								<n-text class="text-current mt-2 fw-bold">TETR.IO</n-text>
							</n-flex>
						</div>
					</LogoDefine>

					<!-- 顶部: 有头图 -->

					<div v-if="isNonNullish(data.user.banner)" class="relative">
						<n-image :src="data.user.banner" class="[&>img]:(w-full)"/>

						<div class="absolute top-1/2 left-1/2 -translate-1/2 w-full">
							<div class="px-2.5">
								<n-flex align="center"
										class="[&>*]:(bg-(black opacity-75) rounded backdrop-(blur-sm brightness-50) p-2.5)"
										justify="space-between">
									<User/>
									<Logo/>
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
								<n-text class="text-2xl fw-bold">BAD STANDING</n-text>
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
									<n-image :src="(`https://tetr.io/res/badges/${badge}.png`)" class="[&>img]:h-8"/>
								</template>
							</n-flex>
						</n-card>
					</template>

					<n-flex :wrap="false" class="[&>*]:(h-full flex-1)">
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
												<n-icon :component="ClockCircleOutlined" class="text-5"/>
												<n-text>{{ data.user.playtime }}</n-text>
											</n-flex>
										</template>

										<template v-if="isNonNullish(data.statistic)">
											<div class="text-center">
												<n-text :depth="3" class="text-sm">
													<template
														v-if="isNonNullish(data.statistic.total) && isNonNullish(data.statistic.wins)">
														胜率: {{
															calculateWinRate(data.statistic.total, data.statistic.wins)
														}}
													</template>

													<template v-else-if="isNonNullish(data.statistic.total)">
														游玩次数: {{ data.statistic.total }}
													</template>

													<template v-else-if="isNonNullish(data.statistic.wins)">
														胜场数: {{ data.statistic.wins }}
													</template>
												</n-text>
											</div>
										</template>

										<template v-if="isNonNullish(data.user.join_at)">
											<div class="text-center">
												<n-text :depth="3" class="text-sm">
													注册时间: {{
														new Date(data.user.join_at).toLocaleString('zh-CN')
													}}
												</n-text>
											</div>
										</template>

									</div>
								</n-card>
							</template>
						</n-flex>

						<n-flex vertical>
							<template v-if="isNonNullish(data.tetra_league)">
								<n-card size="small">
									<n-flex :size="0" vertical>

										<n-flex align="center" justify="space-between">

											<!-- Tetra League -->

											<n-flex align="center" size="small">
												<n-image
													:src="(`https://tetr.io/res/league-ranks/${data.tetra_league.rank}.png`)"
													class="[&>img]:size-15"/>

												<n-flex :size="0" vertical>
													<n-text class="text-2xl fw-bold">{{ data.tetra_league.tr }} TR
													</n-text>

													<n-text :depth="3" class="text-sm">
														{{ data.tetra_league.glicko }}±{{ data.tetra_league.rd }}
													</n-text>
												</n-flex>
											</n-flex>

											<!-- 排名 -->

											<template
												v-if="isNonNullish(data.tetra_league.global_rank) || isNonNullish(data.tetra_league.country_rank)">
												<div class="text-right">
													<n-flex :size="0" vertical>
														<template
															v-if="isNonNullish(data.tetra_league.global_rank)">
															<n-text class="text-sm fw-bold" type="success">
																#{{ data.tetra_league.global_rank }}
															</n-text>
														</template>

														<template
															v-if="isNonNullish(data.user.country) && isNonNullish(data.tetra_league.country_rank)">
															<n-text class="text-sm fw-bold" type="info">
																{{
																	data.user.country.toUpperCase()
																}}#{{ data.tetra_league.country_rank }}
															</n-text>
														</template>
													</n-flex>
												</div>
											</template>
										</n-flex>

										<n-flex :size="0" align="center" justify="center">
											<n-text :depth="3" class="text-sm">
												胜率: {{
													calculateWinRate(data.tetra_league.statistic.total, data.tetra_league.statistic.wins)
												}}
											</n-text>

											<n-divider vertical/>

											<n-text :depth="3">历史最高:</n-text>

											<n-image
												:src="(`https://tetr.io/res/league-ranks/${data.tetra_league.highest_rank}.png`)"
												class="[&>img]:size-4"/>
										</n-flex>

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
														(x{{ data.tetra_league.apl }})
													</n-text>
												</n-flex>
											</n-statistic>

											<n-statistic label="VS">
												<n-flex :size="0" vertical>
													<n-text>{{ data.tetra_league.vs }}</n-text>
													<n-text :depth="3" class="text-sm">
														(x{{ data.tetra_league.adpl }})
													</n-text>
												</n-flex>
											</n-statistic>

										</n-flex>
									</div>
								</n-card>
							</template>
						</n-flex>
					</n-flex>

					<template v-if="[data.sprint, data.blitz, data.zen].some(isNonNullish)">
						<n-divider class="!my-0">单人游戏</n-divider>
					</template>

					<template v-if="[data.sprint, data.blitz].some(isNonNullish)">
						<n-grid :cols="[data.sprint, data.blitz].filter(isNonNullish).length" :x-gap="10">
							<!-- 40L -->

							<n-grid-item>
								<template v-if="isNonNullish(data.sprint)">
									<n-card size="small" title="40L">
										<n-flex align="center" justify="space-between">
											<n-flex :size="0" vertical>
												<n-text class="text-3xl fw-bold">{{ data.sprint.time }}</n-text>

												<n-text :depth="3" class="text-sm">
													达成时间: {{
														new Date(data.sprint.play_at).toLocaleString('zh-CN')
													}}
												</n-text>
											</n-flex>

											<n-text v-if="isNonNullish(data.sprint.global_rank)" class="text-sm fw-bold"
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
													达成时间: {{ new Date(data.blitz.play_at).toLocaleString('zh-CN') }}
												</n-text>
											</n-flex>

											<n-text v-if="isNonNullish(data.blitz.global_rank)" class="text-sm fw-bold"
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

								<n-flex :size="0" align="end" vertical>
									<n-text :depth="3" class="text-xl fw-bold">Level {{ data.zen.level }}</n-text>

									<n-text :depth="3" class="text-4xl font-[HUN] tracking-0.1">
										{{ zen_level_icons }}
									</n-text>
								</n-flex>
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

<style lang="scss">
@import '@/v2/styles/main';
</style>