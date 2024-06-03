<script lang="ts" setup>
import { darkTheme } from 'naive-ui'

const testTetrioInfo = () => {
	document.querySelector('template#data')!.innerHTML = JSON.stringify({
		user: {
			id: '5eb3a6530b29196c155074e8',
			name: 'WOSHIZHAZHA120',
			avatar: 'https://tetr.io/user-content/avatars/5eb3a6530b29196c155074e8.jpg?rv=1713869635827',
			banner: 'https://tetr.io/user-content/banners/605468e1d8bf2a23b076eba5.jpg?rv=1676715072965',
			badges: ['https://tetr.io/res/badges/secretgrade.png', 'https://tetr.io/res/badges/100player.png', 'https://tetr.io/res/badges/20tsd.png'],
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
			tr: 24830.47,
			glicko: 2806.04,
			rd: 62.27,
			global_rank: 327,
			country_rank: 16,
			apm: 119.32,
			pps: 2.97,
			vs: 234.00,

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

	document.querySelector('template#path')!.innerHTML = 'tetrio/info'
}
</script>

<template>
	<n-config-provider :theme="darkTheme">
		<n-layout position="absolute">
			<n-layout-content class="h-full">
				<div class="absolute top-1/2 left-1/2 -translate-1/2">
					<n-button @click="testTetrioInfo">tetrio/info</n-button>
				</div>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>