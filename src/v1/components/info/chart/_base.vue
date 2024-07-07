<script lang="ts" setup>
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

use([SVGRenderer])

defineProps<{
	readonly option: {}
}>()

const show = ref(false)

onMounted(() => {
	show.value = true
})
</script>

<template>
	<v-chart v-if="show" :option="option"/>
</template>