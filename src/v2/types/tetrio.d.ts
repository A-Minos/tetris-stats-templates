export interface Badge {
	readonly id: string
	readonly description: string
	readonly group: string | null
	readonly receive_at: Date | null
}