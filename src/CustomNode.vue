<script setup lang="ts">
import { Handle, Position } from '@braks/vue-flow'
import MonitorIcon from 'vue-material-design-icons/Monitor.vue'
import RulerIcon from 'vue-material-design-icons/Ruler.vue'
import ShuffleIcon from 'vue-material-design-icons/Shuffle.vue'
import MemoryIcon from 'vue-material-design-icons/Memory.vue'
import ExpansionCardIcon from 'vue-material-design-icons/ExpansionCard.vue'
import CloudIcon from 'vue-material-design-icons/Cloud.vue'

const props = defineProps({
  data: Object
})
</script>

<template>
  <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
    <div>{{ data.label }}</div>
    <MonitorIcon v-if="data.icon === 'monitor'" fillColor="#ccc" :size="16" />
    <RulerIcon v-if="data.icon === 'ruler'" fillColor="#ccc" :size="16" />
    <ShuffleIcon v-if="data.icon === 'shuffle'" fillColor="#ccc" :size="16" />
    <MemoryIcon v-if="data.icon === 'cpu'" fillColor="#ccc" :size="16" />
    <ExpansionCardIcon v-if="data.icon === 'gpu'" fillColor="#ccc" :size="16" />
    <CloudIcon v-if="data.icon === 'cloud'" fillColor="#ccc" :size="16" />
    <Handle type="source" :position="Position.Left" />
    <Handle type="target" :position="Position.Right" />
  </div>
</template>
