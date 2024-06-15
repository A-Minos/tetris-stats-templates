<script lang="ts" setup>
defineProps<{
	readonly single: number
	readonly double: number
	readonly triple: number
	readonly quad: number

	readonly tspins: {
		readonly total: number
		readonly single: number
		readonly double: number
		readonly triple: number

		readonly mini: {
			readonly total: number
			readonly single: number
			readonly double: number
		}
	}

	readonly all_clear: number
}>()
</script>

<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<n-flex justify="space-between">
				<n-text>1 / 2 / 3 / 4</n-text>
				<n-flex :size="0">
					<n-text>{{ single }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ double }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ triple }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ quad }}</n-text>
				</n-flex>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>T / 迷你 T</n-text>

				<n-flex :size="0">
					<n-text>{{ tspins.total }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ tspins.mini.total }}</n-text>
				</n-flex>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>T1 / T2 / T3</n-text>

				<n-flex :size="0">
					<n-text>{{ tspins.single }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ tspins.double }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ tspins.triple }}</n-text>
				</n-flex>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>迷你 T1 / 迷你 T2</n-text>

				<n-flex :size="0">
					<n-text>{{ tspins.mini.single }}</n-text>
					<n-text>&nbsp;/&nbsp;</n-text>
					<n-text>{{ tspins.mini.double }}</n-text>
				</n-flex>
			</n-flex>

			<n-flex justify="space-between">
				<n-text>全清</n-text>
				<n-text>{{ all_clear }}</n-text>
			</n-flex>
		</n-flex>
	</n-card>
</template>