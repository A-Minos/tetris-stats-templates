<script lang="ts" setup>
import type Avatar from '@/shared/types/avatar'
import Identicon from 'identicon.js'
import { isString } from 'remeda'

const props = defineProps<{
	readonly avatar: Avatar
}>()


const avatar_url = computed(() => {
	if (isString(props.avatar)) {
		return props.avatar
	}

	switch (props.avatar.type) {
		case 'identicon':
			// @ts-ignore
			const result = new Identicon(props.avatar.hash, {
				background: [8, 10, 6, 255],
				margin: 0.15,
				size: 300,
				brightness: 0.48,
				saturation: 0.65,
				format: 'svg'
			}).toString()

			return `data:image/svg+xml;base64,${result}`
	}
})
</script>

<template>
	<n-avatar :src="avatar_url"/>
</template>