<script lang="ts">
import Identicon from 'identicon.js'

export function generate_identicon(hash: string): string {
	return `data:image/svg+xml;base64,${new Identicon(hash, {
		background: [8, 10, 6, 255],
		margin: 0.15,
		size: 300,
		brightness: 0.48,
		saturation: 0.65,
		format: 'svg'
	}).toString()}`
}
</script>

<script lang="ts" setup>
import Avatar from '@/shared/schemas/avatar.ts'
import { isString } from 'remeda'

const props = defineProps<{
	readonly avatar: Avatar
}>()

const url = computed(() => {
	if (isString(props.avatar)) {
		return props.avatar
	}

	switch (props.avatar.type) {
		case 'identicon':
			return generate_identicon(props.avatar.hash)
	}
})
</script>

<template>
	<img :src="url" alt="头像"/>
</template>