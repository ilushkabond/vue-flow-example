<script setup lang="ts">
import { Controls, MiniMap, VueFlow, useVueFlow, Background } from '@braks/vue-flow'
import Sidebar from './Sidebar.vue'
import CustomNode from './CustomNode.vue'
import { onMounted, ref } from 'vue';

const { onConnect, nodes, edges, addEdges, addNodes, viewport, project } = useVueFlow();

let id = 0
const getId = () => `node_${id++}`
const gapSize = 8;
const elements: any = ref([]);
const nodeSize = { width: 160, height: 36 };

const onDragOver = (event: any) => {
  event.preventDefault()
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}

onConnect((params) => addEdges([params]))

const onDrop = (event: any) => {
  const { label, icon } = JSON.parse(event.dataTransfer?.getData('application/vueflow'));
  const position = project({ x: event.layerX - nodeSize.width / 2, y: event.layerY - nodeSize.height / 2 });
  const newNode = {
    id: getId(),
    label: label,
    type: 'custom',
    position: position,
    data: { label: label, icon: icon },
  }
  addNodes([newNode])
}
</script>

<template>
  <Sidebar />
  <VueFlow v-model="elements" @dragover="onDragOver" class="customnodeflow"
    :default-edge-options="{ type: 'smoothstep' }" :default-zoom="1" :min-zoom="0.2" :max-zoom="4"
    :fit-view-on-init="true" @drop="onDrop">
    <template #node-custom="props">
      <CustomNode v-bind="props" />
    </template>
    <Background :gap="gapSize" />
    <Controls />
  </VueFlow>
</template>
