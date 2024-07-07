<script lang="ts">
import type { User } from '@/v2/types/tetrio'
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly items: Record<User['league']['rank'], {
		readonly require_tr: number
		readonly trending: number

		readonly average_data: {
			readonly pps: number
			readonly apm: number
			readonly apl: number
			readonly vs: number
			readonly adpl: number
		}

		readonly players: number
	}>

	readonly updated_at: BackendTime
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import rank_info from '@/v2/pages/tetrio/rank/_info.vue'
import rank_statistic from '@/v2/pages/tetrio/rank/_statistic.vue'
import rank_players from '@/v2/pages/tetrio/rank/_players.vue'
</script>

<template>
	<layout content_class="max-w-320">
		<template v-for="(rank, name) in data.items">
			<n-card size="small">
				<n-flex justify="space-between">
					<rank_info :name="name" :require_tr="rank.require_tr" :trending="rank.trending"/>

					<rank_statistic :adpl="rank.average_data.adpl" :apl="rank.average_data.apl"
									:apm="rank.average_data.apm" :pps="rank.average_data.pps"
									:vs="rank.average_data.vs"/>

					<rank_players :value="rank.players"/>
				</n-flex>
			</n-card>
		</template>

		<n-card size="small">
			<div class="text-center">
				<n-text class="text-xl" type="info">
					更新时间: {{ new Date(data.updated_at).toLocaleString('zh-CN') }}
				</n-text>
			</div>
		</n-card>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>