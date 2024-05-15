<script lang="ts" setup>
import background from '@/assets/images/cards/40L.svg?url'
import Card from '@/components/info/_card.vue'
</script>

<template>
	<card :background="background" color="#b42323">
		<slot/>
	</card>
</template>