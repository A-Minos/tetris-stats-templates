<script lang="ts" setup>
import { md5 } from 'hash-wasm'
import { isNonNullish } from 'remeda'

const path = 'v2/tetrio/info'

const test = async () => {
	const user = await fetch('/_proxy/tetrio/users/5eb3a6530b29196c155074e8')
		.then(response => {
			return response.json()
		})
		.then(result => {
			return (result as {
				readonly data: {
					readonly user: {
						readonly _id: string
						readonly username: string

						readonly badges: {
							readonly id: string
							readonly label: string
							readonly group: string | null
							readonly ts: string | null
						}[]

						readonly country: string
						readonly supporter_tier: number
						readonly xp: number
						readonly avatar_revision: number
						readonly gametime: number
						readonly friend_count: number
						readonly verified: boolean
						readonly badstanding?: boolean
						readonly gamesplayed: number
						readonly gameswon: number
						readonly bio: string
						readonly ts: string

						readonly league: {
							readonly rank: string
							readonly bestrank: string
							readonly rating: number
							readonly glicko: number
							readonly rd: number
							readonly pps: number
							readonly apm: number
							readonly vs: number
							readonly gamesplayed: number
							readonly gameswon: number
							readonly decaying: number
							readonly standing: number
							readonly standing_local: number
						}

						readonly banner_revision: number
					}
				}
			}).data.user
		})

	const data = await fetch(`/_proxy/tetrio/users/${user._id}/records`)
		.then(response => {
			return response.json()
		})
		.then(result => {
			return (result as {
				readonly data: {
					readonly records: {
						readonly '40l': {
							readonly record: {
								readonly endcontext: {
									readonly finalTime: number
								}

								readonly ts: string
							} | null

							readonly rank: number | null
						}

						readonly blitz: {
							readonly record: {
								readonly endcontext: {
									readonly score: number
								}

								readonly ts: string
							} | null

							readonly rank: number | null
						}
					}

					readonly zen: {
						readonly level: number
						readonly score: number
					}
				}
			}).data
		})

	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: user._id,
			name: user.username,
			avatar: isNonNullish(user.avatar_revision) ? `https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}` : {
				type: 'identicon',
				hash: await md5(user._id)
			},
			banner: user.banner_revision > 0 ? `https://tetr.io/user-content/banners/${user._id}.jpg?rv=${user.banner_revision}` : null,
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
			friend_count: user.friend_count,
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
			glicko: Number(
				user.league.glicko.toFixed(2)
			),
			rd: Number(
				user.league.rd.toFixed(2)
			),
			global_rank: user.league.standing !== -1 ? user.league.standing : null,
			country_rank: user.league.standing_local !== -1 ? user.league.standing_local : null,

			pps: user.league.pps,

			apm: user.league.apm,
			apl: Number(
				(user.league.apm / user.league.pps / 24).toFixed(2)
			),

			vs: user.league.vs,
			adpl: Number(
				(user.league.vs / user.league.pps / 24 * 0.6).toFixed(2)
			),

			statistic: {
				total: user.league.gamesplayed,
				wins: user.league.gameswon
			},

			decaying: user.league.decaying
		} : null,
		statistic: {
			total: user.gamesplayed === -1 ? null : user.gamesplayed,
			wins: user.gameswon === -1 ? null : user.gameswon
		},
		sprint: data.records['40l'].record ? {
			time: (() => {
				const time = data.records['40l'].record!.endcontext.finalTime / 1000

				const hours = Math.trunc(time / 60)
				const seconds = Math.trunc(time % 60)
				const milliseconds = Math.trunc((time % 1) * 1000)

				return `${hours}:${seconds}.${milliseconds}`
			})(),
			global_rank: data.records['40l'].rank,
			play_at: data.records['40l'].record.ts
		} : null,
		blitz: data.records.blitz.record ? {
			score: data.records.blitz.record.endcontext.score,
			global_rank: data.records.blitz.rank,
			play_at: data.records.blitz.record.ts
		} : null,
		zen: data.zen.score > 0 ? {
			score: data.zen.score,
			level: data.zen.level
		} : null
	})

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>