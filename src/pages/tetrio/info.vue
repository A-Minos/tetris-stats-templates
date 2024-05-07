<script lang="ts">

interface Data {
	readonly user_avatar: string
	readonly user_name: string
	readonly user_bio: string

	readonly rating: number
	readonly rd: number

	readonly rank: string
	readonly tr: number
	readonly global_rank: number

	readonly apm: number
	readonly pps: number
	readonly vs: number

	readonly lpm: number
	readonly apl: number
	readonly adpm: number
	readonly adpl: number

	readonly sprint: string
	readonly blitz: string
}
</script>

<script lang="ts" setup>
import logo from '@/assets/images/logo/tetrio.svg'
import Info40l from '@/components/info-40l.vue'
import InfoAdpm from '@/components/info-adpm.vue'
import InfoApm from '@/components/info-apm.vue'
import InfoBlitz from '@/components/info-blitz.vue'
import InfoLpm from '@/components/info-lpm.vue'
import { isEmpty } from 'remeda'

const data: Data = JSON.parse(
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML.trim()
)
</script>

<template>
	<div class="w-fit p-6.25 bg-[#f1f1f1] font-template">
		<span class="text-8.75 fw-black">Account & Rankings</span>

		<div class="mt-2.5">
			<div class="flex flex-col gap-6.25">
				<div class="flex gap-6.25">
					<div class="w-68.75 max-h-68.75 rounded-7.5 bg-white">
						<div class="flex flex-col items-center p-6.25 gap-2.5">
							<img :src="data.user_avatar" alt="用户头像" class="w-31.25 h-31.25 rounded-full"/>

							<div class="break-all">
								<span class="text-6.25 font-extrabold">{{ data.user_name }}</span>
							</div>

							<template v-if="!isEmpty(data.user_bio)">
								<div class="break-all line-clamp-3">
									<span class="text-4.5">
										{{ data.user_bio }}
									</span>
								</div>
							</template>
						</div>
					</div>

					<div class="w-68.75 max-h-68.75 rounded-7.5 bg-white">
						<div class="flex flex-col p-6.25">
							<img :src="logo" alt="Logo" class="w-15 h-15 rounded-2.5"/>
							<span class="text-7.5 fw-extrabold">TETR.IO</span>

							<div class="w-full border-b-(1 solid #bababa) my-2.5"/>

							<span class="text-6.25 fw-extrabold">Ranking</span>

							<span class="text-12.5 leading-15">{{ data.rating }}</span>
							<span class="text-7.5 leading-9 fw-light -mt-4">±{{ data.rd }}</span>
						</div>
					</div>
				</div>

				TR

				<span class="text-8.75 fw-black mt-4.5">Multiplayer Stats</span>

				<div class="flex gap-6.25">
					<div class="flex flex-col gap-6.25">
						<info-lpm>
							{{ Number(data.lpm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">{{ Number(data.pps).toFixed(2) }} pps</span>
							</template>
						</info-lpm>

						<info-apm>
							{{ Number(data.apm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">x{{ Number(data.adpm).toFixed(2) }}</span>
							</template>
						</info-apm>

						<info-adpm>
							{{ Number(data.adpm).toFixed(2) }}

							<template #extra>
								<span class="whitespace-nowrap">{{ Number(data.vs).toFixed(2) }} vs</span>

								<br/>

								<span class="whitespace-nowrap">x{{ Number(data.adpl).toFixed(2) }}</span>
							</template>
						</info-adpm>
					</div>

					雷达图
				</div>

				<span class="text-8.75 fw-black mt-4.5">Singleplayer Stats</span>

				<div class="flex gap-6.25">
					<info-40l>{{ data.sprint }}</info-40l>
					<info-blitz>{{ data.blitz }}</info-blitz>
				</div>

				<div class="text-7.5 text-center fw-750">
					<span>Powered by</span>

					<br/>

					<span>Nonebot2 x nonebot-plugin-tetris-stats</span>
				</div>
			</div>
		</div>
	</div>
</template>