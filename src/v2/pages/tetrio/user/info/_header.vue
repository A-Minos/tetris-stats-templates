<script lang="ts" setup>
import AvatarCard from '@/shared/components/avatar.vue'
import type AvatarType from '@/shared/schemas/avatar.ts'
import logo from '@/v2/assets/images/logos/tetrio.svg'
import country from '@/v2/components/common/country.vue'

import { HeartFilled, StarFilled } from '@vicons/antd'
import { isNonNullish } from 'remeda'

const props = defineProps<{
	readonly banner: string | null
	readonly avatar: AvatarType

	readonly name: string
	readonly id: string

	readonly country: string | null

	readonly friend_count: number | null
	readonly supporter_tier: number
}>()

const { define: UserDefine, reuse: User } = createReusableTemplate()
const { define: LogoDefine, reuse: Logo } = createReusableTemplate()
</script>

<template>
	<div class="relative">
		<UserDefine>
			<div>
				<n-flex size="small" vertical>
					<n-flex align="center" size="small">
						<avatar-card :avatar="avatar" class="[&,&>img]:size-12"/>

						<n-flex :size="0" vertical>
							<n-text class="text-(6 current) fw-bold leading-none">
								{{ name }}
							</n-text>

							<n-text :depth="3" class="text-xs">{{ id }}</n-text>
						</n-flex>

						<n-flex align="center" size="small" vertical>
							<template v-if="isNonNullish(props.country)">
								<country :code="props.country" class="[&>img]:(h-4) rounded-sm"/>
							</template>

						</n-flex>
					</n-flex>

					<template v-if="isNonNullish(friend_count) || supporter_tier > 0">
						<n-flex :size="0" align="center" justify="space-between">
							<template v-if="isNonNullish(friend_count)">
								<n-flex align="center" class="!gap-0.5">
									<n-icon :component="HeartFilled" class="text-5"/>
									<n-text class="text-current">{{ friend_count }}</n-text>
								</n-flex>
							</template>

							<template v-if="supporter_tier > 0">
								<n-flex :size="0" align="center"
										class="ml-5">
									<template v-for="_ in supporter_tier">
										<n-icon :component="StarFilled"
												class="text-5 drop-shadow-[0_0_0.5rem_#FF4A19]"/>
									</template>
								</n-flex>
							</template>
						</n-flex>
					</template>

				</n-flex>
			</div>
		</UserDefine>

		<LogoDefine>
			<div>
				<n-flex :size="0" align="center" vertical>
					<n-image :src="logo" class="[&>img]:size-8"/>
					<n-text class="text-white mt-2 fw-bold">TETR.IO</n-text>
				</n-flex>
			</div>
		</LogoDefine>

		<template v-if="isNonNullish(banner)">
			<n-image :src="banner" class="[&>img]:(w-full)"/>

			<div class="absolute top-1/2 left-1/2 -translate-1/2 w-full">
				<div class="px-2.5">
					<n-flex align="center" justify="space-between">
						<div class="bg-(black opacity-75) rounded backdrop-(blur-sm brightness-50) p-2.5">
							<User/>
						</div>

						<div class="bg-(black opacity-75) rounded backdrop-(blur-sm brightness-50) p-1">
							<Logo/>
						</div>
					</n-flex>
				</div>
			</div>
		</template>

		<template v-else>
			<n-flex align="center" justify="space-between">
				<User/>
				<Logo/>
			</n-flex>
		</template>
	</div>
</template>