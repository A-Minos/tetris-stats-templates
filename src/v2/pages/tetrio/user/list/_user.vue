<script lang="ts" setup>
import AvatarCard from '@/shared/components/avatar.vue'
import type AvatarType from '@/shared/schemas/avatar.ts'
import country from '@/v2/components/common/country.vue'
import { calculateXpLevel } from '@/v2/core/utils/xp.ts'
import { isNonNullish } from 'remeda'

const props = defineProps<{
	readonly index: number | null

	readonly id: string
	readonly name: string
	readonly avatar: AvatarType
	readonly country: string | null
	readonly xp: number
}>()
</script>

<template>
	<n-flex align="center" size="small">
		<template v-if="isNonNullish(index)">
			<n-text class="text-4 fw-bold" type="info">#{{ index }}</n-text>
		</template>

		<avatar-card :avatar="avatar" class="[&,&>img]:size-12"/>

		<n-flex :size="0" vertical>
			<n-text class="text-(5 current) leading-none fw-bold">
				{{ name }}
			</n-text>

			<n-text :depth="3" class="text-xs">{{ id }}</n-text>

			<n-text :depth="3" class="text-2">
				{{ Math.trunc(calculateXpLevel(xp)) }} 级
				({{ new Intl.NumberFormat('zh-CN').format(xp) }} XP)
			</n-text>
		</n-flex>

		<n-flex align="center" size="small" vertical>
			<template v-if="isNonNullish(props.country)">
				<country :code="props.country" class="[&>img]:(h-5) rounded-sm"/>
			</template>
		</n-flex>
	</n-flex>
</template>