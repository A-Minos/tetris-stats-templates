<script lang="ts" setup>
import background from '@/assets/images/cards/LPM.svg?url'
import Card from '@/components/info/_card.vue'
</script>

<template>
	<card :background="background" color="#4d7d0f">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>