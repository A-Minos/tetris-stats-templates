import type Rank from '@/shared/schemas/rank'

export interface User {
	readonly _id: string
	readonly username: string
	readonly role: 'anon' | 'user' | 'bot' | 'halfmod' | 'mod' | 'admin' | 'sysop' | 'hidden' | 'banned'
	readonly ts?: Date
	readonly botmaster?: string

	readonly ar: number
	readonly achievements: number[]

	readonly badges: {
		readonly id: string
		readonly label: string
		readonly group?: string
		readonly ts?: Date
	}[]

	readonly xp: number

	readonly gamesplayed: number
	readonly gameswon: number
	readonly gametime: number

	readonly country?: string
	readonly badstanding?: boolean

	readonly supporter: boolean
	readonly supporter_tier: number
	readonly verified: boolean

	readonly avatar_revision?: number
	readonly banner_revision?: number
	readonly bio?: string

	readonly connections: {
		readonly discord?: {
			readonly id: string
			readonly username: string
		}
	}

	readonly friend_count: number
	readonly distinguishment?: {
		readonly type: string
	}
}

export interface League {
	readonly gamesplayed: number
	readonly gameswon: number

	readonly tr: number
	readonly rank: Rank
	readonly bestrank: Exclude<League['rank'], 'z'>

	readonly glicko?: number
	readonly rd?: number

	readonly apm?: number
	readonly pps?: number
	readonly vs?: number
	readonly decaying: boolean

	readonly standing: number
	readonly standing_local: number

	readonly next_rank?: MiddleRanks | null
	readonly prev_rank?: MiddleRanks | null

	readonly next_at: number
	readonly prev_at: number

	readonly percentile: number
	readonly percentile_rank: League['rank']
}

export interface Record {
	readonly record: {
		readonly _id: string
		readonly replayid: string

		readonly user: {
			readonly _id: string
			readonly username: string
		}

		readonly ts: Date

		readonly reuslts: {
			readonly stats: {
				readonly finaltime: number
				readonly score: number

				readonly zenith: {
					readonly altitude: number
				} | null
			}
		}
	}

	readonly best: Record

	rank: number | null
	rank_local: number | null
}

export interface ZenRecord {
	readonly level: number
	readonly score: number
}

export interface TetraLeagueRecord {
	readonly _id: string
	readonly stream: `${'40l' | 'blitz' | 'any'}_${'global' | 'userbest' | 'userrecent'}${
		| ''
		| `_${'userbest' | 'userrecent' | string}`}`
	readonly replayid: string

	readonly user: {
		readonly _id: string
		readonly username: string
	}

	readonly ts: Date
	readonly ismulti?: boolean
	readonly endcontext: Record<unknown, unknown>[] | Record<unknown, unknown>
}