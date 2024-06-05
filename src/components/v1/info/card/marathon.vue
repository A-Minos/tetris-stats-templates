<script lang="ts" setup>
import background from '@/assets/v1/images/cards/Marathon.svg?url'
import Card from '@/components/v1/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#854e0e">
		<slot/>
	</card>
</template>