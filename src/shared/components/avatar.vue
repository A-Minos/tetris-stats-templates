<script lang="ts">
import { z } from 'zod'

enum AvatarType {
	IMAGE = 'image',
	IDENTICON = 'identicon'
}

export const Avatar = z.union([
	z.object({
		type: z.literal(AvatarType.IMAGE),
		src: z.string()
	}),
	z.object({
		type: z.literal(AvatarType.IDENTICON),
		user_id: z.string()
	})
])
</script>

<script lang="ts" setup>
import { md5 } from 'hash-wasm'
import Identicon from 'identicon.js'
import { isNonNullish } from 'remeda'

const props = defineProps<
	z.infer<typeof Avatar>
>()

const url = asyncComputed(() => {
	switch (props.type) {
		case AvatarType.IMAGE:
			return props.src
		case AvatarType.IDENTICON:
			// @ts-ignore
			const data = new Identicon(await md5(props.user_id), {
				background: [8, 10, 6, 255],
				margin: 0.15,
				size: 300,
				brightness: 0.48,
				saturation: 0.65,
				format: 'svg'
			}).toString()

			return `data:image/svg+xml;base64,${data}`
	}
})
</script>

<template>
	<template v-if="isNonNullish(url)">
		<slot :url="url">
			<img :src="url" alt="头像"/>
		</slot>
	</template>
</template>