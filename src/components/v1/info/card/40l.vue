<script lang="ts" setup>
import background from '@/assets/v1/images/cards/40L.svg?url'
import Card from '@/components/v1/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#b42323">
		<slot/>
	</card>
</template>