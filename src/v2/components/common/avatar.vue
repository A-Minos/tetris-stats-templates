<script lang="ts" setup>
import { md5 } from 'hash-wasm'
import Identicon from 'identicon.js'

const props = defineProps<{
	readonly user_id: string
}>()

const url = ref<string>(`https://tetr.io/user-content/avatars/${props.user_id}.jpg`)

const handleError = async () => {
	// @ts-ignore
	const data = new Identicon(await md5(props.user_id), {
		background: [8, 10, 6, 255],
		margin: 0.15,
		size: 300,
		brightness: 0.48,
		saturation: 0.65,
		format: 'svg'
	}).toString()

	url.value = `data:image/svg+xml;base64,${data}`
}
</script>

<template>
	<n-avatar v-if="url" :src="url" @error="handleError"/>
</template>