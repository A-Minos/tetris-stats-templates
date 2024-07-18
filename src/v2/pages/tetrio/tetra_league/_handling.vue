<script lang="ts" setup>
defineProps<{
	readonly arr: number
	readonly das: number
	readonly sdf: number
}>()
</script>

<template>
	<n-card class="text-center bg-sky bg-opacity-50" size="small">
		<n-flex justify="space-evenly">
			<n-statistic :value="arr" label="ARR"/>
			<n-statistic :value="(`${das}F`)" label="DAS"/>

			<n-statistic v-if="sdf >= 41" label="SDF" value="∞"/>
			<n-statistic v-else :value="sdf" label="SDF"/>
		</n-flex>
	</n-card>
</template>