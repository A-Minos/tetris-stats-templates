<script lang="ts" setup>
import Background from '@/assets/images/cards/ADPM.svg?url'
</script>

<template>
	<div class="relative w-68.75 h-31.25">
		<img :src="Background" alt="背景"/>

		<div class="absolute top-0 left-0 w-full h-full">
			<div class="absolute bottom-4.25 left-6 text-[#235db4] text-11 font-medium">
				<div class="w-48 overflow-hidden text-ellipsis">
					<slot/>
				</div>
			</div>

			<div class="absolute bottom-6.75 right-6.25 text-[#235db4] text-3.75">
				<div class="w-15 text-right overflow-hidden text-ellipsis">
					<slot name="extra"/>
				</div>
			</div>
		</div>
	</div>
</template>
