<script lang="ts" setup>
import background from '@/v1/assets/images/cards/40L.svg?url'
import Card from '@/v1/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#b42323">
		<slot/>
	</card>
</template>