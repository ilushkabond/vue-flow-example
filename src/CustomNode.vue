<script setup lang="ts">
// @ts-nocheck
import { Handle, Position } from '@braks/vue-flow'

import MonitorIcon from 'vue-material-design-icons/Monitor.vue'
import RulerIcon from 'vue-material-design-icons/Ruler.vue'
import ShuffleIcon from 'vue-material-design-icons/Shuffle.vue'
import MemoryIcon from 'vue-material-design-icons/Memory.vue'
import ExpansionCardIcon from 'vue-material-design-icons/ExpansionCard.vue'
import CloudIcon from 'vue-material-design-icons/Cloud.vue'

defineProps({
  data: {
    type: Object,
    icon: String,
    menu: Boolean,
    required: true,
  }
})
</script>

<template>
  <div class="custom__node">
    <div>{{ data!.label }}</div>
    <MonitorIcon v-if="data!.icon === 'monitor'" fillColor="#ccc" :size="16" />
    <ShuffleIcon v-if="data!.icon === 'shuffle'" fillColor="#ccc" :size="16" />
    <MemoryIcon v-if="data!.icon === 'cpu'" fillColor="#ccc" :size="16" />
    <ExpansionCardIcon v-if="data!.icon === 'gpu'" fillColor="#ccc" :size="16" />
    <CloudIcon v-if="data!.icon === 'cloud'" fillColor="#ccc" :size="16" />
    <RulerIcon v-if="data!.icon === 'ruler'" fillColor="#ccc" :size="16" />
    <Handle v-if="!data!.menu" type="source" :position="Position.Left" />
    <Handle v-if="!data!.menu" type="source" :position="Position.Right" />
  </div>
</template>
