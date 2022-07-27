<script setup lang="ts">
import { Controls, MiniMap, VueFlow, useVueFlow } from '@braks/vue-flow'
import { ref } from 'vue'
import CustomNode from './CustomNode.vue'

import { initialElements } from './initial-elements'

const elements = ref(initialElements)

const { onConnect, addEdges } = useVueFlow()

onConnect((params) => addEdges([params]))
</script>

<template>
  <VueFlow v-model="elements" class="customnodeflow" :default-edge-options="{ type: 'smoothstep' }" :default-zoom="1"
    :min-zoom="0.2" :max-zoom="4" :fit-view-on-init="true">
    <template #node-custom="props">
      <CustomNode :data="props.data" />
    </template>
    <MiniMap />
    <Controls />
  </VueFlow>
</template>
