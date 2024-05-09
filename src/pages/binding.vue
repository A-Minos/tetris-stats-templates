<script lang="ts">
import type { Avatar } from '@/types/shared'

interface Data {
	readonly platform: string
	readonly status: 'error' | 'success' | 'unknown' | 'unlink' | 'unverified'

	readonly user: {
		readonly avatar: Avatar
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
	<div class="w-fit p-7.5 bg-[#f1f1f1] font-template">
		<div class="flex flex-col gap-3.75">
			<div class="flex justify-center items-center gap-8">
				<img :src="data.user.avatar" alt="玩家头像" class="w-24 h-24 rounded-5"/>

				<template v-if="isNonNullish(stateImage)">
					<img :src="stateImage" alt="状态" class="w-32 h-14 rounded-5"/>
				</template>

				<img :src="data.bot.avatar" alt="Bot 头像" class="w-24 h-24 rounded-5"/>
			</div>

			<div/>

			<div class="text-6.25 text-center">
				<span>已将你在</span>
				<span class="fw-extrabold">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br/>

				<span class="fw-extrabold">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br/>

				<span>成功验证并绑定至</span>
				<span>&nbsp;{{ data.bot.name }}</span>
				<span>.</span>
			</div>

			<div class="text-[#52525c] text-center">
				<span>你可以输入 “{{ data.command }}” 命令来查找你在该平台上的统计数据.</span>
			</div>
		</div>
	</div>
</template>