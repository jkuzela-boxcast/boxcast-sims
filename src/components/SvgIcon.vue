<script setup>
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 24
  },
})

const dynamicComponent = computed(() => {
  const name = props.icon;
  return defineAsyncComponent(() => import(`../assets/icons/${name}.vue`));
})

</script>

<template>
<component :is="dynamicComponent" :width="+width" :height="+width" />
</template>
