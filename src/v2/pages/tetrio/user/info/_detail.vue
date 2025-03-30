<script lang="ts" setup>
import { calculateXpLevel } from '@/v2/core/utils/xp'
import { ClockCircleOutlined } from '@vicons/antd'
import { formatDistanceToNow } from 'date-fns'
import { isNonNullish } from 'remeda'

const props = defineProps<{
	readonly statistic: {
		readonly total: number | null
		readonly wins: number | null
	} | null

	readonly xp: number

	readonly playtime: string | null
	readonly join_at: Date | null
}>()

const xp_level = computed(() => {
	return calculateXpLevel(props.xp)
})

const xp_progress = computed(() => {
	return Math.trunc((xp_level.value % 1) * 100)
})
</script>

<template>
	<n-card class="h-full" size="small">
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex :size="0" align="center" class="mb-5">
				<template v-if="isNonNullish(playtime)">
					<n-flex align="center" class="!gap-1">
						<n-icon :component="ClockCircleOutlined" class="text-5"/>
						<n-text>{{ playtime }}</n-text>
					</n-flex>
				</template>

				<template v-if="isNonNullish(playtime)">
					<n-divider vertical/>
				</template>

				<div class="flex flex-col justify-center items-center h-full">
					<n-flex vertical>
						<div class="text-center">
							<n-text class="fw-bold">
								{{ Math.trunc(xp_level) }} 级 ({{ new Intl.NumberFormat('zh-CN').format(xp_level) }} XP)
							</n-text>
						</div>

						<div class="w-full mx-auto">
							<n-progress :percentage="xp_progress" indicator-placement="inside"
										indicator-text-color="white"/>
						</div>
					</n-flex>
				</div>
			</n-flex>

			<template v-if="isNonNullish(statistic)">
				<div class="text-center">
					<n-text :depth="3" class="text-sm">
						<template v-if="isNonNullish(statistic.total) && isNonNullish(statistic.wins)">
							胜率: {{ statistic.wins }} / {{ statistic.total }} ({{
								((statistic.wins / statistic.total) * 100).toFixed(2)
							}}%)
						</template>

						<template v-else-if="isNonNullish(statistic.total)">游玩次数: {{ statistic.total }}</template>

						<template v-else-if="isNonNullish(statistic.wins)">胜场数: {{ statistic.wins }}</template>
					</n-text>
				</div>
			</template>

			<template v-if="isNonNullish(join_at)">
				<div class="text-center">
					<n-text :depth="3" class="text-sm">
						注册时间: {{ join_at.toLocaleString('zh-CN') }} ({{ formatDistanceToNow(join_at) }}前)
					</n-text>
				</div>
			</template>
		</div>
	</n-card>
</template>