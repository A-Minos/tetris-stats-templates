<script lang="ts" setup>
import { resetTime } from '@/v1/utils/date.ts'
import type { Data } from '@/v2/pages/tetrio/user/info/index.vue'
import type { Record, User } from '@/v2/types/tetrio'
import { setHours, setMinutes, setSeconds, subDays } from 'date-fns'
import { md5 } from 'hash-wasm'
import { isNonNullish, map, pipe, sortBy } from 'remeda'

const path = 'v2/tetrio/user/info'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data.user as User
		})

	const records = await fetch(`/_proxy/tetrio/users/${user._id}/records`)
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data as Record
		})

	const random = (min: number, max: number) => {
		const range = max - min
		return Math.round(Math.random() * range) + min
	}

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: user._id,
			name: user.username,
			role: user.role,
			banner: isNonNullish(user.banner_revision) && user.banner_revision > 0 ? `https://tetr.io/user-content/banners/${user._id}.jpg?rv=${user.banner_revision}` : null,
			badges: user.badges.map(badge => {
				return {
					id: badge.id,
					description: badge.label,
					group: badge.group,
					receive_at: badge.ts
				}
			}),
			country: user.country,
			xp: user.xp,
			friend_count: isNonNullish(user.friend_count) ? user.friend_count : null,
			playtime: user.gametime !== -1 ? `${Math.trunc(user.gametime / 3600)} 小时` : null,
			supporter_tier: user.supporter_tier,
			bad_standing: user.badstanding ?? false,
			verified: user.verified,
			bio: user.bio,
			join_at: user.ts
		},
		tetra_league: user.league.rating !== -1 ? {
			rank: user.league.rank,
			highest_rank: user.league.bestrank,

			tr: Number(
				user.league.rating.toFixed(2)
			),
			glicko: isNonNullish(user.league.glicko) ? Number(
				user.league.glicko.toFixed(2)
			) : null,
			rd: isNonNullish(user.league.rd) ? Number(
				user.league.rd.toFixed(2)
			) : null,
			global_rank: user.league.standing !== -1 ? user.league.standing : null,
			country_rank: user.league.standing_local !== -1 ? user.league.standing_local : null,

			pps: user.league.pps,

			apm: user.league.apm,
			apl: isNonNullish(user.league.apm) && isNonNullish(user.league.pps) ? Number(
				(user.league.apm / user.league.pps / 24).toFixed(2)
			) : null,

			vs: user.league.vs,
			adpl: isNonNullish(user.league.vs) && isNonNullish(user.league.pps) ? Number(
				(user.league.vs / user.league.pps / 24 * 0.6).toFixed(2)
			) : null,

			statistic: {
				total: user.league.gamesplayed,
				wins: user.league.gameswon
			},

			decaying: user.league.decaying,

			history: pipe(
				[
					{
						record_at: (() => {
							let date = new Date()
							date = subDays(date, 10)
							return date.toLocaleString()
						})(),
						tr: random(
							Number(
								user.league.rating.toFixed(2)
							) - 50,
							Number(
								user.league.rating.toFixed(2)
							) + 50
						)
					},
					...Array.from(
						new Array(9).keys()
					).map(index => {
						return pipe(
							Array.from(
								new Array(7).keys()
							),
							map(() => {
								let date = new Date()

								date = subDays(date, index + 1)
								date = setHours(date, random(0, 24))
								date = setMinutes(date, random(0, 60))
								date = setSeconds(date, random(0, 60))

								return {
									record_at: +date,
									tr: random(
										Number(
											user.league.rating.toFixed(2)
										) - 50,
										Number(
											user.league.rating.toFixed(2)
										) + 50
									)
								}
							})
						)
					}).flat(),
					{
						record_at: (() => {
							let date = new Date()
							date = resetTime(date)
							return +date
						})(),
						tr: Number(
							user.league.rating.toFixed(2)
						)
					}
				],
				sortBy(data => {
					return +new Date(data.record_at)
				})
			)
		} : null,
		statistic: {
			total: user.gamesplayed === -1 ? null : user.gamesplayed,
			wins: user.gameswon === -1 ? null : user.gameswon
		},
		sprint: records.records['40l'].record ? {
			time: (() => {
				const time = records.records['40l'].record!.endcontext.finalTime / 1000

				const hours = Math.trunc(time / 60)
				const seconds = Math.trunc(time % 60)
				const milliseconds = Math.trunc((time % 1) * 1000)

				return `${hours}:${seconds}.${milliseconds}`
			})(),
			global_rank: records.records['40l'].rank,
			play_at: records.records['40l'].record.ts
		} : null,
		blitz: records.records.blitz.record ? {
			score: records.records.blitz.record.endcontext.score,
			global_rank: records.records.blitz.rank,
			play_at: records.records.blitz.record.ts
		} : null,
		zen: records.zen.score > 0 ? {
			score: records.zen.score,
			level: records.zen.level
		} : null
	} as Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>