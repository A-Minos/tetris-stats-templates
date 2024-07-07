<script lang="ts" setup>
defineProps<{
	readonly value: number
}>()
</script>

<template>
	<n-text class="text-xl">{{ value }} 玩家</n-text>
</template>