<script lang="ts" setup>
import { useKeyModifier } from '@vueuse/core'

const controlPressed = useKeyModifier('Control')

const prompt = <T extends string>(message: string, defaultValue: T) => {
	if (controlPressed.value) {
		return window.prompt(message, defaultValue)
	}

	return defaultValue
}

const test_binding = () => {
	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = 'binding'

	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(new class {
		readonly platform = prompt('平台', 'tetrio')
		readonly status = prompt('类型 (error, success, unverified, unknown, unlink)', 'unknown')
		readonly user_name = prompt('用户名', 'creeperqwq')
		readonly user_avatar = prompt('用户头像', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMjAyLDUwLDEpOyBzdHJva2U6cmdiYSg0MywyMDIsNTAsMSk7IHN0cm9rZS13aWR0aDoxLjU7Jz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzEyOScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzIxMycgeT0nODcnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc0NScgeT0nMTI5JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMjEzJyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjwvZz48L3N2Zz4=')
		readonly bot_name = prompt('bot 名', 'linmo')
		readonly bot_avatar = prompt('bot 头像', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTE5LDQzLDIwMiwxKTsgc3Ryb2tlOnJnYmEoMTE5LDQzLDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzE3MScgeT0nODcnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc4NycgeT0nMTI5JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc4NycgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc0NScgeT0nNDUnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nNDUnIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMjEzJyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg==')
		readonly command = prompt('指令', 'fkosk')
	})
}

const test_tetr_dot_io_info = () => {
	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = 'tetrio/info'

	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(new class {
		readonly game_type = prompt('游戏类型 (tos, top, tetrio)', 'tetrio')

		readonly user_avatar = prompt('用户头像', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzEyOScgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg==')
		readonly user_name = prompt('用户名', 'techminohaowan')
		readonly user_sign = prompt('用户签名', '')

		readonly rating = Number(
			prompt('用户 rating', '2427.07')
		)

		readonly rd = Number(
			prompt('用户 rd', '60.90')
		)

		readonly rank = prompt('用户段位 (d, d+, c-, c, c+, b-, b, b+, a-, a, a+, s-, s, s+, ss, u, x)', 'u')

		readonly tr = Number(
			prompt('用户 tr', '24295.88')
		)

		readonly global_rank = Number(
			prompt('用户全国排名', '1112')
		)

		readonly apm = Number(
			prompt('用户 apm', '85.31')
		)

		readonly pps = Number(
			prompt('用户 pps', '2.24')
		)

		readonly vs = Number(
			prompt('用户 vs', '175.93')
		)

		readonly sprint = prompt('用户 40l', '33s')
		readonly blitz = prompt('用户 blitz', 'N/A')

		get adpm() {
			return Number(this.vs * 0.6)
		}

		get adpl() {
			return Number(this.adpm / this.lpm)
		}

		get apl() {
			return Number(this.apm / this.lpm)
		}

		get lpm() {
			return Number(this.pps / 24)
		}
	})
}
</script>

<template>
	<div class="flex flex-col gap-1 p-2">
		<span>按住 ctrl 以修改值</span>

		<div class="flex gap-1 p-2">
			<button @click="test_binding">测试 绑定</button>
			<button @click="test_tetr_dot_io_info">测试 tetrio 个人信息</button>
		</div>
	</div>
</template>