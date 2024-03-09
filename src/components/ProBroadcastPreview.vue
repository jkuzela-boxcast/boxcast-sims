<script setup>
import SvgIcon from "./SvgIcon.vue";
</script>

<template>
<div class="h-full w-full bg-[#2c333d]">
  <div class="grid grid-cols-4 bg-[#353a47]">
    <div class="col-span-1 flex items-center justify-start pl-2">
      <SvgIcon @click="$emit('close-clicked')" icon="icon-chevron-down" :width="36"
        class="cursor-pointer text-bc-white hover:text-bc-blue" />
    </div>
    <div class="col-span-2 flex items-center justify-center">
      <p class="text-xl font-semibold">VIDEO</p>
    </div>
  </div>
  <div class="grid grid-cols-2 grid-rows-1 gap-2 p-4 h-4/6">
    <div class="grid grid-cols-1 grid-rows-3 gap-1">
      <div class="row-span-1 flex items-center justify-center bg-[#353a47] px-20 py-2">
        <h3 class="font-medium">
          HDMI
        </h3>
      </div>
      <div class="row-span-2 flex items-center justify-center bg-[#4f6272]">
        <p>Not Connected</p>
      </div>
    </div>
    <div class="grid grid-cols-1 grid-rows-3 gap-1">
      <div class="row-span-1 flex items-center justify-center bg-[#353a47] px-20 py-2">
        <h3 class="font-medium">
          SDI
        </h3>
      </div>
      <div class="row-span-2 flex items-center justify-center bg-[#4f6272]">
        <p>Not Connected</p>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>
