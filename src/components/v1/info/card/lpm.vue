<script lang="ts" setup>
import background from '@/assets/v1/images/cards/LPM.svg?url'
import Card from '@/components/v1/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#4d7d0f">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>