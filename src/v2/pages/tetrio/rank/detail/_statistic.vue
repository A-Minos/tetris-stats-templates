<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly pps: number
	readonly lpm: number
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
	<div class="w-80 text-left">
		<n-list>
			<n-list-item>
				<n-flex align="center" justify="space-between">
					<n-flex :size="0" vertical>
						<n-text type="info">L'PM: {{ lpm }}</n-text>
						<n-text type="info">PPS: {{ pps }}</n-text>
					</n-flex>

					<n-text type="success">{{ pps_holder }}</n-text>
				</n-flex>
			</n-list-item>

			<n-list-item>
				<n-flex align="center" justify="space-between">
					<n-flex size="small">
						<n-text type="info">APM: {{ apm }}</n-text>
						<n-text v-if="isNonNullish(apl)" :depth="3" class="text-2">(x{{ apl }})</n-text>
					</n-flex>

					<n-text type="success">{{ apm_holder }}</n-text>
				</n-flex>
			</n-list-item>

			<n-list-item>
				<n-flex align="center" justify="space-between">
					<n-flex align="center" size="small">
						<n-flex :size="0" vertical>
							<n-text type="info">ADPM: {{ adpm }}</n-text>
							<n-text type="info">VS: {{ vs }}</n-text>
						</n-flex>

						<n-text v-if="isNonNullish(adpl)" :depth="3" class="text-2">(x{{ adpl }})</n-text>
					</n-flex>

					<n-text type="success">{{ vs_holder }}</n-text>
				</n-flex>
			</n-list-item>
		</n-list>
	</div>
</template>