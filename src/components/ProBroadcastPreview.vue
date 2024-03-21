<script setup>
import { ref } from "vue";

import SvgIcon from "./SvgIcon.vue";

const statOpen = ref(false);
const hideControls = ref(false)
</script>

<template>
<div class="h-full w-full bg-[#2c333d]">
  <div v-show="hideControls === false" class="absolute flex w-full px-2 items-center justify-between bg-black/50">
    <SvgIcon @click="$emit('close-clicked')" icon="icon-chevron-down" :width="36"
      class="cursor-pointer text-bc-white hover:text-bc-blue" />
    <div class="flex items-center justify-center">
      <p class="text-xl font-semibold">My First Broadcast</p>
    </div>
    <SvgIcon @click="statOpen = !statOpen" icon="icon-info" :width="24"
      class="cursor-pointer text-bc-white hover:text-bc-blue" />
  </div>
  <img @click="hideControls = !hideControls" src="/src/assets/img/broadcast_preview.png" alt="" />
  <div v-show="hideControls === false"
    class="absolute bottom-0 grid w-full grid-cols-3 grid-rows-1 items-center justify-center gap-6 bg-black/50 px-4 py-2">
    <div>
      <span class="rounded-sm bg-red-600 px-[0.35rem] py-[0.2rem] text-[0.65rem] font-semibold">LIVE</span>
      <span class="ml-1 text-[0.75rem]">0 Viewers</span>
    </div>
    <div>
      <p>12:13 / 5:54:39</p>
    </div>
    <div class="flex flex-col gap-1">
      <div class="h-2 w-[50%] bg-[#64dca9]"></div>
      <div class="h-2 w-[46%] bg-[#64dca9]"></div>
    </div>
  </div>
  <div v-show="statOpen"
    class="font-medium absolute right-[2%] top-[17%] bg-black/50 grid grid-cols-2 grid-rows-1 p-3 w-[40%]">
    <ul class="text-[0.75rem]">
      <li>VIDEO</li>
      <li>AUDIO</li>
      <li>RESOLUTION</li>
      <li>FRAME RATE</li>
      <li>BITRATE</li>
    </ul>
    <ul class="font-medium text-[0.75rem]">
      <li>SDI</li>
      <li>Default</li>
      <li>1080p</li>
      <li>59.94</li>
      <li>18.30 Mbps</li>
    </ul>
  </div>
</div>
</template>

<style></style>
