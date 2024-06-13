<script lang="ts" setup>
defineProps<{
	readonly combo: number
	readonly btb: number
}>()
</script>

<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<n-flex justify="space-between">
				<n-text>最大连击</n-text>
				<n-text>{{ combo }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>最大 b2b</n-text>
				<n-text>{{ btb }}</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>