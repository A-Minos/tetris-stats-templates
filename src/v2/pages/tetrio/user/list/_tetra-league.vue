<script lang="ts" setup>
import rank from '@/v2/components/common/rank.vue'
import tetra_rating from '@/v2/components/common/tetra_rating.vue'
import type { User } from '@/v2/types/tetrio'

import { isNonNullish } from 'remeda'

const props = defineProps<{
	readonly rank: User['league']['rank']
	readonly tr: number

	readonly glicko: number | null
	readonly rd: number | null
	readonly decaying: boolean
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<n-flex align="center" size="small">
			<rank :rank="props.rank" class="[&>img]:size-6"/>
			<n-text class="text-5 fw-bold">{{ tr }} TR</n-text>
		</n-flex>

		<template v-if="isNonNullish(glicko) && isNonNullish(rd)">
			<n-flex justify="end">
				<tetra_rating :decaying="decaying" :glicko="glicko" :rd="rd"/>
			</n-flex>
		</template>
	</n-flex>
</template>