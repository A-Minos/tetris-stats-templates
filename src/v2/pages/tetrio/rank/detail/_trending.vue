<script lang="ts" setup>
defineProps<{
	readonly value: number
}>()
</script>

<template>
	<n-text :type="(value >= 0 ? 'success' : 'error')" class="ml-2 fw-bold">
		{{ value >= 0 ? '↑' : '↓' }}{{ Math.abs(value) }}
	</n-text>
</template>