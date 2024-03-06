<script setup>
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  name: String,
  w: String,
  h: String
})

const dynamicComponent = computed(() => {
  const name = props.name;
  return defineAsyncComponent(() => import(`../assets/icons/${name}.vue`));
})

</script>

<template>
<component :is="dynamicComponent" :width="w" :height="h" />
</template>
