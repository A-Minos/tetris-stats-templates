<script lang="ts" setup>
import SharedRank from '@/shared/components/rank.vue'

defineProps<InstanceType<typeof SharedRank>['$props']>()
</script>

<template>
	<SharedRank v-bind="$props">
		<template v-slot="{ url }">
			<n-image :src="url"/>
		</template>
	</SharedRank>
</template>