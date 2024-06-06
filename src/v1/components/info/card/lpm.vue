<script lang="ts" setup>
import background from '@/v1/assets/images/cards/LPM.svg?url'
import Card from '@/v1/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#4d7d0f">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>