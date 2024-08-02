<script lang="ts" setup>
import prompt from '@/v1/utils/prompt'

const path = 'v1/binding'

const test = () => {
	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(
		new (class {
			readonly platform = prompt('平台', 'TETR.IO')
			readonly status = prompt('类型 (error, success, unverified, unknown, unlink)', 'unknown')

			readonly user = new (class {
				readonly name = prompt('用户名', 'creeperqwq')
				readonly avatar = prompt(
					'用户头像',
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMjAyLDUwLDEpOyBzdHJva2U6cmdiYSg0MywyMDIsNTAsMSk7IHN0cm9rZS13aWR0aDoxLjU7Jz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzEyOScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzIxMycgeT0nODcnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc0NScgeT0nMTI5JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMjEzJyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjwvZz48L3N2Zz4='
				)
			})()

			readonly bot = new (class {
				readonly name = prompt('bot 名', 'linmo')
				readonly avatar = prompt(
					'bot 头像',
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTE5LDQzLDIwMiwxKTsgc3Ryb2tlOnJnYmEoMTE5LDQzLDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzE3MScgeT0nODcnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc4NycgeT0nMTI5JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc4NycgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PSc0NScgeT0nNDUnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nNDUnIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMjEzJyB5PSc4Nycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg=='
				)
			})()

			readonly command = prompt('指令', 'fkosk')
		})()
	)

	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = path
}
</script>

<template>
	<button @click="test">测试 {{ path }}</button>
</template>
