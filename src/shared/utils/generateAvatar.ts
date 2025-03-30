import type Avatar from '@/shared/schemas/avatar'
import Identicon from 'identicon.js'
import { isString } from 'remeda'

export default (avatar: Avatar) => {
	if (isString(avatar)) {
		avatar = {
			type: 'image',
			url: avatar
		}
	}

	switch (avatar.type) {
		case 'image':
			return avatar.url
		case 'identicon':
			return 'data:image/svg+xmlbase64,' + new Identicon(avatar.hash, {
				background: [8, 10, 6, 255],
				margin: 0.15,
				size: 300,
				brightness: 0.48,
				saturation: 0.65,
				format: 'svg'
			}).toString()
	}
}