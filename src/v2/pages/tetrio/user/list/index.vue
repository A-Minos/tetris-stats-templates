<script lang="ts">
import type { User } from '@/v2/types/tetrio'
import type { BackendTime } from '@/v2/types/utils'

const data: {
	readonly users: {
		readonly id: string
		readonly name: string
		readonly country: string | null
		readonly verified: boolean

		readonly tetra_league: {
			readonly rank: User['league']['rank']
			readonly tr: number

			readonly glicko: number | null
			readonly rd: number | null
			readonly decaying: boolean

			readonly pps: number
			readonly apm: number
			readonly apl: number

			readonly vs: number | null
			readonly adpl: number | null
		}

		readonly xp: number
		readonly join_at: BackendTime | null
	}[]
} = JSON.parse(
	document.querySelector('template#data')!.innerHTML
)

export type Data = typeof data
</script>

<script lang="ts" setup>
import layout from '@/v2/components/common/layout.vue'
import powered from '@/v2/components/common/footer.vue'

import list_user from '@/v2/pages/tetrio/user/list/_user.vue'
import list_statistic from '@/v2/pages/tetrio/user/list/_statistic.vue'
import list_tl from '@/v2/pages/tetrio/user/list/_tetra-league.vue'

import { isNullish } from 'remeda'

const checkDecaying = (user: Data['users'][number]) => {
	if (isNullish(user.tetra_league.rd)) {
		return false
	}

	return user.tetra_league.decaying && user.tetra_league.rd >= 98
}
</script>

<template>
	<layout content_class="max-w-320">
		<template v-for="user in data.users">
			<n-card :class="{ 'opacity-50': checkDecaying(user) }" size="small">
				<n-flex justify="space-between">
					<list_user :id="user.id" :country="user.country" :name="user.name" :verified="user.verified"
							   :xp="user.xp"/>

					<list_statistic :adpl="user.tetra_league.adpl" :apl="user.tetra_league.apl"
									:apm="user.tetra_league.apm" :pps="user.tetra_league.pps"
									:vs="user.tetra_league.vs"/>

					<list_tl :decaying="user.tetra_league.decaying" :glicko="user.tetra_league.glicko"
							 :rank="user.tetra_league.rank" :rd="user.tetra_league.rd" :tr="user.tetra_league.tr"/>
				</n-flex>
			</n-card>
		</template>

		<powered/>
	</layout>
</template>

<style lang="scss">
@import '@/v2/styles/main';
</style>