<script lang="ts">
import type Avatar from '@/shared/types/avatar'
import type { User } from '@/v2/types/tetrio'
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly user: {
		readonly id: string
		readonly name: string
		readonly avatar: Avatar

		readonly tetra_league: {
			readonly rank: User['league']['rank']
			readonly tr: number
		} | null
	}

	readonly time: string
	readonly rank: number | null

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
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import sprint_result from '@/v2/pages/tetrio/record/40l/_result.vue'
import sprint_user from '@/v2/pages/tetrio/record/40l/_user.vue'
import sprint_sk from '@/v2/pages/tetrio/record/40l/_statistic-key.vue'
import sprint_sm from '@/v2/pages/tetrio/record/40l/_statistic-max.vue'
import sprint_sb from '@/v2/pages/tetrio/record/40l/_statistic-block.vue'
import sprint_sc from '@/v2/pages/tetrio/record/40l/_statistic-clear.vue'
import sprint_sf from '@/v2/pages/tetrio/record/40l/_statistic-finesse.vue'
</script>

<template>
	<layout content_class="max-w-320">
		<sprint_result :play_at="data.play_at" :rank="data.rank" :time="data.time"/>

		<n-flex :wrap="false">
			<sprint_user :id="data.user.id" :avatar="data.user.avatar" :name="data.user.name"
						 :tetra_league="data.user.tetra_league"/>

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

				<sprint_sf :accuracy="data.statistic.finesse.accuracy" :faults="data.statistic.finesse.faults"/>
			</n-flex>
		</n-flex>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>