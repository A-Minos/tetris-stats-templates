<script lang="ts" setup>
import AvatarCard from '@/shared/components/avatar.vue'
import type AvatarType from '@/shared/schemas/avatar.ts'

defineProps<{
	readonly id: string
	readonly name: string
	readonly avatar: AvatarType
}>()
</script>

<template>
	<n-card class="w-fit">
		<div class="flex flex-col justify-center items-center h-full">
			<n-flex align="center" vertical>
				<avatar-card :avatar="avatar" class="[&,&>img]:size-32"/>

				<n-text class="text-(6 current) fw-bold leading-none">
					{{ name }}
				</n-text>

				<n-text :depth="3" class="text-xs">{{ id }}</n-text>
			</n-flex>
		</div>
	</n-card>
</template>