<script lang="ts" setup>
import type { BackendTime } from '@/v2/types/utils'
import { isNonNullish } from 'remeda'

defineProps<{
	readonly type: 'warning' | 'info' | 'error' | 'default'
	readonly is_best: boolean
	readonly title: string

	readonly score: number
	readonly rank: number | null
	readonly personal_rank: number | null
	readonly play_at: BackendTime
}>()
</script>

<template>
	<n-alert :show-icon="false" :title="title" :type="type">
		<n-flex vertical>
			<div class="text-(center 5xl) fw-bold">
				<n-text :class="{ 'text-(yellow shadow-[0_0_1rem])': is_best }">
					{{ new Intl.NumberFormat('zh-CN').format(score) }}
				</n-text>
			</div>

			<n-flex justify="center" size="small">
				<template v-if="isNonNullish(rank)">
					<div class="text-center text-3xl">
						<n-text type="success">#{{ rank }}</n-text>
					</div>
				</template>

				<template v-if="isNonNullish(personal_rank)">
					<div class="text-center text-3xl">
						<n-text type="warning">PB#{{ personal_rank }}</n-text>
					</div>
				</template>
			</n-flex>

			<div class="text-right">
				<n-text :depth="3">{{ new Date(play_at).toLocaleString('zh-CN') }}</n-text>
			</div>
		</n-flex>
	</n-alert>
</template>