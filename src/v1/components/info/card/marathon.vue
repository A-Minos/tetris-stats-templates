<script lang="ts" setup>
import background from '@/v1/assets/images/cards/Marathon.svg?url'
import Card from '@/v1/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#075A86">
		<slot/>
	</card>
</template>