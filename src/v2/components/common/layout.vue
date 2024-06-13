<script lang="ts" setup>
import { darkTheme } from 'naive-ui'

defineProps<
	Partial<{
		readonly content_class: string
	}>
>()
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content id="content" :class="content_class" class="p-2">
				<n-flex vertical>
					<slot/>
				</n-flex>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>