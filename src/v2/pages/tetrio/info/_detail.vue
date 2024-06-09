<script lang="ts" setup>
import type { BackendTime } from '@/v2/types/utils'
import { ClockCircleOutlined } from '@vicons/antd'
import { isNonNullish } from 'remeda'

defineProps<{
	readonly statistic: {
		readonly total: number | null
		readonly wins: number | null
	} | null

	readonly playtime: string | null
	readonly join_at: BackendTime | null
}>()
</script>

<template>
	<n-card class="h-full" size="small">
		<div class="flex flex-col justify-center items-center h-full">
			<template v-if="isNonNullish(playtime)">
				<n-flex align="center" class="!gap-1 mb-5">
					<n-icon :component="ClockCircleOutlined" class="text-5"/>
					<n-text>{{ playtime }}</n-text>
				</n-flex>
			</template>

			<template v-if="isNonNullish(statistic)">
				<div class="text-center">
					<n-text :depth="3" class="text-sm">
						<template v-if="isNonNullish(statistic.total) && isNonNullish(statistic.wins)">
							胜率: {{ statistic.total }} / {{ statistic.wins }}
							({{ (statistic.wins / statistic.total).toFixed(2) }}%)
						</template>

						<template v-else-if="isNonNullish(statistic.total)">
							游玩次数: {{ statistic.total }}
						</template>

						<template v-else-if="isNonNullish(statistic.wins)">
							胜场数: {{ statistic.wins }}
						</template>
					</n-text>
				</div>
			</template>

			<template v-if="isNonNullish(join_at)">
				<div class="text-center">
					<n-text :depth="3" class="text-sm">
						注册时间: {{ new Date(join_at).toLocaleString('zh-CN') }}
					</n-text>
				</div>
			</template>
		</div>
	</n-card>
</template>