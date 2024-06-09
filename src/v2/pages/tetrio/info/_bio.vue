<script lang="ts" setup>
const props = defineProps<{
	readonly content: string
}>()

const text = computed(() => {
	const element = document.createElement('div')
	element.innerHTML = props.content
	return element.textContent
})
</script>

<template>
	<n-card size="small">
		{{ text }}
	</n-card>
</template>