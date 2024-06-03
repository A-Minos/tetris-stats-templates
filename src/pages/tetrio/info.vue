<script lang="ts">
export interface Data {
	readonly user: {
		readonly id: string
		readonly name: string
		readonly bio: string
		readonly banner: string
		readonly avatar: string
		readonly badges: string[]
		readonly country: string
		readonly xp: number
		readonly friend_count: number
		readonly supporter_tier: number
		readonly bad_standing: boolean
		readonly verified: boolean
		readonly playtime: string
		readonly join_at: Date
	}

	readonly tetra_league: {
		readonly tr: number
		readonly glicko: number
		readonly rd: number
		readonly global_rank: number
		readonly country_rank: number
		readonly apm: number
		readonly pps: number
		readonly vs: number

		readonly statistic: {
			readonly total: number
			readonly wins: number
		}
	}

	readonly statistic: {
		readonly total: number
		readonly wins: number
	}

	readonly sprint: {
		readonly time: string
		readonly global_rank: number
		readonly play_at: Date
	}

	readonly blitz: {
		readonly score: number
		readonly global_rank: number
		readonly play_at: Date
	}

	readonly zen: {
		readonly score: number
		readonly level: number
	}
}
</script>

<script lang="ts" setup>
import { CheckCircleOutlined, ClockCircleOutlined, HeartFilled, StarFilled } from '@vicons/antd'
import { darkTheme } from 'naive-ui'
import logo from '@/assets/images/logos/tetrio.svg'
import { isEmpty, isNonNullish } from 'remeda'

const data: Data = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

