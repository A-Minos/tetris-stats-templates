<script lang="ts">
import type { Avatar as AvatarType } from '@/types/shared'

export interface Data {
	readonly platform: string
	readonly status: 'error' | 'success' | 'unknown' | 'unlink' | 'unverified'

	readonly user: {
		readonly avatar: AvatarType
		readonly name: string
	}

	readonly bot: {
		readonly avatar: string
		readonly name: string
	}

	readonly command: string
}
</script>

<script lang="ts" setup>
import Avatar from '@/components/avatar.vue'
import { asyncComputed } from '@vueuse/core'
import { isNonNullish } from 'remeda'

const data: Data = JSON.parse(
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()
)

const stateImage = asyncComputed(async () => {
	return await import(`@/assets/images/status/${data.status}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<div class="binding">
		<div class="binding__container">
			<div class="binding__header">
				<Avatar :avatar="data.user.avatar" alt="玩家头像" class="binding__header__avatar"/>

				<template v-if="isNonNullish(stateImage)">
					<img :src="stateImage" alt="状态" class="binding__header__state"/>
				</template>

				<img :src="data.bot.avatar" alt="Bot 头像" class="binding__header__avatar"/>
			</div>

			<div/>

			<div class="binding__content">
				<span>已将你在</span>
				<span class="binding__content__platform">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br/>

				<span class="binding__content__user-name">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br/>

				<span>成功验证并绑定至</span>
				<span class="binding__content__bot-name">&nbsp;{{ data.bot.name }}</span>
				<span>.</span>
			</div>

			<div class="binding__footer">
				<span>你可以输入 “{{ data.command }}” 命令来查找你在该平台上的统计数据.</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/main';

.binding {
	@extend .font-template;
	@apply w-fit p-7.5 bg-[#f1f1f1];

	&__container {
		@apply flex flex-col gap-3.75;
	}

	&__header {
		@apply flex justify-center items-center gap-8;

		&__avatar {
			@apply w-24 h-24;
			@apply rounded-5;
			@apply drop-shadow-[0_0.6875rem_1.4375rem_#00000038];
		}

		&__state {
			@apply w-32 h-14;
			@apply rounded-5;
		}
	}

	&__content {
		@apply text-6.25 text-center;

		&__platform, &__user-name {
			@apply fw-extrabold;
		}
	}

	&__footer {
		@apply text-[#52525c] text-center;
	}
}
</style>