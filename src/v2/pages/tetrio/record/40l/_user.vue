<script lang="ts" setup>
import avatar from '@/v2/components/common/avatar.vue'

defineProps<{
	readonly id: string
	readonly name: string
}>()
</script>

<template>
	<n-card class="w-fit">
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex align="center" vertical>
				<avatar :user_id="id" class="[&,&>img]:size-32"/>

				<n-text class="text-(6 current) fw-bold leading-none">
					{{ name }}
				</n-text>

				<n-text :depth="3" class="text-xs">{{ id }}</n-text>
			</n-flex>
		</div>
	</n-card>
</template>