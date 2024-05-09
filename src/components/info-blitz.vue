<script lang="ts" setup>
import Background from '@/assets/images/cards/Blitz.svg?url'
</script>

<template>
	<div class="relative w-68.75 h-31.25">
		<img :src="Background" alt="背景"/>

		<div class="absolute top-0 left-0 w-full h-full">
			<div class="absolute bottom-4.25 left-6 text-[#8e23b4] text-11">
				<div class="w-60 overflow-hidden text-ellipsis">
					<slot/>
				</div>
			</div>
		</div>
	</div>
</template>