<script lang="ts" setup>
defineProps<{
	readonly keys: number
	readonly kpp: number
	readonly kps: number
}>()
</script>

<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<n-flex justify="space-between">
				<n-text>按键</n-text>
				<n-text>{{ keys }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>按键/块</n-text>
				<n-text>{{ kpp }}</n-text>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>按键/秒</n-text>
				<n-text>{{ kps }}</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>