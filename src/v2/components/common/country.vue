<script lang="ts" setup>

const props = defineProps<{
	readonly code: string
}>()

const url = computed(() => {
	let code = props.code.toLowerCase()

	if (code === 'tw') {
		code = 'cn'
	}

	return `https://tetr.io/res/flags/${code}.png`
})
</script>

<template>
	<n-image :src="url"/>
</template>