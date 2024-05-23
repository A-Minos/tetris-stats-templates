<script lang="ts" setup>
import background from '@/assets/images/cards/Challenge.svg?url'
import Card from '@/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#8e23b4">
		<slot/>
	</card>
</template>