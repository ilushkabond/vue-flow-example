<script setup lang="ts">
// @ts-nocheck
import { Handle, Position, useVueFlow } from '@braks/vue-flow'

import MonitorIcon from 'vue-material-design-icons/Monitor.vue'
import RulerIcon from 'vue-material-design-icons/Ruler.vue'
import ShuffleIcon from 'vue-material-design-icons/Shuffle.vue'
import MemoryIcon from 'vue-material-design-icons/Memory.vue'
import ExpansionCardIcon from 'vue-material-design-icons/ExpansionCard.vue'
import CloudIcon from 'vue-material-design-icons/Cloud.vue'

const { removeNodes } = useVueFlow();

const props = defineProps({
  id: String,
  data: {
    type: Object,
    icon: String,
    menu: Boolean,
    required: true,
  }
});

const remove = () => {
  removeNodes([props.id], true);
};
</script>

<template>
  <div class="custom__node">
    <div>{{ data!.label }}</div>
    <div class="icon">
      <MonitorIcon v-if="data!.icon === 'monitor'" fillColor="#ccc" :size="16" />
      <ShuffleIcon v-if="data!.icon === 'shuffle'" fillColor="#ccc" :size="16" />
      <MemoryIcon v-if="data!.icon === 'cpu'" fillColor="#ccc" :size="16" />
      <ExpansionCardIcon v-if="data!.icon === 'gpu'" fillColor="#ccc" :size="16" />
      <CloudIcon v-if="data!.icon === 'cloud'" fillColor="#ccc" :size="16" />
      <RulerIcon v-if="data!.icon === 'ruler'" fillColor="#ccc" :size="16" />
      <div v-if="!data.menu" style="cursor: pointer" @click="remove">X</div>
    </div>
    <Handle v-if="!data!.menu" type="source" :position="Position.Left" />
    <Handle v-if="!data!.menu" type="source" :position="Position.Right" />
  </div>
</template>
