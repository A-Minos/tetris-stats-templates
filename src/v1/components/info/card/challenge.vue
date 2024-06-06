<script lang="ts" setup>
import background from '@/v1/assets/images/cards/Challenge.svg?url'
import Card from '@/v1/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#8e23b4">
		<slot/>
	</card>
</template>