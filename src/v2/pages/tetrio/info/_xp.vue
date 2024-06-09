<script lang="ts" setup>
const props = defineProps<{
	readonly value: number
}>()

const level = computed(() => {
	return Math.pow(props.value / 500, 0.6) + props.value / (5000 + Math.max(0, props.value - 4000000) / 5000) + 1
})

const progress = computed(() => {
	return Math.trunc((level.value % 1) * 100)
})
</script>

<template>
	<n-card size="small">
		<n-flex vertical>
			<div class="text-center">
				<n-text class="fw-bold">
					{{ Math.trunc(level) }} 级 ({{ new Intl.NumberFormat('zh-CN').format(value) }} XP)
				</n-text>
			</div>

			<div class="w-1/2 mx-auto">
				<n-progress :percentage="progress" indicator-placement="inside"/>
			</div>
		</n-flex>
	</n-card>
</template>