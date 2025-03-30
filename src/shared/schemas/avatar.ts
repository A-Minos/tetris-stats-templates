import { z } from 'zod'

const ImageAvatar = z.object({
	type: z.literal('image'),
	url: z.string()
})

const IdenticonAvatar = z.object({
	type: z.literal('identicon'),
	hash: z.string()
})

const Avatar = z.union([
	z.string(),
	ImageAvatar,
	IdenticonAvatar
])

type Avatar = z.infer<typeof Avatar>

export default Avatar