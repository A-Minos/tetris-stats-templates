<script lang="ts" setup>
import { isNullish } from 'remeda'

defineProps<{
	readonly background: string
	readonly color: string
}>()
</script>

<template>
	<div :style="{ '--color': color }" class="info-card">
		<img :src="background" alt="背景" class="info-card__background"/>

		<div class="info-card__container">
			<div class="info-card__content">
				<div :class="{ 'info-card__content__body--no-extra': isNullish($slots.extra) }"
					 class="info-card__content__body">
					<slot/>
				</div>
			</div>

			<div class="info-card__extra">
				<div class="info-card__extra__body">
					<slot name="extra"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.info-card {
	@apply relative w-68.75 h-31.25;

	&__background {
		@apply w-full h-full;
	}

	&__container {
		@apply absolute top-0 left-0 w-full h-full;
	}

	&__content {
		@apply absolute bottom-4.25 left-6 text-[var(--color)] text-11 font-medium;

		&__body {
			@apply w-45 overflow-hidden text-ellipsis;
			@apply break-all line-clamp-1;

			&--no-extra {
				@apply w-60;
			}
		}
	}

	@container style (--extra: 1) {
		&__content {
			&__body {
				@apply \!w-45;
			}
		}
	}

	&__extra {
		@apply absolute bottom-6.75 right-6.25 text-[var(--color)] text-3.75;

		&__body {
			@apply w-25 text-right overflow-hidden text-ellipsis;
		}
	}
}
</style>