<script lang="ts" setup>
import { isNonNullish } from 'remeda'

defineProps<{
	readonly master: string | null
}>()
</script>

<template>
	<n-alert :show-icon="false" type="warning">
		<div class="text-center">
			<n-flex :size="0" vertical>
				<n-text class="text-5xl fw-bold">BOT</n-text>

				<template v-if="isNonNullish(master)">
					<n-text class="text-xl mt-2 fw-bold">开发者: {{ master }}</n-text>
				</template>
			</n-flex>
		</div>
	</n-alert>
</template>