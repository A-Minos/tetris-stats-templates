<script lang="ts" setup>

const props = defineProps<{
	readonly code: string
}>()

const isSensitive = computed(() => {
	return ['tw', 'hk'].includes(props.code.toLowerCase())
})

const url = computed(() => {
	return `https://tetr.io/res/flags/${isSensitive.value ? 'cn' : props.code.toLowerCase()}.png`
})
</script>

<template>
	<n-image :class="{ 'opacity-50': isSensitive }" :src="url"/>
</template>