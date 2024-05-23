<script lang="ts" setup>
import background from '@/assets/images/cards/ADPM.svg?url'
import Card from '@/components/info/card/_base.vue'
</script>

<template>
	<card :background="background" color="#235db4">
		<slot/>

		<template #extra>
			<slot name="extra"/>
		</template>
	</card>
</template>