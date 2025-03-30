<script lang="ts" setup>
import type AvatarType from '@/shared/schemas/avatar'
import generateAvatar from '@/shared/utils/generateAvatar'

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
				<n-image :img-props="{ class: 'size-32' }" :src="generateAvatar(avatar)"/>

				<n-text class="text-(6 current) fw-bold leading-none">
					{{ name }}
				</n-text>

				<n-text :depth="3" class="text-xs">{{ id }}</n-text>
			</n-flex>
		</div>
	</n-card>
</template>