<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly pps: number
	readonly apm: number
	readonly apl: number

	readonly vs: number | null
	readonly adpl: number | null
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="text-center w-60">
			<n-flex justify="space-between">
				<n-flex :size="0" vertical>
					<n-text :depth="3">PPS</n-text>
					<n-text class="text-5 leading-none">{{ pps }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">APM</n-text>
					<n-text class="text-5 leading-none">{{ apm }}</n-text>
					<n-text :depth="3" class="text-2">(x{{ apl }})</n-text>
				</n-flex>

				<template v-if="isNonNullish(vs)">
					<n-flex :size="0" vertical>
						<n-text :depth="3">VS</n-text>
						<n-text class="text-5 leading-none">{{ vs }}</n-text>

						<template v-if="isNonNullish(adpl)">
							<n-text :depth="3" class="text-2">(x{{ adpl }})</n-text>
						</template>
					</n-flex>
				</template>
			</n-flex>
		</div>
	</n-flex>
</template>