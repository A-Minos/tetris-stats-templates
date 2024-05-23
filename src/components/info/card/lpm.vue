<script lang="ts" setup>
import background from '@/assets/images/cards/LPM.svg?url'
import Card from '@/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#4d7d0f">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>