<script lang="ts" setup>
import type Avatar from '@/shared/types/avatar'
import avatar from '@/v2/components/common/avatar.vue'

const props = defineProps<{
	readonly id: string
	readonly name: string
	readonly avatar: Avatar
}>()
</script>

<template>
	<n-card class="w-fit">
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex align="center" vertical>
				<avatar :avatar="props.avatar" :user_id="id" class="[&,&>img]:size-32"/>

				<n-text class="text-(6 current) fw-bold leading-none">
					{{ name }}
				</n-text>

				<n-text :depth="3" class="text-xs">{{ id }}</n-text>
			</n-flex>
		</div>
	</n-card>
</template>