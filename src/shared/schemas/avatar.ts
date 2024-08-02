import { z } from 'zod'

const IdenticonAvatar = z.object({
	type: z.literal('identicon'),
	hash: z.string()
})

const Avatar = z.union([IdenticonAvatar, z.string()])

type Avatar = z.infer<typeof Avatar>;

export default Avatar
