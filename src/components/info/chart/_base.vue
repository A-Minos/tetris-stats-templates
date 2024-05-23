<script generic="T" lang="ts" setup>
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { onMounted, ref } from 'vue'
import VChart from 'vue-echarts'

use([SVGRenderer])

defineProps<{
	readonly option: T
}>()

const show = ref(false)

onMounted(() => {
	show.value = true
})
</script>

<template>
	<v-chart v-if="show" :option="option"/>
</template>