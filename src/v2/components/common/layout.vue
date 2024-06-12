<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
</script>

<template>
	<n-config-provider :theme="darkTheme" class="font-sans">
		<n-layout position="absolute">
			<n-layout-content id="content" class="p-2 max-w-320">
				<n-flex vertical>
					<slot/>
				</n-flex>
			</n-layout-content>
		</n-layout>
	</n-config-provider>
</template>