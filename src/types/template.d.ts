import { BindingStatus } from '@/core/enums.ts'

export interface BindingData {
	readonly game_type: string
	readonly status: BindingStatus
	readonly user_name: string
	readonly user_avatar: string
	readonly bot_name: string
	readonly bot_avatar: string
	readonly command: string
}

export type TemplateData = {
	readonly type: 'binding'
	readonly data: BindingData
}

export type TemplateType = TemplateData['type']