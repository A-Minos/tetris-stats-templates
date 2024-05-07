<script lang="ts">
import type GAME_TYPE from '@/enums/GameType.ts'

enum BindingStatus {
	ERROR = 'error',
	SUCCESS = 'success',
	UNVERIFIED = 'unverified',
	UNKNOWN = 'unknown',
	UNLINK = 'unlink'
}

interface Data {
	readonly game_type: GAME_TYPE
	readonly status: BindingStatus
	readonly user_name: string
	readonly user_avatar: string
	readonly bot_name: string
	readonly bot_avatar: string
	readonly command: string
}
</script>

<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core'
import { isNonNullish } from 'remeda'

const data: Data = JSON.parse(
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()
)

const stateImage = asyncComputed(async () => {
	return await import(`@/assets/binding/${data.status}.svg?url`)
		.then(module => {
			return module.default
		})
})
</script>

<template>
	<div class="container">
		<div class="header">
			<img :src="data.user_avatar" alt="用户头像" class="avatar"/>

			<template v-if="isNonNullish(stateImage)">
				<img :src="stateImage" alt="状态" class="status"/>
			</template>

			<img :src="data.bot_avatar" alt="Bot 头像" class="avatar"/>
		</div>

		<div class="content">
			<span>已将您在</span>
			<span class="game_type">{{ data.game_type.toUpperCase() }}</span>
			<span>上的账号</span>

			<br/>

			<span class="user_name">{{ data.user_name }}</span>

			<br/>

			<template v-if="data.status === BindingStatus.SUCCESS">
				<span>成功验证并绑定至</span>
				<span class="bot_name">{{ data.bot_name }}.</span>
			</template>

			<template v-if="data.status === BindingStatus.UNVERIFIED">
				<span>成功验证并绑定至</span>
				<span class="bot_name">{{ data.bot_name }}</span>
				<span>, 但尚未通过验证.</span>
			</template>

			<template v-if="data.status === BindingStatus.UNKNOWN">
				<span>成功验证并绑定至</span>
				<span class="bot_name">{{ data.bot_name }}.</span>

				<br/>

				<span>但是</span>
				<span class="bot_name">{{ data.bot_name }}</span>
				<span>暂时无法验证您的身份.</span>
			</template>

			<template v-if="data.status === BindingStatus.UNLINK">
				<span>成功从</span>
				<span class="bot_name">{{ data.bot_name }}</span>
				<span>解绑.</span>
			</template>
		</div>

		<div class="footer">
			<span>您可以输入 “{{ data.command }}” 命令来查找您在该平台上的统计数据.</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/main';

.container {
	@extend .font-template;
	@apply w-132 flex flex-col items-center gap-5 p-8 bg-[#f1f1f1];
}

.header {
	@apply flex items-center gap-8;
}

img.avatar {
	@apply w-24 h-24 rounded-5 drop-shadow-[0_.75rem_1.5rem_#00000038];
}

img.status {
	@apply w-32 h-14;
}

.content {
	@apply text-7 fw-350 leading-9 text-center;
}

.game_type {
	@apply fw-800 mx-2;
}

.user_name {
	@apply fw-800 mx-2;
}

.bot_name {
	@apply fw-400 mx-2;
}

.footer {
	@apply text-center fw-400 text-[#52525c];
}
</style>