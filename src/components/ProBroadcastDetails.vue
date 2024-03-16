<script setup>
import SvgIcon from "./SvgIcon.vue";
</script>

<template>
<div class="h-full w-full">
  <div class="absolute bottom-0 left-0 right-0 top-8 grid grid-cols-1 grid-rows-[15%,auto,auto] bg-[#5cd0d6]">
    <div class="flex items-center justify-center">
      <SvgIcon @click="$emit('close-clicked')" icon="icon-chevron-down" :width="32"
        class="cursor-pointer text-bc-white hover:text-bc-blue" />
    </div>
    <div class="px-6 py-2">
      <p>
        <span class="text-[0.65rem] rounded-sm bg-red-600 px-[0.35rem] py-[0.2rem] font-semibold">LIVE</span>
        <span class="ml-1 text-[0.75rem]">0 Viewers</span>
      </p>
      <h3 class="text-2xl font-semibold">My First Broadcast</h3>
      <p class="text-sm">Ending in 5 hrs 41 mins 49 secs</p>
    </div>
    <div class="grid grid-cols-[30%,auto,auto,auto] grid-rows-2 items-start bg-[#42b4ce] py-3 px-4">
      <div class="px-2">
        <p class="text-[0.65rem]">DURATION</p>
        <p class="text-sm font-semibold">5 hrs 54 mins</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">TYPE</p>
        <p class="text-sm font-semibold">Private</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">VIDEO</p>
        <p class="text-sm font-semibold">SDI</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">AUDIO</p>
        <p class="text-sm font-semibold">Default</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">RESOLUTION</p>
        <p class="text-sm font-semibold">1080p</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">FRAME RATE</p>
        <p class="text-sm font-semibold">59.94</p>
      </div>
      <div class="px-2">
        <p class="text-[0.65rem]">BITRATE</p>
        <p class="text-sm font-semibold">18.30 Mbps</p>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>
