<script lang="ts" setup>
import type { TextProps } from 'naive-ui'

const props = defineProps<{
	readonly glicko: number
	readonly rd: number
	readonly decaying: boolean
}>()

const attributes = computed(() => {
	const result = {
		depth: 3 as TextProps['depth'],
		status: 'default',

		arrow: {
			depth: 3 as TextProps['depth'],
			status: 'default'
		}
	}

	if (props.decaying) {
		delete result.arrow.depth
		result.arrow.status = 'warning'

		if (props.rd >= 98) {
			result.arrow.status = 'error'
		}
	}

	if (props.rd >= 100) {
		delete result.depth
		result.status = 'error'
	}

	return result
})
</script>

<template>
	<n-flex :size="0">
		<n-text :depth="3">{{ glicko }}</n-text>
		<n-text :depth="3">±</n-text>

		<n-text :depth="attributes.depth" :type="attributes.status">{{ rd }}</n-text>

		<template v-if="decaying">
			<n-text :depth="attributes.arrow.depth" :type="attributes.arrow.status"
					class="text-4 font-[HUN]">
				Ƿ
			</n-text>
		</template>
	</n-flex>
</template>