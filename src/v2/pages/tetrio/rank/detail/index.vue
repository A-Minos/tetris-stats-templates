<script lang="ts">
import type { User } from '@/v2/types/tetrio'
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly name: User['league']['rank']
	readonly trending: number
	readonly require_tr: number
	readonly players: number

	readonly minimum_data: {
		readonly apm: number
		readonly pps: number
		readonly vs: number
		readonly apl: number
		readonly adpl: number
		readonly apm_holder: string
		readonly pps_holder: string
		readonly vs_holder: string
	}

	readonly average_data: {
		readonly apm: number
		readonly pps: number
		readonly vs: number
		readonly apl: number
		readonly adpl: number
		readonly apm_holder: string
		readonly pps_holder: string
		readonly vs_holder: string
	}

	readonly maximum_data: {
		readonly apm: number
		readonly pps: number
		readonly vs: number
		readonly apl: number
		readonly adpl: number
		readonly apm_holder: string
		readonly pps_holder: string
		readonly vs_holder: string
	}

	readonly updated_at: BackendTime
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import rank_info from '@/v2/pages/tetrio/rank/detail/_info.vue'
import rank_statistic from '@/v2/pages/tetrio/rank/detail/_statistic.vue'
import rank_trending from '@/v2/pages/tetrio/rank/detail/_trending.vue'
</script>

<template>
	<layout content_class="max-w-320">
		<n-card size="small">
			<n-flex vertical>
				<n-flex justify="space-between">
					<rank_info :name="data.name" :players="data.players" :require_tr="data.require_tr"/>
					<rank_trending :value="data.trending"/>
				</n-flex>

				<n-flex justify="center">
					<n-card class="w-fit text-center" size="small" title="最低数据">
						<rank_statistic :adpl="data.minimum_data.adpl" :apl="data.minimum_data.apl"
										:apm="data.minimum_data.apm" :apm_holder="data.minimum_data.apm_holder"
										:pps="data.minimum_data.pps" :pps_holder="data.minimum_data.pps_holder"
										:vs="data.minimum_data.vs" :vs_holder="data.minimum_data.vs_holder"/>
					</n-card>

					<n-card class="w-fit text-center" size="small" title="平均数据">
						<rank_statistic :adpl="data.average_data.adpl" :apl="data.average_data.apl"
										:apm="data.average_data.apm" :apm_holder="data.average_data.apm_holder"
										:pps="data.average_data.pps" :pps_holder="data.average_data.pps_holder"
										:vs="data.average_data.vs" :vs_holder="data.average_data.vs_holder"/>
					</n-card>

					<n-card class="w-fit text-center" size="small" title="最高数据">
						<rank_statistic :adpl="data.maximum_data.adpl" :apl="data.maximum_data.apl"
										:apm="data.maximum_data.apm" :apm_holder="data.maximum_data.apm_holder"
										:pps="data.maximum_data.pps" :pps_holder="data.maximum_data.pps_holder"
										:vs="data.maximum_data.vs" :vs_holder="data.maximum_data.vs_holder"/>
					</n-card>
				</n-flex>

				<div class="text-center">
					<n-text :depth="3">
						更新时间: {{ new Date(data.updated_at).toLocaleString('zh-CN') }}
					</n-text>
				</div>
			</n-flex>
		</n-card>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>