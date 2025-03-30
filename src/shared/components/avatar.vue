<script lang="ts" setup>
import Avatar from '@/shared/schemas/avatar'
import generateAvatar from '@/shared/utils/generateAvatar'

const props = defineProps<{
	readonly avatar: Avatar
}>()
</script>

<template>
	<img :src="generateAvatar(avatar)" alt="头像"/>
</template>