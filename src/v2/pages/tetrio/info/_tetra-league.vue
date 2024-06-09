<script lang="ts" setup>
import { isNonNullish, isNullish } from 'remeda'

const props = defineProps<{
	readonly rank: string
	readonly tr: number

	readonly glicko: number
	readonly rd: number

	readonly country: string | null

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
	} | null

	readonly highest_rank: string | null
}>()

const rank_url = computed(() => {
	return `https://tetr.io/res/league-ranks/${props.rank}.png`
})

const highest_rank_url = computed(() => {
	return `https://tetr.io/res/league-ranks/${props.highest_rank}.png`
})

const country_code = computed(() => {
	if (isNullish(props.country)) {
		return 'NA'
	}

	return props.country.toUpperCase()
})
</script>

<template>
	<n-flex vertical>
		<n-card size="small">
			<n-flex :size="0" vertical>
				<n-flex align="center" justify="space-between">
					<n-flex align="center" size="small">
						<n-image :src="rank_url" class="[&>img]:size-15"/>

						<n-flex :size="0" vertical>
							<n-text class="text-2xl fw-bold">{{ tr }} TR</n-text>

							<n-text :depth="3" class="text-sm">
								{{ glicko }}±{{ rd }}
							</n-text>
						</n-flex>
					</n-flex>

					<template v-if="[global_rank, country_rank].some(isNonNullish)">
						<div class="text-right">
							<n-flex :size="0" vertical>
								<template v-if="isNonNullish(global_rank)">
									<n-text class="text-sm fw-bold" type="success">
										#{{ global_rank }}
									</n-text>
								</template>

								<template v-if="isNonNullish(country) && isNonNullish(country_rank)">
									<n-text class="text-sm fw-bold" type="info">
										{{ country_code }}#{{ country_rank }}
									</n-text>
								</template>
							</n-flex>
						</div>
					</template>
				</n-flex>

				<n-flex :size="0" align="center" justify="center">
					<template v-if="isNonNullish(statistic)">
						<n-text :depth="3" class="text-sm">
							胜率: {{ statistic.total }} / {{ statistic.wins }}
							({{ (statistic.wins / statistic.total).toFixed(2) }}%)
						</n-text>

						<n-divider vertical/>
					</template>

					<template v-if="isNonNullish(highest_rank)">
						<n-text :depth="3">历史最高:</n-text>
						<n-image :src="highest_rank_url" class="[&>img]:size-4"/>
					</template>
				</n-flex>
			</n-flex>
		</n-card>

		<n-card size="small">
			<div class="text-center">
				<n-flex justify="space-evenly">
					<n-statistic :value="pps" label="PPS"/>

					<n-statistic label="APM">
						<n-flex :size="0" vertical>
							<n-text>{{ apm }}</n-text>

							<n-text :depth="3" class="text-sm">
								(x{{ apl }})
							</n-text>
						</n-flex>
					</n-statistic>

					<template v-if="isNonNullish(vs)">
						<n-statistic label="VS">
							<n-flex :size="0" vertical>
								<n-text>{{ vs }}</n-text>

								<template v-if="isNonNullish(adpl)">
									<n-text :depth="3" class="text-sm">
										(x{{ adpl }})
									</n-text>
								</template>
							</n-flex>
						</n-statistic>
					</template>
				</n-flex>
			</div>
		</n-card>
	</n-flex>
</template>