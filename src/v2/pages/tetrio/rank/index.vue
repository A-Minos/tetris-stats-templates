<script lang="ts">
import { ValidRank } from "@/schemas/rank";
import { z } from "zod";

const Data = z
	.object({
		items: z.record(
			ValidRank,
			z.object({
				require_tr: z.number(),
				trending: z.number(),
				average_data: z.object({
					pps: z.number(),
					apm: z.number(),
					apl: z.number(),
					vs: z.number(),
					adpl: z.number(),
				}),
				players: z.number(),
			})
		),
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

import rank_card from "@/v2/pages/tetrio/rank/_card.vue";
import rank_info from "@/v2/pages/tetrio/rank/_info.vue";
import rank_players from "@/v2/pages/tetrio/rank/_players.vue";
import rank_statistic from "@/v2/pages/tetrio/rank/_statistic.vue";
</script>

<template>
	<layout content_class="max-w-320">
		<template v-for="(rank, name) in data.items">
			<rank_card :name="name" size="small" v-if="rank !== undefined">
				<n-flex justify="space-between">
					<rank_info :name="name" :require_tr="rank.require_tr" :trending="rank.trending" />

					<rank_statistic
						:adpl="rank.average_data.adpl"
						:apl="rank.average_data.apl"
						:apm="rank.average_data.apm"
						:pps="rank.average_data.pps"
						:vs="rank.average_data.vs"
					/>

					<rank_players :value="rank.players" />
				</n-flex>
			</rank_card>
		</template>

		<n-card size="small">
			<div class="text-center">
				<n-text class="text-xl" type="info"> 更新时间: {{ data.updated_at.toLocaleString("zh-CN") }} </n-text>
			</div>
		</n-card>

		<powered />
	</layout>
</template>

<style lang="scss">
@import "@/v2/styles/main";
</style>
