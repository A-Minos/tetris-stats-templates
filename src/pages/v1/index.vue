<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core'
import { type Component, h } from 'vue'

const tests = asyncComputed(async () => {
	return await Promise.all(
		Object.values(
			import.meta.glob<{
				readonly default: Component
			}>('@/components/v1/tests/*.vue')
		).map(async loadModule => {
			const module = await loadModule()
			return h(module.default)
		})
	)
}, [])
</script>

<template>
	<div class="index">
		<div class="index__container">
			<div class="index__title">俄罗斯方块 Bot 模板</div>
			<div class="index__tips">(按住 ctrl 以修改值)</div>

			<div class="index__divider"/>

			<div class="index__buttons">
				<Component :is="test" v-for="test in tests"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.index {
	@apply w-screen h-screen bg-black flex flex-col justify-center items-center;

	&__container {
		@apply flex flex-col gap-1 p-2 font-sans;
	}

	&__title {
		@apply text-8 text-center text-white;
	}

	&__tips {
		@apply text-5 text-center text-white;
	}

	&__divider {
		@apply w-full border-b-2 border-b-solid border-gray;
	}

	&__buttons {
		@apply flex flex-col items-start gap-1;

		& > :deep(button) {
			@apply text-6 transition cursor-pointer text-white hover:opacity-50 bg-transparent border-none;
		}
	}
}
</style>