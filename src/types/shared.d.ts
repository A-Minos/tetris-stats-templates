interface IdenticonAvatar {
	readonly type: 'identicon'
	readonly hash: string
}

export type Avatar = string | IdenticonAvatar

export interface TetraLeagueHistoryRecord {
	readonly record_at: number,
	readonly tr: number
}