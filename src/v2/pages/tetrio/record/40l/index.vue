<script lang="ts">
import type Avatar from '@/shared/types/avatar'
import type { BackendTime } from '@/v2/types/utils'

enum Type {
	BEST = 'best',
	PERSONAL_BEST = 'personal_best',
	RECENT = 'recent',
	DISPUTED = 'disputed'
}

const data: {
	readonly type: Type | null

	readonly user: {
		readonly id: string
		readonly name: string
		readonly avatar: Avatar
	}

	readonly time: string
	readonly replay_id: string
	readonly rank: number | null
	readonly personal_rank: number | null

	readonly statistic: {
		readonly keys: number
		readonly kpp: number
		readonly kps: number

		readonly max: {
			readonly combo: number
			readonly btb: number
		}

		readonly pieces: number
		readonly pps: number
		readonly lines: number
		readonly lpm: number
		readonly holds: number | null
		readonly score: number

		readonly single: number
		readonly double: number
		readonly triple: number
		readonly quad: number

		readonly tspins: {
			readonly total: number
			readonly single: number
			readonly double: number
			readonly triple: number

			readonly mini: {
				readonly total: number
				readonly single: number
				readonly double: number
			}
		}

		readonly all_clear: number

		readonly finesse: {
			readonly faults: number
			readonly accuracy: number
		}
	}

	readonly play_at: BackendTime
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import sprint_result from '@/v2/pages/tetrio/record/40l/_result.vue'
import sprint_user from '@/v2/pages/tetrio/record/40l/_user.vue'
import sprint_sk from '@/v2/pages/tetrio/record/40l/_statistic-key.vue'
import sprint_sm from '@/v2/pages/tetrio/record/40l/_statistic-max.vue'
import sprint_sr from '@/v2/pages/tetrio/record/40l/_statistic-replay.vue'
import sprint_sb from '@/v2/pages/tetrio/record/40l/_statistic-block.vue'
import sprint_sc from '@/v2/pages/tetrio/record/40l/_statistic-clear.vue'
import sprint_sf from '@/v2/pages/tetrio/record/40l/_statistic-finesse.vue'
import { isNullish } from 'remeda'

const title = computed(() => {
	if (data.statistic.tspins.double >= 20) {
		return '20TSD'
	}

	if (data.statistic.all_clear >= 10) {
		return '10PC'
	}

	return '40L'
})

const type = computed(() => {
	if (isNullish(data.type)) {
		return 'default'
	}

	if ([Type.BEST, Type.PERSONAL_BEST].includes(data.type)) {
		return 'warning'
	}

	if (data.type === Type.RECENT) {
		return 'info'
	}

	if (data.type === Type.DISPUTED) {
		return 'error'
	}

	return 'default'
})
</script>

<template>
	<layout content_class="max-w-320">
		<sprint_result
			:is_best="data.type === Type.BEST || (data.type === Type.PERSONAL_BEST && data.personal_rank === 1)"
			:personal_rank="data.personal_rank" :play_at="data.play_at" :rank="data.rank" :time="data.time"
			:title="title" :type="type"/>

		<n-flex :wrap="false">
			<sprint_user :id="data.user.id" :avatar="data.user.avatar" :name="data.user.name"/>

			<n-flex class="flex-1" vertical>
				<n-flex :wrap="false">
					<n-flex :wrap="false" class="w-1/2" vertical>
						<sprint_sk :keys="data.statistic.keys" :kpp="data.statistic.kpp" :kps="data.statistic.kps"/>
						<sprint_sm :btb="data.statistic.max.btb" :combo="data.statistic.max.combo"/>
					</n-flex>

					<sprint_sb :holds="data.statistic.holds" :lines="data.statistic.lines"
							   :lpm="data.statistic.lpm" :pieces="data.statistic.pieces" :pps="data.statistic.pps"
							   :score="data.statistic.score"/>

					<sprint_sc :all_clear="data.statistic.all_clear" :double="data.statistic.double"
							   :quad="data.statistic.quad" :single="data.statistic.single"
							   :triple="data.statistic.triple" :tspins="data.statistic.tspins"/>
				</n-flex>

				<n-flex :wrap="false">
					<sprint_sr :replay_id="data.replay_id"/>
					<sprint_sf :accuracy="data.statistic.finesse.accuracy" :faults="data.statistic.finesse.faults"/>
				</n-flex>
			</n-flex>
		</n-flex>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>