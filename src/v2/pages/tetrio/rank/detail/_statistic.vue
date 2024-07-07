<script lang="ts" setup>

defineProps<{
	readonly pps: number
	readonly apm: number
	readonly apl: number
	readonly vs: number
	readonly adpl: number
	readonly apm_holder: string
	readonly pps_holder: string
	readonly vs_holder: string
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="text-center w-80">
			<n-flex justify="space-around">
				<n-flex :size="0" vertical>
					<n-text :depth="3">PPS</n-text>
					<n-text class="text-5 leading-none">{{ pps }}</n-text>
					<n-text class="text-2" type="success">{{ pps_holder }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">APM</n-text>
					<n-text class="text-5 leading-none">{{ apm }}</n-text>
					<n-text :depth="3" class="text-2">(x{{ apl }})</n-text>
					<n-text class="text-2" type="success">{{ apm_holder }}</n-text>
				</n-flex>

				<n-flex :size="0" vertical>
					<n-text :depth="3">VS</n-text>
					<n-text class="text-5 leading-none">{{ vs }}</n-text>
					<n-text :depth="3" class="text-2">(x{{ adpl }})</n-text>
					<n-text class="text-2" type="success">{{ vs_holder }}</n-text>
				</n-flex>
			</n-flex>
		</div>
	</n-flex>
</template>