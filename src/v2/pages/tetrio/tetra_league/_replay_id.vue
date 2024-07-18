<script lang="ts" setup>
defineProps<{
	readonly replay_id: string
}>()
</script>

<template>
	<n-card class="text-5" size="small">
		<n-flex justify="space-evenly">
			<div class="text-center">
				回放 ID: r:{{ replay_id }}
			</div>
		</n-flex>
	</n-card>
</template>