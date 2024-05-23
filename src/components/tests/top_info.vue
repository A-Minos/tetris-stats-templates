<script lang="ts" setup>
import type { Data } from '@/pages/top/info.vue'
import prompt from '@/utils/prompt'

const path = 'top/info'

const test = () => {
	const apm = Number(
		prompt('用户 apm', '85.31')
	)

	const pps = Number(
		prompt('用户 pps', '2.24')
	)

	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(new class {
		readonly user = new class {
			readonly avatar = prompt('用户头像', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzEyOScgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg==')
			readonly name = prompt('用户名', 'techminohaowan')
		}

		readonly today = new class {
			readonly pps = pps
			readonly lpm = Number(this.pps * 24)

			readonly apm = apm
			readonly apl = Number(this.apm / this.lpm)
		}

		readonly history = new class {
			readonly pps = pps
			readonly lpm = Number(this.pps * 24)

			readonly apm = apm
			readonly apl = Number(this.apm / this.lpm)
		}
	} satisfies Data)

	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = path
}
</script>

<template>
	<button @click="test">测试 {{ path }}</button>
</template>