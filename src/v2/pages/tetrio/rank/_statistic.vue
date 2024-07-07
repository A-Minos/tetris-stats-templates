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
	<n-flex :size="0" vertical>
		<div class="text-center w-80">
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

				<n-flex :size="0" vertical>
					<n-text :depth="3">VS</n-text>
					<n-text class="text-5 leading-none">{{ vs }}</n-text>
					<n-text :depth="3" class="text-2">(x{{ adpl }})</n-text>
				</n-flex>
			</n-flex>
		</div>
	</n-flex>
</template>