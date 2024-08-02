<script lang="ts">
import { ValidRank } from "@/shared/schemas/rank";
import { z } from "zod";

const SpecialData = z.object({
	apm: z.number(),
	pps: z.number(),
	lpm: z.number(),
	vs: z.number(),
	adpm: z.number(),
	apl: z.number().nullable(),
	adpl: z.number().nullable(),
	apm_holder: z.string().nullable(),
	pps_holder: z.string().nullable(),
	vs_holder: z.string().nullable(),
});

const Data = z
	.object({
		name: ValidRank,
		trending: z.number(),
		require_tr: z.number(),
		players: z.number(),

		minimum_data: SpecialData,
		average_data: SpecialData,
		maximum_data: SpecialData,

		updated_at: z.coerce.date(),
	})
	.strict()
	.readonly();

export type Data = z.infer<typeof Data>;
const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>("template#data")!.innerHTML.trim()));
</script>

<script lang="ts" setup>
import powered from "@/v2/components/common/footer.vue";
import layout from "@/v2/components/common/layout.vue";

import rank_card from "@/v2/pages/tetrio/rank/detail/_card.vue";
import rank_info from "@/v2/pages/tetrio/rank/detail/_info.vue";
import rank_statistic from "@/v2/pages/tetrio/rank/detail/_statistic.vue";
import rank_trending from "@/v2/pages/tetrio/rank/detail/_trending.vue";
</script>

<template>
	<layout content_class="max-w-320">
		<rank_card :name="data.name" size="small">
			<n-flex vertical>
				<n-flex justify="space-between">
					<rank_info :name="data.name" :players="data.players" :require_tr="data.require_tr" />
					<rank_trending :value="data.trending" />
				</n-flex>

				<n-flex justify="center">
					<n-card class="w-fit text-center" size="small" title="最低数据">
						<rank_statistic
							:adpl="data.minimum_data.adpl"
							:adpm="data.minimum_data.adpm"
							:apl="data.minimum_data.apl"
							:apm="data.minimum_data.apm"
							:apm_holder="data.minimum_data.apm_holder"
							:lpm="data.minimum_data.lpm"
							:pps="data.minimum_data.pps"
							:pps_holder="data.minimum_data.pps_holder"
							:vs="data.minimum_data.vs"
							:vs_holder="data.minimum_data.vs_holder"
						/>
					</n-card>

					<n-card class="w-fit text-center" size="small" title="平均数据">
						<rank_statistic
							:adpl="data.average_data.adpl"
							:adpm="data.average_data.adpm"
							:apl="data.average_data.apl"
							:apm="data.average_data.apm"
							:apm_holder="data.average_data.apm_holder"
							:lpm="data.average_data.lpm"
							:pps="data.average_data.pps"
							:pps_holder="data.average_data.pps_holder"
							:vs="data.average_data.vs"
							:vs_holder="data.average_data.vs_holder"
						/>
					</n-card>

					<n-card class="w-fit text-center" size="small" title="最高数据">
						<rank_statistic
							:adpl="data.maximum_data.adpl"
							:adpm="data.maximum_data.adpm"
							:apl="data.maximum_data.apl"
							:apm="data.maximum_data.apm"
							:apm_holder="data.maximum_data.apm_holder"
							:lpm="data.maximum_data.lpm"
							:pps="data.maximum_data.pps"
							:pps_holder="data.maximum_data.pps_holder"
							:vs="data.maximum_data.vs"
							:vs_holder="data.maximum_data.vs_holder"
						/>
					</n-card>
				</n-flex>

				<div class="text-center">
					<n-text :depth="3"> 更新时间: {{ data.updated_at.toLocaleString("zh-CN") }} </n-text>
				</div>
			</n-flex>
		</rank_card>

		<powered />
	</layout>
</template>

<style lang="scss">
@import "@/v2/styles/main";
</style>
