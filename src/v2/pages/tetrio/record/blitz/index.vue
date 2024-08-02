<script lang="ts">
import { z } from 'zod'
import Data from '../schemas/data'
import Statistic from '../schemas/statistic'
import Type from '../schemas/type'

const BlitzData = Data.extend({
	statistic: Statistic.extend({ spp: z.number(), level: z.number() })
})
	.strict()
	.readonly()

export type BlitzData = z.infer<typeof BlitzData>;
const data = BlitzData.parse(
	JSON.parse(document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim())
)
</script>

<script lang="ts" setup>
import powered from '@/v2/components/common/footer.vue'
import layout from '@/v2/components/common/layout.vue'

import blitz_result from '@/v2/pages/tetrio/record/blitz/_result.vue'
import blitz_sb from '@/v2/pages/tetrio/record/blitz/_statistic-block.vue'
import blitz_sc from '@/v2/pages/tetrio/record/blitz/_statistic-clear.vue'
import blitz_sf from '@/v2/pages/tetrio/record/blitz/_statistic-finesse.vue'
import blitz_sk from '@/v2/pages/tetrio/record/blitz/_statistic-key.vue'
import blitz_sm from '@/v2/pages/tetrio/record/blitz/_statistic-max.vue'
import blitz_sr from '@/v2/pages/tetrio/record/blitz/_statistic-replay.vue'
import blitz_user from '@/v2/pages/tetrio/record/blitz/_user.vue'
import { isNullish } from 'remeda'

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
		<blitz_result
			:is_best="data.type === Type.BEST || (data.type === Type.PERSONAL_BEST && data.personal_rank === 1)"
			:personal_rank="data.personal_rank"
			:play_at="data.play_at"
			:rank="data.rank"
			:score="data.statistic.score"
			:type="type"
			title="Blitz"
		/>

		<n-flex :wrap="false">
			<blitz_user :id="data.user.id" :name="data.user.name"/>

			<n-flex class="flex-1" vertical>
				<n-flex :wrap="false">
					<n-flex :wrap="false" class="w-1/2" vertical>
						<blitz_sk :keys="data.statistic.keys" :kpp="data.statistic.kpp" :kps="data.statistic.kps"/>
						<blitz_sm :btb="data.statistic.max.btb" :combo="data.statistic.max.combo"/>
						<blitz_sr :replay_id="data.replay_id"/>
					</n-flex>

					<blitz_sb
						:holds="data.statistic.holds"
						:level="data.statistic.level"
						:lines="data.statistic.lines"
						:lpm="data.statistic.lpm"
						:pieces="data.statistic.pieces"
						:pps="data.statistic.pps"
						:score="data.statistic.score"
						:spp="data.statistic.spp"
					/>

					<blitz_sc
						:all_clear="data.statistic.all_clear"
						:double="data.statistic.double"
						:quad="data.statistic.quad"
						:single="data.statistic.single"
						:triple="data.statistic.triple"
						:tspins="data.statistic.tspins"
					/>
				</n-flex>

				<blitz_sf :accuracy="data.statistic.finesse.accuracy" :faults="data.statistic.finesse.faults"/>
			</n-flex>
		</n-flex>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import "@/v2/styles/main";
</style>
