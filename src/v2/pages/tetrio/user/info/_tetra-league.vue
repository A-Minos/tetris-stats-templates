<script lang="ts" setup>
import rank from '@/v2/components/common/rank.vue'
import tetra_rating from '@/v2/components/common/tetra_rating.vue'
import type { User } from '@/v2/types/tetrio'
import { isNonNullish, isNullish } from 'remeda'

const props = defineProps<{
	readonly rank: User['league']['rank']
	readonly tr: number

	readonly glicko: number | null
	readonly rd: number | null

	readonly country: string | null

	readonly global_rank: number | null
	readonly country_rank: number | null

	readonly pps: number | null

	readonly apm: number | null
	readonly apl: number | null

	readonly vs: number | null
	readonly adpl: number | null

	readonly statistic: {
		readonly total: number
		readonly wins: number
	} | null

	readonly decaying: boolean
	readonly highest_rank: User['league']['rank'] | null
}>()

const highest_rank_url = asyncComputed(async () => {
	if (props.highest_rank === 'x+') {
		return await import(`@/shared/assets/images/ranks/${props.highest_rank}.png?url`).then((module) => {
			return module.default
		})
	}
	return await import(`@/shared/assets/images/ranks/${props.highest_rank}.svg?url`)
		.then(module => {
			return module.default
		})
})

const country_code = computed(() => {
	if (isNullish(props.country)) {
		return
	}

	return props.country.toUpperCase()
})
</script>

<template>
	<n-flex :wrap="false">
		<n-card size="small">
			<n-flex :size="0" vertical>
				<n-flex align="center" justify="space-between">
					<n-flex align="center" size="small">
						<rank :rank="props.rank" class="[&>img]:size-15"/>

						<n-flex :size="0" vertical>
							<n-text class="text-2xl fw-bold">{{ tr }} TR</n-text>
							<tetra_rating :decaying="decaying" :glicko="glicko" :rd="rd"/>
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
							胜率: {{ statistic.wins }} / {{ statistic.total }}
							({{ (statistic.wins / statistic.total * 100).toFixed(2) }}%)
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
					<template v-if="isNonNullish(pps)">
						<n-statistic :value="pps" label="PPS"/>
					</template>

					<template v-if="isNonNullish(apm)">
						<n-statistic label="APM">
							<n-flex :size="0" vertical>
								<n-text>{{ apm }}</n-text>

								<template v-if="isNonNullish(apl)">
									<n-text :depth="3" class="text-sm">
										(x{{ apl }})
									</n-text>
								</template>
							</n-flex>
						</n-statistic>
					</template>

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