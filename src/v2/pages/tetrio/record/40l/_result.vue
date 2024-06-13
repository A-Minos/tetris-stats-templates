<script lang="ts" setup>
import type { BackendTime } from '@/v2/types/utils'
import { isNonNullish } from 'remeda'

defineProps<{
	readonly time: string
	readonly rank: number | null
	readonly play_at: BackendTime
}>()
</script>

<template>
	<n-alert :show-icon="false" title="40L" type="warning">
		<n-flex vertical>
			<div class="text-(center 5xl) fw-bold">
				{{ time }}
			</div>

			<template v-if="isNonNullish(rank)">
				<div class="text-center text-3xl">
					<n-text type="success">#{{ rank }}</n-text>
				</div>
			</template>

			<div class="text-right">
				<n-text :depth="3">{{ new Date(play_at).toLocaleString('zh-CN') }}</n-text>
			</div>
		</n-flex>
	</n-alert>
</template>