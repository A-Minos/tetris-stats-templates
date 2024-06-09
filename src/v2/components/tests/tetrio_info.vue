<script lang="ts" setup>
const path = 'v2/tetrio/info'

const test = () => {
	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: '5eb3a6530b29196c155074e8',
			name: 'WOSHIZHAZHA120',
			avatar: 'https://tetr.io/user-content/avatars/5eb3a6530b29196c155074e8.jpg',
			banner: 'https://tetr.io/user-content/banners/605468e1d8bf2a23b076eba5.jpg',
			badges: [
				{
					id: 'secretgrade',
					label: 'Achieved the full Secret Grade',
					group: null,
					ts: null
				},
				{
					id: '100player',
					label: 'Emerged victorious in a 100+ player game',
					group: null,
					ts: '2023-06-02T13:20:29.225Z'
				},
				{
					id: '20tsd',
					label: 'Cleared 40 LINES with only T-Spin Doubles',
					group: null,
					ts: '2023-08-19T09:00:24.017Z'
				}
			],
			country: 'cn',
			xp: 15033024,
			friend_count: 184,
			playtime: '1079 小时',
			supporter_tier: 3,
			bad_standing: true,
			verified: true,
			bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			join_at: '2020/5/7 14:10:27'
		},
		tetra_league: {
			rank: 'x',
			highest_rank: 'x',

			tr: 24830.47,
			glicko: 2806.04,
			rd: 62.27,
			global_rank: 327,
			country_rank: 16,

			pps: 2.97,

			apm: 119.32,
			apl: 1.67,

			vs: 234.00,
			adpl: 1.96,

			statistic: {
				total: 5700,
				wins: 3004
			}
		},
		statistic: {
			total: 7625,
			wins: 3747
		},
		sprint: {
			time: '0:22.293',
			global_rank: 367,
			play_at: '2024/3/13 17:05:49'
		},
		blitz: {
			score: 389548,
			play_at: '2024/1/7 16:24:20'
		},
		zen: {
			score: 13383165,
			level: 209
		}
	})

	document.querySelector('template#path')!.innerHTML = path
}
</script>

<template>
	<n-button @click="test">测试 {{ path }}</n-button>
</template>