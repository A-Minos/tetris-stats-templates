<script lang="ts" setup>
import background from '@/assets/images/cards/Marathon.svg?url'
import Card from '@/components/info/_card.vue'
</script>

<template>
	<card :background="background" color="#854e0e">
		<slot/>
	</card>
</template>