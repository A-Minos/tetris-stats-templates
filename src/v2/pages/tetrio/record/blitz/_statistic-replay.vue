<script lang="ts" setup>
defineProps<{
	readonly replay_id: string
}>()
</script>

<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<n-flex justify="space-between">
				<n-text>回放 ID</n-text>
				<n-text>{{ replay_id }}</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>