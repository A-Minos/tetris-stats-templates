<script lang="ts" setup>
defineProps<{
	readonly is_winner: boolean

	readonly user: {
		readonly id: string
		readonly name: string
	}

	readonly points: number

	readonly average_data: {
		readonly pps: number
		readonly apm: number
		readonly apl: number
		readonly vs: number
		readonly adpl: number
	}
}>()
</script>

<template>
	<n-card :class="(is_winner ? 'bg-yellow' : 'bg-red')" class="bg-opacity-50 text-center" size="small">
		<n-flex :size="0" vertical>
			<n-flex align="center" justify="space-evenly">
				<div class="text-left">
					<n-flex :size="0" vertical>
						<n-text class="text-8 fw-bold" type="success">{{ user.name }}</n-text>
						<n-text :depth="3" class="text-4 leading-none">{{ user.id }}</n-text>
					</n-flex>
				</div>

				<n-text class="text-10">{{ points }}</n-text>
			</n-flex>

			<n-divider class="!mt-2 !mb-0"/>

			<div class="scale-75">
				<n-flex justify="space-evenly">
					<n-statistic :value="average_data.pps" label="PPS"/>

					<n-statistic label="APM">
						<n-flex :size="0" vertical>
							<n-text>{{ average_data.apm }}</n-text>

							<n-text :depth="3" class="text-sm">
								(x{{ average_data.apl }})
							</n-text>
						</n-flex>
					</n-statistic>

					<n-statistic label="VS">
						<n-flex :size="0" vertical>
							<n-text>{{ average_data.vs }}</n-text>

							<n-text :depth="3" class="text-sm">
								(x{{ average_data.adpl }})
							</n-text>
						</n-flex>
					</n-statistic>
				</n-flex>
			</div>
		</n-flex>
	</n-card>
</template>