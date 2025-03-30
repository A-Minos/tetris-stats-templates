<script lang="ts" setup>
import { formatDistanceToNow } from 'date-fns'
import { isNonNullish, isNullish } from 'remeda'

const props = defineProps<{
	readonly score: number
	readonly global_rank: number | null
	readonly country: string | null
	readonly country_rank: number | null
	readonly play_at: Date
}>()

const country_code = computed(() => {
	if (isNullish(props.country)) {
		return
	}

	return props.country.toUpperCase()
})
</script>

<template>
	<n-card size="small" title="Blitz">
		<n-flex align="center" justify="space-between">
			<n-flex :size="0" vertical>
				<n-text class="text-3xl fw-bold">
					{{ new Intl.NumberFormat('zh-CN').format(score) }}
				</n-text>

				<n-text :depth="3" class="text-sm">
					达成时间: {{ play_at.toLocaleString('zh-CN') }} ({{ formatDistanceToNow(play_at) }}前)
				</n-text>
			</n-flex>

			<div class="text-right">
				<n-flex :size="0" vertical>
					<template v-if="isNonNullish(global_rank)">
						<n-text class="text-sm fw-bold" type="success">
							#{{ global_rank }}
						</n-text>
					</template>

					<template v-if="isNonNullish(country) && isNonNullish(country_rank)">
						<n-text class="text-sm fw-bold" type="info">
							{{ country_code }}#{{ country_rank }}
						</n-text>
					</template>
				</n-flex>
			</div>
		</n-flex>
	</n-card>
</template>