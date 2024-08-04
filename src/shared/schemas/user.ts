import { Avatar } from '@/shared/components/avatar.vue'
import { z } from 'zod'

export default z.object({
	id: z.string(),
	avatar: Avatar,
	name: z.string()
})