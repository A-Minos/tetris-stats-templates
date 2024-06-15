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
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex vertical>
				<div class="text-center">
					<n-text class="fw-bold">
						{{ Math.trunc(level) }} 级 ({{ new Intl.NumberFormat('zh-CN').format(value) }} XP)
					</n-text>
				</div>

				<div class="w-full mx-auto">
					<n-progress :percentage="progress" indicator-placement="inside" indicator-text-color="white"/>
				</div>
			</n-flex>
		</div>
	</n-card>
</template>