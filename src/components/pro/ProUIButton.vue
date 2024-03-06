<script setup>
const props = defineProps({
  label: String,
  icon: String,
  iconWidth: String
})

import SvgIcon from '/src/components/SvgIcon.vue'

</script>

<template>
<div class="cursor-pointer bg-[#364050] hover:bg-[#323b4a] p-2">
  <div class="flex items-center">
    <SvgIcon :name="icon" :w="iconWidth" class="text-bc-white" />
    <p class="font-medium ml-2">{{ props.label }}</p>
  </div>
</div>
</template>

<style scoped></style>