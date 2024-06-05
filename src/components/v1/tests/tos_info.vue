<script lang="ts" setup>
import type { Data } from '@/pages/v1/tos/info.vue'
import prompt from '@/utils/prompt.ts'

const path = 'v1/tos/info'

const test = () => {
	const apm = Number(
		prompt('用户 apm', '85.31')
	)

	const pps = Number(
		prompt('用户 pps', '2.24')
	)

	const vs = Number(
		prompt('用户 vs', '175.93')
	)

	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(new class {
		readonly user = new class {
			readonly avatar = prompt('用户头像', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzEyOScgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg==')
			readonly name = prompt('用户名', 'techminohaowan')
		}

		readonly ranking = new class {
			readonly rating = Number(
				prompt('用户 rating', '2427.07')
			)

			readonly rd = Number(
				prompt('用户 rd', '60.90')
			)
		}

		readonly multiplayer = new class {
			readonly pps = pps
			readonly lpm = Number(this.pps * 24)

			readonly apm = apm
			readonly apl = Number(this.apm / this.lpm)

			readonly vs = vs
			readonly adpm = Number(this.vs * 0.6)
			readonly adpl = Number(this.adpm / this.lpm)
		}

		readonly radar = new class {
			readonly app = Number(
				apm / (60 * pps)
			)

			readonly or = Number(
				(vs / 100) - (apm / 60)
			)

			readonly dspp = Number(this.or / pps)
			readonly ci = Number(150 * this.dspp - 125 * this.app + 50 * (vs / apm) - 25)

			readonly ge = Number(
				2 * (this.app * this.or / pps)
			)
		}

		readonly sprint = prompt('用户 40l', '33s')
		readonly challenge = prompt('用户 challenge', '114,514')
		readonly marathon = prompt('用户 马拉松', '143,036')
	} satisfies Data)

	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = path
}
</script>

<template>
	<button @click="test">测试 {{ path }}</button>
</template>