<script lang="ts">
import Rank, { ValidRank } from '@/shared/schemas/rank'
import { z } from 'zod'

const Data = z
	.object({
		items: z.record(
			ValidRank,
			z.object({
				trending: z.number(),
				require_tr: z.number(),
				players: z.number()
			})
		),
		updated_at: z.coerce.date()
	})
	.strict()
	.readonly()

export type Data = z.infer<typeof Data>;
</script>

<script lang="ts" setup>
import { isNonNullish } from 'remeda'

const colorMappings: Record<
	Rank,
	{
		readonly background: string;
		readonly text: string;
	}
> = {
	'x+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #D946EF 0%, #F5CFFE 100%)',
		text: '#8E23B4CC'
	},
	x: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #D946EF 0%, #F5CFFE 100%)',
		text: '#8E23B4CC'
	},
	u: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #F04444 0%, #FECBCA 100%)',
		text: '#7F1D1CCC'
	},
	ss: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #E9B308 0%, #FEF18B 100%)',
		text: '#723F12CC'
	},
	's+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #E9B308 0%, #FEF18B 100%)',
		text: '#723F12CC'
	},
	s: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #E9B308 0%, #FEF18B 100%)',
		text: '#723F12CC'
	},
	's-': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #E9B308 0%, #FEF18B 100%)',
		text: '#723F12CC'
	},
	'a+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #23C55E 0%, #BBF7D1 100%)',
		text: '#15532ECC'
	},
	a: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #23C55E 0%, #BBF7D1 100%)',
		text: '#15532ECC'
	},
	'a-': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #23C55E 0%, #BBF7D1 100%)',
		text: '#15532ECC'
	},
	'b+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #3B82F6 0%, #BFDCFE 100%)',
		text: '#1F3A8B'
	},
	b: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #3B82F6 0%, #BFDCFE 100%)',
		text: '#1F3A8B'
	},
	'b-': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #3B82F6 0%, #BFDCFE 100%)',
		text: '#1F3A8B'
	},
	'c+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #A755F7 0%, #EAD5FF 100%)',
		text: '#571C86'
	},
	c: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #A755F7 0%, #EAD5FF 100%)',
		text: '#571C86'
	},
	'c-': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #A755F7 0%, #EAD5FF 100%)',
		text: '#571C86'
	},
	'd+': {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #64748B 0%, #E1E8F0 100%)',
		text: '#0F172A'
	},
	d: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #64748B 0%, #E1E8F0 100%)',
		text: '#0F172A'
	},
	z: {
		background: 'radial-gradient(95.42% 572.5% at 4.58% 17.5%, #737373 0%, #E5E5E5 100%)',
		text: '#171717'
	}
}

const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()))

const rankImageMap = asyncComputed(async () => {
	return Object.fromEntries(
		await Promise.all(
			Object.keys(data.items).map(async (rank) => {
				const name = rank.toLowerCase()

				return [
					rank,
					await import(`@/shared/assets/images/ranks/${name}.svg?url`).then((module) => {
						return module.default
					})
				]
			})
		)
	)
}, {})
</script>

<template>
	<div id="content" class="tetrio-rank">
		<span class="tetrio-rank__title">Rankings</span>

		<div class="tetrio-rank__list">
			<div
				v-for="(rank, name) in data.items"
				:style="{ backgroundImage: colorMappings[name].background }"
				class="tetrio-rank__item"
			>
				<div v-if="rank !== undefined" class="tetrio-rank__item__container">
					<div class="tetrio-rank__item__rank">
						<img
							v-if="isNonNullish(rankImageMap[name])"
							:alt="name"
							:src="rankImageMap[name]"
							class="w-12.5 h-12.5"
						/>
					</div>

					<div :style="{ color: colorMappings[name].text }" class="tetrio-rank__item__trending">
						{{ rank.trending >= 0 ? '↑' : '↓' }}{{ Math.abs(rank.trending) }}
					</div>

					<div :style="{ color: colorMappings[name].text }" class="tetrio-rank__item__info">
						<span class="tetrio-rank__item__info__tr">{{ rank.require_tr }}</span>
						<br/>
						<span class="tetrio-rank__item__info__players">{{ rank.players }} players</span>
					</div>
				</div>
			</div>
		</div>

		<div class="tetrio-rank__update_at">Updated on {{ data.updated_at.toLocaleString('zh-CN') }}</div>
	</div>
</template>

<style lang="scss">
@import "@/v1/styles/main";
</style>

<style lang="scss" scoped>
@import "@/v1/styles/main";

.tetrio-rank {
	@extend .font-template;
	@apply w-fit p-6.25 bg-[#f1f1f1];

	&__title {
		@apply text-8.75 fw-black;
	}

	&__list {
		@apply flex flex-col gap-2.5;
	}

	&__item {
		box-shadow: 0 1.25rem 3rem 0 #00000026;
		@apply w-150 h-25 rounded-7.5 relative;

		&__container {
			@apply p-6.25 flex gap-21.25 items-center;
		}

		&__trending {
			@apply w-25 text-8 fw-700;
		}

		&__info {
			@apply w-57.5 text-right leading-none absolute right-6.25;

			&__tr {
				@apply fw-extrabold text-11.25;
			}

			&__players {
				@apply text-7.5;
			}
		}
	}

	&__update_at {
		@apply w-150 h-12.5;
		@apply fw-bold text-7.5;
		@apply flex flex-col justify-center items-center;
	}
}
</style>