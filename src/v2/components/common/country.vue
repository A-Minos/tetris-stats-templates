<script lang="ts" setup>

const props = defineProps<{
	readonly code: string
}>()

const isTW = computed(() => {
	return props.code.toLowerCase() === 'tw'
})

const url = computed(() => {
	let code = props.code.toLowerCase()

	if (isTW.value) {
		code = 'cn'
	}

	return `https://tetr.io/res/flags/${code}.png`
})
</script>

<template>
	<n-image :class="{ 'opacity-50': isTW }" :src="url"/>
</template>