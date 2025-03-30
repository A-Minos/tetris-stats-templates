<script lang="ts" setup>
import { resetTime } from '@/v1/utils/date'
import type { Data } from '@/v2/pages/tetrio/user/info/index.vue'
import type { League, Record, User, ZenRecord } from '@/v2/types/tetrio'
import { setHours, setMinutes, setSeconds, subDays } from 'date-fns'
import { isNonNullish, map, pipe, sortBy } from 'remeda'

const path = 'v2/tetrio/user/info'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return result.data as User
		})

	const [league, _40l, blitz, zen, zenith, zenithex] = await Promise.all([
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/league`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as League
			}),
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/40l`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as Record
			}),
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/blitz`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as Record
			}),
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/zen`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as ZenRecord
			}),
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/zenith`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as Record
			}),
		fetch(`/_proxy/tetrio/users/${user._id}/summaries/zenithex`)
			.then(response => {
				return response.json()
			})
			.then(result => {
				return result.data as Record
			})
	])

	const random = (min: number, max: number) => {
		const range = max - min
		return Math.round(Math.random() * range) + min
	}

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: user._id,
			name: user.username,
			avatar: `https://tetr.io/user-content/avatars/${user._id}.jpg`,
			role: user.role,
			botmaster: user.botmaster ?? null,
			ar: user.ar,
			achievements: user.achievements,
			banner: isNonNullish(user.banner_revision) && user.banner_revision > 0 ? `https://tetr.io/user-content/banners/${user._id}.jpg?rv=${user.banner_revision}` : null,
			badges: user.badges.map(badge => {
				return {
					id: badge.id,
					description: badge.label,
					group: badge.group ?? null,
					receive_at: badge.ts ?? null
				}
			}),
			country: user.country ?? null,
			xp: user.xp,
			friend_count: isNonNullish(user.friend_count) ? user.friend_count : null,
			playtime: user.gametime !== -1 ? `${Math.trunc(user.gametime / 3600)} 小时` : null,
			supporter_tier: user.supporter_tier,
			bad_standing: user.badstanding ?? false,
			bio: user.bio ?? null,
			join_at: user.ts ?? null
		},
		zenith: zenith.record || zenith.best ? {
			week: zenith.record ? {
				altitude: zenith.record.results.stats.zenith!.altitude,
				global_rank: zenith.rank,
				country_rank: zenith.rank_local,
				play_at: zenith.record.ts
			} : null,

			best: zenith.best && zenith.best.record ? {
				altitude: zenith.best.record.results.stats.zenith!.altitude,
				global_rank: zenith.best.rank,
				play_at: zenith.best.record.ts
			} : null
		} : null,
		zenithex: zenithex.record || zenithex.best ? {
			week: zenithex.record ? {
				altitude: zenithex.record.results.stats.zenith!.altitude,
				global_rank: zenithex.rank,
				country_rank: zenithex.rank_local,
				play_at: zenithex.record.ts
			} : null,

			best: zenithex.best && zenithex.best.record ? {
				altitude: zenithex.best.record.results.stats.zenith!.altitude,
				global_rank: zenithex.best.rank,
				play_at: zenithex.best.record.ts
			} : null
		} : null,
		tetra_league: league.tr !== -1 ? {
			rank: league.rank,
			highest_rank: league.bestrank,

			tr: Number(
				league.tr.toFixed(2)
			),
			glicko: isNonNullish(league.glicko) ? Number(
				league.glicko.toFixed(2)
			) : null,
			rd: isNonNullish(league.rd) ? Number(
				league.rd.toFixed(2)
			) : null,
			global_rank: league.standing !== -1 ? league.standing : null,
			country_rank: league.standing_local !== -1 ? league.standing_local : null,

			pps: league.pps ?? null,

			apm: league.apm ?? null,
			apl: isNonNullish(league.apm) && isNonNullish(league.pps) ? Number(
				(league.apm / league.pps / 24).toFixed(2)
			) : null,

			vs: league.vs ?? null,
			adpl: isNonNullish(league.vs) && isNonNullish(league.pps) ? Number(
				(league.vs / league.pps / 24 * 0.6).toFixed(2)
			) : null,

			statistic: {
				total: league.gamesplayed,
				wins: league.gameswon
			},

			decaying: league.decaying,

			history: pipe(
				[
					{
						record_at: (() => {
							let date = new Date()
							date = subDays(date, 10)
							return date
						})(),
						tr: random(
							Number(
								league.tr.toFixed(2)
							) - 50,
							Number(
								league.tr.toFixed(2)
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
									record_at: date,
									tr: random(
										Number(
											league.tr.toFixed(2)
										) - 50,
										Number(
											league.tr.toFixed(2)
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
							return date
						})(),
						tr: Number(
							league.tr.toFixed(2)
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
		sprint: _40l.record ? {
			time: (() => {
				const time = _40l.record.results.stats.finaltime / 1000

				const hours = Math.trunc(time / 60)
				const seconds = Math.trunc(time % 60)
				const milliseconds = Math.trunc((time % 1) * 1000)

				return `${hours}:${seconds}.${milliseconds}`
			})(),
			global_rank: _40l.rank,
			country_rank: _40l.rank_local,
			play_at: _40l.record.ts
		} : null,
		blitz: blitz.record ? {
			score: blitz.record.results.stats.score,
			global_rank: blitz.rank,
			country_rank: blitz.rank_local,
			play_at: blitz.record.ts
		} : null,
		zen: zen.score > 0 ? {
			score: zen.score,
			level: zen.level
		} : null
	} satisfies Data)

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>