<script lang="ts" setup>
import Background from '@/assets/images/cards/40L.svg?url'
</script>

<template>
	<div class="relative w-68.75 h-31.25">
		<img :src="Background" alt="背景"/>

		<div class="absolute top-0 left-0 w-full h-full">
			<div class="absolute bottom-4.25 left-6 text-[#b42323] text-11 font-medium">
				<div class="w-60 overflow-hidden text-ellipsis">
					<slot/>
				</div>
			</div>
		</div>
	</div>
</template>
