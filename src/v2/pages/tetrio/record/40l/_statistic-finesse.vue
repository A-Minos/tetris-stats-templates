<script lang="ts" setup>
defineProps<{
	readonly faults: number
	readonly accuracy: number
}>()
</script>

<template>
	<n-card size="small">
		<n-flex justify="space-between">
			<n-text>极简</n-text>

			<n-flex :size="0" align="center">
				<n-text>{{ faults }} 多余操作</n-text>
				<n-text :depth="3" class="ml-1 text-xs">({{ accuracy }}%)</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>