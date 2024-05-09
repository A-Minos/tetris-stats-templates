interface IdenticonAvatar {
	readonly type: 'identicon'
	readonly hash: string
}

export type Avatar = string | IdenticonAvatar
export type TetraLeagueHistoryRecord = [record_at: number, tr: number]