<script lang="ts" setup>
import type Avatar from '@/shared/types/avatar'
import { md5 } from 'hash-wasm'
import Identicon from 'identicon.js'
import { isString } from 'remeda'

const props = defineProps<{
	readonly user_id: string
	readonly avatar: Avatar
}>()

const generateIdenticon = (hash: string) => {
	// @ts-ignore
	const result = new Identicon(hash, {
		background: [8, 10, 6, 255],
		margin: 0.15,
		size: 300,
		brightness: 0.48,
		saturation: 0.65,
		format: 'svg'
	}).toString()

	return `data:image/svg+xml;base64,${result}`
}

const url = ref<string>()

const useIdenticon = async () => {
	url.value = generateIdenticon(
		await md5(props.user_id)
	)
}

tryOnMounted(async () => {
	url.value = await (async () => {
		if (isString(props.avatar)) {
			return props.avatar
		}

		switch (props.avatar.type) {
			case 'identicon':
				// @ts-ignore
				return generateIdenticon(props.avatar.hash)
		}
	})()
})
</script>

<template>
	<n-avatar v-if="url" :src="url" @error="useIdenticon"/>
</template>