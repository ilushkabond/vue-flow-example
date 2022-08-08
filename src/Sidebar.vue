<script setup lang="ts">
import CustomNode from './CustomNode.vue';

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
</script>

<template>
  <div class="aside">
    <div class="controls">
      <button>save</button>
      <button>load</button>
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
  </div>
</template>
