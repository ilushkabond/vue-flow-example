<script setup lang="ts">
import CustomNode from './CustomNode.vue';
import { useVueFlow } from '@braks/vue-flow';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

const flowKey = 'flow-key';
const { setNodes, setEdges, setTransform, toObject } = useVueFlow();
let snackbarMessage = ref('');
let snackbarShow = ref(false);

const onDragStart = (event: any, params: any) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', JSON.stringify(params));
    event.dataTransfer.effectAllowed = 'move';
  }
};

const onCollapse = (event: any) => {
  const nodesContainer = event.target.nextElementSibling;
  if (event.target.classList.contains('active')) {
    nodesContainer.style.display = 'none';
  } else {
    nodesContainer.style.display = 'flex';
  }
  event.target.classList.toggle('active');
};

const onReset = () => {
  setNodes([]);
  setEdges([]);

  showSnackbar('reset');
}

const onSave = () => {
  localStorage.setItem(flowKey, JSON.stringify(toObject()));
  showSnackbar('saved');
}

const onRestore = () => {
  /* TODO: fix any */
  const flow = JSON.parse(<any>localStorage.getItem(flowKey))

  if (flow) {
      const [x = 0, y = 0] = flow.position
      setNodes(flow.nodes)
      setEdges(flow.edges)
      setTransform({ x, y, zoom: flow.zoom || 0})
  }

  showSnackbar('loaded');
}

const showSnackbar = (text: string) => {
  snackbarMessage.value = text;
  snackbarShow.value = true;
}

const removeSnackbar = () => { snackbarShow.value = false; }
</script>

<template>
  <div class="aside">
    <div class="controls">
      <button class="control" @click="onReset">new</button>
      <button class="control" @click="onSave">save</button>
      <button class="control" @click="onRestore">load</button>
    </div>
    <div class="category">
      <button class="collapsible active" @click="onCollapse">Monitor</button>
      <div class="nodes">
        <CustomNode class="vue-flow__node-custom" :draggable="true"
          @dragstart="onDragStart($event, { label: 'Source', icon: 'monitor', menu: true })"
          :data="{ label: 'Source', icon: 'monitor', menu: true }" />
      </div>
    </div>
    <div class="category">
      <button class="collapsible active" @click="onCollapse">Common</button>
      <div class="nodes">
        <CustomNode class="vue-flow__node-custom" :draggable="true"
          @dragstart="onDragStart($event, { label: 'Decide', icon: 'shuffle', menu: true })"
          :data="{ label: 'Decide', icon: 'shuffle', menu: true }" />
      </div>
    </div>
    <div class="category">
      <button class="collapsible active" @click="onCollapse">Transcode</button>
      <div class="nodes">
        <CustomNode class="vue-flow__node-custom" :draggable="true"
          @dragstart="onDragStart($event, { label: 'GPU', icon: 'gpu', menu: true })"
          :data="{ label: 'GPU', icon: 'gpu', menu: true }" />
          <CustomNode class="vue-flow__node-custom" :draggable="true"
          @dragstart="onDragStart($event, { label: 'Cloud', icon: 'cloud', menu: true })"
          :data="{ label: 'Cloud', icon: 'cloud', menu: true }" />
      </div>
    </div>
    <div class="category">
      <button class="collapsible active" @click="onCollapse">Operations</button>
      <div class="nodes">
        <CustomNode class="vue-flow__node-custom" :draggable="true"
          @dragstart="onDragStart($event, { label: 'Analyze', icon: 'ruler', menu: true })"
          :data="{ label: 'Analyze', icon: 'ruler', menu: true }" />
      </div>
    </div>
  <div class="snackbar" :class="{ 'show': snackbarShow }" v-on:animationend="removeSnackbar">{{ snackbarMessage }}</div>
  </div>
</template>
