<script setup>
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  videoStatus: {
    type: Object,
    required: false,
  },
});
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
  <div class="grid h-[65%] grid-cols-2 grid-rows-1 gap-3 p-4">
    <div class="grid grid-cols-1 grid-rows-[25%,auto] gap-px">
      <div :class="{
        'bg-bc-blue': props.videoStatus.hdmi,
        'bg-[#353a47]': !props.videoStatus.hdmi,
      }" class="row-span-1 flex items-center justify-center bg-[#353a47]">
        <h3 class="text-sm font-semibold">HDMI</h3>
      </div>
      <div :class="{
        'justify-start px-2': props.videoStatus.hdmi,
        'justify-center': !props.videoStatus.hdmi,
      }" class="flex items-center bg-[#4f6272]">
        <p v-if="!props.videoStatus.hdmi">Not Connected</p>
        <div v-else class="grid grid-cols-1 grid-rows-2 gap-2">
          <div>
            <p class="text-[0.65rem] font-medium">RESOLUTION</p>
            <p class="-mt-1 text-xl font-semibold">1080p</p>
          </div>
          <div>
            <p class="text-[0.65rem] font-medium">FRAMERATE</p>
            <p class="-mt-1 text-xl font-semibold">60</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 grid-rows-[25%,auto] gap-px">
      <div :class="{
        'bg-bc-blue': props.videoStatus.sdi,
        'bg-[#353a47]': !props.videoStatus.sdi,
      }" class="row-span-1 flex items-center justify-center bg-[#353a47]">
        <h3 class="text-sm font-semibold">SDI</h3>
      </div>
      <div :class="{
        'justify-start px-2': props.videoStatus.sdi,
        'justify-center': !props.videoStatus.sdi,
      }" class="flex items-center bg-[#4f6272]">
        <p v-if="!props.videoStatus.sdi">Not Connected</p>
        <div v-else class="grid grid-cols-1 grid-rows-2 gap-2">
          <div>
            <p class="text-[0.65rem] font-medium">RESOLUTION</p>
            <p class="-mt-1 text-xl font-semibold">1080p</p>
          </div>
          <div>
            <p class="text-[0.65rem] font-medium">FRAMERATE</p>
            <p class="-mt-1 text-xl font-semibold">59.94</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>