const level = computed(() => {
	return Math.pow(data.user.xp / 500, 0.6) + data.user.xp / (5000 + Math.max(0, data.user.xp - 4000000) / 5000) + 1
})
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content class="p-2 max-w-1/2">
				<n-flex vertical>

					<!-- 顶部: 有头图 -->

					<div v-if="!isEmpty(data.user.banner)" class="relative">
						<n-image :src="data.user.banner" class="[&>img]:(w-full h-full)"/>

						<div class="absolute top-1/2 left-1/2 -translate-1/2 w-[99%]">
							<n-flex align="center" justify="space-between">
								<div class="bg-black rounded p-2 bg-opacity-80">
									<n-flex vertical>
										<n-flex align="center" size="small">
											<n-avatar :size="4 * 12" :src="data.user.avatar"/>

											<n-flex :size="0" vertical>
												<n-text class="text-8 fw-bold">{{ data.user.name }}</n-text>
												<n-text :depth="3" class="text-xs">{{ data.user.id }}</n-text>
											</n-flex>

											<n-image :src="(`https://tetr.io/res/flags/${data.user.country}.png`)"
													 :width="4 * 6"
													 class="rounded"/>

											<n-icon v-if="data.user.verified" :component="CheckCircleOutlined"
													:size="4 * 5"
													color="#9CCA95"/>
										</n-flex>

										<n-flex :size="0" align="center" justify="space-between">
											<n-flex :size="1" align="center">
												<n-icon :component="HeartFilled" :size="4 * 5"/>
												<n-text>{{ data.user.friend_count }}</n-text>
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

								<div class="bg-black rounded p-2 bg-opacity-80">
									<n-flex :size="1" align="center" vertical>
										<n-image :src="logo" :width="4 * 8"/>
										<n-text class="mt-2 fw-bold">TETR.IO</n-text>
									</n-flex>
								</div>
							</n-flex>
						</div>
					</div>

					<!-- 顶部: 无头图 -->

					<n-flex v-else align="center" justify="space-between">
						<n-flex vertical>
							<n-flex align="center" size="small">
								<n-avatar :size="4 * 12" :src="data.user.avatar"/>
								<n-text class="text-8 fw-bold">{{ data.user.name }}</n-text>

								<n-image :src="(`https://tetr.io/res/flags/${data.user.country}.png`)"
										 :width="4 * 6"
										 class="rounded"/>

								<n-icon v-if="data.user.verified" :component="CheckCircleOutlined"
										:size="4 * 5"
										color="#9CCA95"/>
							</n-flex>

							<n-flex :size="0" align="center" justify="space-between">
								<n-flex :size="0" align="center">
									<n-icon :component="HeartFilled" :size="4 * 5"/>
									<n-text>{{ data.user.friend_count }}</n-text>
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

						<n-flex :size="0" align="center" vertical>
							<n-image :src="logo" :width="4 * 8"/>
							<n-text class="mt-2 fw-bold">TETR.IO</n-text>
						</n-flex>
					</n-flex>

					<!-- Bad Standing -->

					<n-alert v-if="data.user.bad_standing" :show-icon="false" type="error">
						<div class="text-center">
							<n-flex :size="0" vertical>
								<n-text class="text-2xl fw-bold">坏的站立</n-text>
								<n-text class="my-2">近期有一次或多次违禁行为</n-text>
							</n-flex>
						</div>
					</n-alert>

					<!-- Bio -->

					<n-card v-if="!isEmpty(data.user.bio)" size="small">
						{{ data.user.bio }}
					</n-card>

					<n-divider class="!my-0">多人游戏</n-divider>

					<!-- 勋章 -->

					<n-card v-if="!isEmpty(data.user.badges)" size="small">
						<n-flex align="center" class="h-full" justify="center" vertical>
							<n-flex justify="center">
								<template v-for="badge in data.user.badges">
									<n-image :src="badge" :width="4 * 6"/>
								</template>
							</n-flex>
						</n-flex>
					</n-card>

					<n-grid :cols="2" :x-gap="10">
						<n-grid-item>
							<n-flex class="h-full" vertical>
								<!-- 等级 -->

								<n-card size="small">
									<n-flex vertical>
										<div class="text-center">
											<n-text class="fw-bold">
												{{ Math.trunc(level) }} 级 ({{ data.user.xp }} XP)
											</n-text>
										</div>

										<n-progress :percentage="Math.trunc((level % 1) * 100)"
													indicator-placement="inside"/>
									</n-flex>
								</n-card>

								<!-- 额外信息 -->

								<n-card class="h-full" size="small">
									<n-flex :size="0" align="center" class="h-full" justify="center" vertical>
										<n-flex :size="1" align="center" class="mb-5">
											<n-icon :component="ClockCircleOutlined" :size="4 * 6"/>
											<n-text>{{ data.user.playtime }}</n-text>
										</n-flex>

										<div class="text-center">
											<n-text :depth="3" class="text-sm">胜率: {{ data.statistic.wins }} /
												{{ data.statistic.total }}
												({{
													(data.statistic.wins / data.statistic.total * 100).toFixed(2)
												}}%)
											</n-text>
										</div>

										<div class="text-center">
											<n-text :depth="3" class="text-sm">
												注册时间: {{ new Date(data.user.join_at).toLocaleString() }}
											</n-text>
										</div>
									</n-flex>
								</n-card>
							</n-flex>
						</n-grid-item>

						<n-grid-item>
							<n-flex vertical>
								<n-card size="small">
									<n-flex :size="0" vertical>
										<n-flex align="center" justify="space-between">

											<!-- Tetra League -->

											<n-flex :size="0" align="center">
												<n-image :width="4 * 15" src="https://tetr.io/res/league-ranks/x.png"/>

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
													<n-text class="text-xl fw-bold" type="info">
														{{
															data.user.country.toUpperCase()
														}}#{{ data.tetra_league.country_rank }}
													</n-text>
												</n-flex>
											</div>
										</n-flex>

										<div class="text-center">
											<n-text :depth="3" class="text-sm">胜率: {{
													data.tetra_league.statistic.wins
												}} /
												{{ data.tetra_league.statistic.total }}
												({{
													(data.tetra_league.statistic.wins / data.tetra_league.statistic.total * 100).toFixed(2)
												}}%)
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
														(x{{
															(data.tetra_league.apm / data.tetra_league.pps / 24).toFixed(2)
														}})
													</n-text>
												</n-flex>
											</n-statistic>

											<n-statistic label="VS">
												<n-flex :size="0" vertical>
													<n-text>{{ data.tetra_league.vs }}</n-text>
													<n-text :depth="3" class="text-sm">
														(x{{
															(data.tetra_league.vs / data.tetra_league.pps / 24).toFixed(2)
														}})
													</n-text>
												</n-flex>
											</n-statistic>
										</n-flex>
									</div>
								</n-card>
							</n-flex>
						</n-grid-item>
					</n-grid>

					<n-divider class="!my-0">单人游戏</n-divider>

					<n-grid :cols="2" :x-gap="10">
						<n-grid-item>
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
						</n-grid-item>

						<n-grid-item>
							<n-card size="small" title="Blitz">
								<n-flex align="center" justify="space-between">
									<n-flex :size="0" vertical>
										<n-text class="text-3xl fw-bold">{{ data.blitz.score }}</n-text>

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
						</n-grid-item>
					</n-grid>

					<n-card size="small" title="Zen">
						<n-flex align="center" justify="space-between">
							<n-text class="text-3xl fw-bold">{{ data.zen.score }}</n-text>
							<n-text :depth="3" class="text-3xl fw-bold">Level {{ data.zen.level }}</n-text>
						</n-flex>
					</n-card>

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