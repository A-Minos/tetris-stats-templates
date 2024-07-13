<script lang="ts" setup>

import { isNonNullish } from 'remeda'

defineProps<{
	readonly pps: number
	readonly apm: number
	readonly vs: number
	readonly adpm: number
	readonly apl: number | null
	readonly adpl: number | null
	readonly apm_holder: string | null
	readonly pps_holder: string | null
	readonly vs_holder: string | null
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="text-center w-80">
			<n-flex justify="space-around">
				<n-flex :size="0" vertical>
					<n-text :depth="3">PPS</n-text>
					<n-text class="text-5 leading-none">{{ pps }}</n-text>
					<n-text v-if="isNonNullish(pps_holder)" class="text-2" type="success">{{ pps_holder }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">APM</n-text>
					<n-text class="text-5 leading-none">{{ apm }}</n-text>
					<n-text v-if="isNonNullish(apl)" :depth="3" class="text-2">(x{{ apl }})</n-text>
					<n-text v-if="isNonNullish(apm_holder)" class="text-2" type="success">{{ apm_holder }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">VS</n-text>
					<n-text class="text-5 leading-none">{{ vs }}</n-text>
					<n-text v-if="isNonNullish(adpl)" :depth="3" class="text-2">(x{{ adpl }})</n-text>
					<n-text v-if="isNonNullish(vs_holder)" class="text-2" type="success">{{ vs_holder }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">ADPM</n-text>
					<n-text class="text-5 leading-none">{{ adpm }}</n-text>
				</n-flex>
			</n-flex>
		</div>
	</n-flex>
</template>