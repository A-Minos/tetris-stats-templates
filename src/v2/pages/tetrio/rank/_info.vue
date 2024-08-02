<script lang="ts" setup>
import rank from "@/v2/components/common/rank.vue";
import type { User } from "@/v2/types/tetrio";

defineProps<{
	readonly name: Exclude<User["league"]["rank"], "Z">;
	readonly require_tr: number;
	readonly trending: number;
}>();
</script>

<template>
	<n-flex :size="0" align="center">
		<n-flex align="center" size="small">
			<rank :rank="name" class="[&>img]:size-6" />
			<n-text class="text-5 fw-bold">{{ require_tr }} TR</n-text>
		</n-flex>

		<n-text :type="trending >= 0 ? 'success' : 'error'" class="ml-2 fw-bold">
			{{ trending >= 0 ? "↑" : "↓" }}{{ Math.abs(trending) }}
		</n-text>
	</n-flex>
</template>
