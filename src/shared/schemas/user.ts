import { z } from 'zod'
import Avatar from './avatar.ts'

const User = z.object({
	avatar: Avatar,
	name: z.string()
})

export default User
