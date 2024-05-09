<script lang="ts" setup>
import type { Avatar } from '@/types/shared'
import Identicon from 'identicon.js'
import { isString } from 'remeda'
import { computed } from 'vue'

const props = defineProps<{
	readonly avatar: Avatar
}>()

const url = computed(() => {
	if (isString(props.avatar)) {
		return props.avatar
	}

	switch (props.avatar.type) {
		case 'identicon':
			// @ts-ignore
			const data = new Identicon(props.avatar.hash, {
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
	<img :src="url" alt="玩家头像" class="w-24 h-24 rounded-5"/>
</template>