<script lang="ts">
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly replay_id: string

	readonly games: {
		readonly user: {
			readonly id: string
			readonly name: string
		}

		readonly points: number

		readonly average_data: {
			readonly pps: number
			readonly apm: number
			readonly apl: number
			readonly vs: number
			readonly adpl: number
		}

		readonly data: {
			readonly pps: number
			readonly apm: number
			readonly apl: number
			readonly vs: number
			readonly adpl: number
		}[]

		readonly handling: {
			readonly arr: number
			readonly das: number
			readonly sdf: number
		}
	}[]

	readonly play_at: BackendTime
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

const winner_user_id = computed(() => {
	return data.games.sort(game => {
		return game.points
	})[0].user.id
})
</script>

<template>
	<layout content_class="max-w-320">
		<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
			<n-grid-item v-for="game in data.games">
				<n-card :class="(winner_user_id === game.user.id ? 'bg-yellow bg-opacity-50' : 'bg-red bg-opacity-50')"
						class="text-center" size="small">
					<n-flex :size="0" vertical>
						<n-flex align="center" justify="space-evenly">
							<div class="text-left">
								<n-flex :size="0" vertical>
									<n-text class="text-8 fw-bold" type="success">{{ game.user.name }}</n-text>
									<n-text :depth="3" class="text-4 leading-none">{{ game.user.id }}</n-text>
								</n-flex>
							</div>

							<n-text class="text-10">{{ game.points }}</n-text>
						</n-flex>

						<n-divider class="!mt-2 !mb-0"/>

						<div class="scale-75">
							<n-flex justify="space-evenly">
								<n-statistic :value="game.average_data.pps" label="PPS"/>

								<n-statistic label="APM">
									<n-flex :size="0" vertical>
										<n-text>{{ game.average_data.apm }}</n-text>

										<n-text :depth="3" class="text-sm">
											(x{{ game.average_data.apl }})
										</n-text>
									</n-flex>
								</n-statistic>

								<n-statistic label="VS">
									<n-flex :size="0" vertical>
										<n-text>{{ game.average_data.vs }}</n-text>

										<n-text :depth="3" class="text-sm">
											(x{{ game.average_data.adpl }})
										</n-text>
									</n-flex>
								</n-statistic>
							</n-flex>
						</div>
					</n-flex>
				</n-card>
			</n-grid-item>
		</n-grid>

		<div class="text-6">
			<n-flex justify="space-evenly">
				<div class="text-center">
					回放 ID
				</div>

				<div class="text-center">
					r:{{ data.replay_id }}
				</div>
			</n-flex>
		</div>

		<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
			<n-grid-item v-for="game in data.games">
				<n-grid :cols="1" :x-gap="10" :y-gap="10">
					<n-grid-item v-for="data in game.data">
						<n-card class="text-center" size="small">
							<n-flex :size="0" vertical>
								<n-flex justify="space-evenly">
									<n-statistic :value="data.pps" label="PPS"/>

									<n-statistic label="APM">
										<n-flex :size="0" vertical>
											<n-text>{{ data.apm }}</n-text>

											<n-text :depth="3" class="text-sm">
												(x{{ data.apl }})
											</n-text>
										</n-flex>
									</n-statistic>

									<n-statistic label="VS">
										<n-flex :size="0" vertical>
											<n-text>{{ data.vs }}</n-text>

											<n-text :depth="3" class="text-sm">
												(x{{ data.adpl }})
											</n-text>
										</n-flex>
									</n-statistic>
								</n-flex>
							</n-flex>
						</n-card>
					</n-grid-item>
				</n-grid>
			</n-grid-item>
		</n-grid>

		<n-grid :cols="data.games.length" :x-gap="10" :y-gap="10">
			<n-grid-item v-for="game in data.games">
				<n-card class="text-center bg-sky bg-opacity-50" size="small">
					<n-flex justify="space-evenly">
						<n-statistic :value="game.handling.arr" label="ARR"/>
						<n-statistic :value="(`${game.handling.das}F`)" label="DAS"/>
						<n-statistic :value="game.handling.sdf >= 41 ? '∞' : game.handling.sdf" label="SDF"/>
					</n-flex>
				</n-card>
			</n-grid-item>
		</n-grid>

		<powered/>
	</layout>
</template>