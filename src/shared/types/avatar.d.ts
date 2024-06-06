interface IdenticonAvatar {
	readonly type: 'identicon'
	readonly hash: string
}

type Avatar = string | IdenticonAvatar

export default Avatar