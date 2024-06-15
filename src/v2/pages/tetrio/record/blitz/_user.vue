<script lang="ts" setup>
import type Avatar from '@/shared/types/avatar'
import avatar from '@/v2/components/common/avatar.vue'
import rank from '@/v2/components/common/rank.vue'
import type { User } from '@/v2/types/tetrio'
import { isNonNullish } from 'remeda'

const props = defineProps<{
	readonly id: string
	readonly name: string
	readonly avatar: Avatar

	readonly tetra_league: {
		readonly rank: User['league']['rank']
		readonly tr: number
	} | null
}>()
</script>

<template>
	<n-card class="w-fit">
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex align="center" vertical>
				<avatar :avatar="props.avatar" class="[&,&>img]:size-32"/>

				<n-text class="text-(6 current) fw-bold leading-none">
					{{ name }}
				</n-text>

				<n-text :depth="3" class="text-xs">{{ id }}</n-text>

				<template v-if="isNonNullish(tetra_league)">
					<div class="mt-2.5">
						<n-flex align="center" justify="center" :size="1">
							<rank :rank="tetra_league.rank" class="[&>img]:size-8"/>
							<n-text class="text-2xl fw-bold">{{ tetra_league.tr }} TR</n-text>
						</n-flex>
					</div>
				</template>
			</n-flex>
		</div>
	</n-card>
</template>