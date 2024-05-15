<script lang="ts" setup>
import background from '@/assets/images/cards/APM.svg?url'
import Card from '@/components/info/_card.vue'
</script>

<template>
	<card :background="background" color="#b5530a">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>