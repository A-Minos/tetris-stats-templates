<script lang="ts">
enum GAME_TYPE {
	TOS = 'tos',
	TOP = 'top',
	TETR_IO = 'tetr.io'
}

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
	<div class="w-132 p-8 bg-[#f1f1f1] font-[CabinetGrotesk-Variable,SourceHanSansSC-VF]">
		<div class="flex flex-col items-center gap-5">
			<div class="flex items-center gap-8">
				<img :src="data.user_avatar" alt="用户头像" class="avatar"/>
				<img v-if="isNonNullish(stateImage)" :src="stateImage" alt="状态" class="w-32 h-14"/>
				<img :src="data.bot_avatar" alt="Bot 头像" class="avatar"/>
			</div>

			<div class="text-7 fw-350 leading-9 text-center">
				<span>已将您在</span>
				<span class="fw-800 mx-2">{{ data.game_type.toUpperCase() }}</span>
				<span>上的账号</span>

				<br/>

				<span class="fw-800 mx-2">{{ data.user_name }}</span>

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

			<div class="text-center fw-400">
				<span class="text-[#52525c]">
					您可以输入 “{{ data.command }}” 命令来查找您在该平台上的统计数据.
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@font-face {
	font-family: SourceHanSansSC-VF;
	src: url('@/assets/fonts/SourceHanSans/SourceHanSansSC-VF.otf.woff2') format('woff2');
	font-display: swap;
}

@font-face {
	font-family: CabinetGrotesk-Variable;
	src: url('@/assets/fonts/CabinetGrotesk/CabinetGrotesk-Variable.woff2') format('woff2');
	font-display: swap;
}

.avatar {
	@apply w-24 h-24 rounded-5 drop-shadow-[0_.75rem_1.5rem_#00000038];
}

.bot_name {
	@apply fw-400 mx-2;
}
</style>