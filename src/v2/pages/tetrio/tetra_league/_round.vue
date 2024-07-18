<script lang="ts" setup>
defineProps<{
	readonly pps: number
	readonly apm: number
	readonly apl: number
	readonly vs: number
	readonly adpl: number
}>()
</script>

<template>
	<n-card class="text-center" size="small">
		<n-flex :size="0" vertical>
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

				<n-statistic label="VS">
					<n-flex :size="0" vertical>
						<n-text>{{ vs }}</n-text>

						<n-text :depth="3" class="text-sm">
							(x{{ adpl }})
						</n-text>
					</n-flex>
				</n-statistic>
			</n-flex>
		</n-flex>
	</n-card>
</template>