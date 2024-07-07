<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly pps: number | null
	readonly apm: number | null
	readonly apl: number | null

	readonly vs: number | null
	readonly adpl: number | null
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="text-center w-80">
			<n-flex justify="space-between">
				<template v-if="isNonNullish(pps)">
					<n-flex :size="0" vertical>
						<n-text :depth="3">PPS</n-text>
						<n-text class="text-5 leading-none">{{ pps }}</n-text>
					</n-flex>
				</template>

				<template v-if="isNonNullish(apm)">
					<n-flex :size="0" vertical>
						<n-text :depth="3">APM</n-text>
						<n-text class="text-5 leading-none">{{ apm }}</n-text>

						<template v-if="isNonNullish(apl)">
							<n-text :depth="3" class="text-2">(x{{ apl }})</n-text>
						</template>
					</n-flex>
				</template>

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