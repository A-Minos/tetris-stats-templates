import type { BackendTime } from '@/v2/types/utils'

export interface Badge {
	readonly id: string
	readonly description: string
	readonly group: string | null
	readonly receive_at: BackendTime | null
}