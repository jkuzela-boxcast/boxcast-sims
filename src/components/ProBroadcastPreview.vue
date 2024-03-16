<script setup>
import SvgIcon from "./SvgIcon.vue";
</script>

<template>
  <div class="h-full w-full bg-black/25">
    <div class="absolute bottom-0 left-0 right-0 top-8 grid grid-cols-1 grid-rows-[17%,auto,auto] bg-[#5cd0d6]">
      <div class="flex h-10 items-center justify-center">
        <SvgIcon @click="$emit('close-clicked')" icon="icon-chevron-down" :width="36"
          class="cursor-pointer text-bc-white hover:text-bc-blue" />
      </div>
      <div class="px-4">
        <p>
          <span class="rounded-sm bg-red-600 px-2 py-px font-semibold">LIVE</span>
          0 Viewers
        </p>
        <h3 class="text-2xl font-semibold">My First Broadcast</h3>
        <p>Ending in 5 hrs 41 mins 49 secs</p>
      </div>
      <div class="grid grid-cols-4 grid-rows-2 items-start justify-center bg-[#42b4ce] px-2 py-2">
        <div class="px-2">
          <p class="text-sm">DURATION</p>
          <p class="text-sm font-semibold">5 hrs 54 mins</p>
        </div>
        <div class="px-2">
          <p class="text-sm">TYPE</p>
          <p class="text-sm font-semibold">Private</p>
        </div>
        <div class="px-2">
          <p class="text-sm">VIDEO</p>
          <p class="text-sm font-semibold">SDI</p>
        </div>
        <div class="px-2">
          <p class="text-sm">AUDIO</p>
          <p class="text-sm font-semibold">Default</p>
        </div>
        <div class="px-2">
          <p class="text-sm">RESOLUTION</p>
          <p class="text-sm font-semibold">1080p</p>
        </div>
        <div class="px-2">
          <p class="text-sm">FRAME RATE</p>
          <p class="text-sm font-semibold">59.94</p>
        </div>
        <div class="px-2">
          <p class="text-sm">BITRATE</p>
          <p class="text-sm font-semibold">18.30 Mbps</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
