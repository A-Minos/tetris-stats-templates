<script lang="ts" setup>
import type { Data } from '@/v1/pages/tetrio/info.vue'
import { resetTime } from '@/v1/utils/date'
import prompt from '@/v1/utils/prompt'
import { setHours, setMinutes, setSeconds, subDays } from 'date-fns'
import { map, pipe, sortBy } from 'remeda'

const path = 'v1/tetrio/info'

const test = () => {
	const apm = Number(prompt('用户 apm', '85.31'))

	const pps = Number(prompt('用户 pps', '2.24'))

	const vs = Number(prompt('用户 vs', '175.93'))

	const tr = Number(prompt('用户 tr', '24295.88'))

	const tr_chart_day_data_count = Number(prompt('TR 图每日数据量', '3'))

	const tr_chart_offset_range = Number(prompt('TR 图的数据偏移范围', '100'))

	const random = (min: number, max: number) => {
		const range = max - min
		return Math.round(Math.random() * range) + min
	}

	document.querySelector<HTMLTemplateElement>('template#data')!.innerHTML = JSON.stringify(
		new (class {
			readonly user = new (class {
				readonly avatar = prompt(
					'用户头像',
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgsMTAsNiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlOnJnYmEoNDMsMTU4LDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjEuNTsnPjxyZWN0ICB4PScxMjknIHk9Jzg3JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTI5JyB5PScxMjknIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxMjknIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzEyOScgeT0nMjEzJyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nODcnIHk9JzQ1JyB3aWR0aD0nNDInIGhlaWdodD0nNDInLz48cmVjdCAgeD0nMTcxJyB5PSc0NScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScxNzEnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzE3MScgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9Jzg3JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScxNzEnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PHJlY3QgIHg9JzQ1JyB5PScyMTMnIHdpZHRoPSc0MicgaGVpZ2h0PSc0MicvPjxyZWN0ICB4PScyMTMnIHk9JzIxMycgd2lkdGg9JzQyJyBoZWlnaHQ9JzQyJy8+PC9nPjwvc3ZnPg=='
				)
				readonly name = prompt('用户名', 'techminohaowan')
				readonly bio = prompt('用户介绍', '')
			})()

			readonly ranking = new (class {
				readonly rating = Number(prompt('用户 rating', '2427.07'))

				readonly rd = Number(prompt('用户 rd', '60.90'))
			})()

			readonly tetra_league = new (class {
				readonly rank = prompt('用户段位 (d, d+, c-, c, c+, b-, b, b+, a-, a, a+, s-, s, s+, ss, u, x)', 'x+')

				readonly tr = tr

				readonly global_rank = Number(prompt('用户全国排名', '1112'))

				readonly pps = pps
				readonly lpm = Number(this.pps * 24)

				readonly apm = apm
				readonly apl = Number(this.apm / this.lpm)

				readonly vs = vs
				readonly adpm = Number(this.vs * 0.6)
				readonly adpl = Number(this.adpm / this.lpm)
			})()

			readonly tetra_league_history = new (class {
				readonly data = pipe(
					[
						{
							record_at: (() => {
								let date = new Date()
								date = subDays(date, 10)
								return date
							})(),
							tr: random(tr - tr_chart_offset_range, tr + tr_chart_offset_range)
						},
						...Array.from(new Array(9).keys())
							.map((index) => {
								return pipe(
									Array.from(new Array(tr_chart_day_data_count).keys()),
									map(() => {
										let date = new Date()

										date = subDays(date, index + 1)
										date = setHours(date, random(0, 24))
										date = setMinutes(date, random(0, 60))
										date = setSeconds(date, random(0, 60))

										return {
											record_at: date,
											tr: random(tr - tr_chart_offset_range, tr + tr_chart_offset_range)
										}
									})
								)
							})
							.flat(),
						{
							record_at: (() => {
								let date = new Date()
								date = resetTime(date)
								return date
							})(),
							tr
						}
					],
					sortBy((data) => {
						return data.record_at
					})
				)

				readonly min_tr = Number(10 * Math.floor(Math.min(...this.data.map((data) => data.tr)) / 10))

				readonly max_tr = Number(10 * Math.ceil(Math.max(...this.data.map((data) => data.tr)) / 10))

				readonly split_interval
				readonly offset

				constructor() {
					let offset = 0
					let overflow = 0

					let new_min_tr = 0
					let new_max_tr = 0

					let loop_times = 0

					while (true) {
						loop_times++
						new_max_tr = this.max_tr + offset + overflow

						if (new_max_tr > 25000) {
							overflow--
							continue
						}

						new_min_tr = this.min_tr - offset + overflow

						if (new_min_tr < 0) {
							overflow++
							continue
						}

						const range = new_max_tr - new_min_tr

						if (loop_times > 1000) {
							alert('您不幸的触发到了死循环（')
							throw new Error()
						}

						if (Number.isInteger(range / 40)) {
							const range_max = this.max_tr + offset
							const range_min = this.min_tr - offset

							this.split_interval = (range_max - range_min) / 4
							break
						}

						offset++
					}

					this.offset = offset
				}
			})()

			readonly radar = new (class {
				readonly app = Number(apm / (60 * pps))

				readonly dsps = Number(vs / 100 - apm / 60)

				readonly dspp = Number(this.dsps / pps)
				readonly ci = Number(150 * this.dspp - 125 * this.app + 50 * (vs / apm) - 25)

				readonly ge = Number(2 * ((this.app * this.dsps) / pps))
			})()

			readonly sprint = prompt('用户 40l', '33s')
			readonly blitz = prompt('用户 blitz', 'N/A')
		})() satisfies Data
	)

	document.querySelector<HTMLTemplateElement>('template#path')!.innerHTML = path
}
</script>

<template>
	<button @click="test">测试 {{ path }}</button>
</template>