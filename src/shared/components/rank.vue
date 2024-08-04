<script lang="ts">
import { z } from 'zod'

export const ValidRank = z.union([
	z.literal('x'),
	z.literal('u'),
	z.literal('ss'),
	z.literal('s+'),
	z.literal('s'),
	z.literal('s-'),
	z.literal('a+'),
	z.literal('a'),
	z.literal('a-'),
	z.literal('b+'),
	z.literal('b'),
	z.literal('b-'),
	z.literal('c+'),
	z.literal('c'),
	z.literal('c-'),
	z.literal('d+'),
	z.literal('d')
])

export const Rank = z.union([
	ValidRank,
	z.literal('z')
])
</script>

<script lang="ts" setup>
const props = defineProps<{
	readonly rank: z.infer<typeof Rank>
}>()

const url = asyncComputed(async () => {
	const name = props.rank.toLowerCase()

	return await import(`@/shared/assets/images/ranks/${name}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<template v-if="url">
		<slot :url="url">
			<img :src="url" alt="段位"/>
		</slot>
	</template>
</template>