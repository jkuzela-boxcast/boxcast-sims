<script setup>
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  networkStatus: {
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
      <p class="text-xl font-semibold">NETWORK</p>
    </div>
  </div>
  <div class="grid h-[87%] grid-cols-2 grid-rows-1 gap-2 p-4">
    <div class="grid grid-cols-1 grid-rows-[25%,auto] gap-px">
      <div :class="{
        'bg-bc-blue': props.networkStatus.ethernet,
        'bg-[#353a47]': !props.networkStatus.ethernet,
      }" class="row-span-1 flex items-center justify-center bg-[#353a47]">
        <SvgIcon icon="icon-ethernet" :width="+18" class="text-bc-white mr-2" />
        <h3 class="text-sm font-semibold">Ethernet</h3>
      </div>
      <div :class="{
        'justify-start px-2': props.networkStatus.ethernet,
        'justify-center': !props.networkStatus.ethernet,
      }" class="flex items-center bg-[#4f6272]">
        <p v-if="!props.networkStatus.ethernet">Not Connected</p>
        <div v-else class="grid grid-cols-1 grid-rows-3 gap-2">
          <div>
            <p class="text-[0.65rem] font-medium">LINK SPEED</p>
            <p class="-mt-1 text-xl font-semibold">1000 Mbps</p>
          </div>
          <div>
            <p class="text-[0.65rem] font-medium">LAN IP</p>
            <p class="-mt-1 text-xl font-semibold">0.0.0.1</p>
          </div>
          <div>
            <p class="text-[0.65rem] font-medium">MAC ADDRESS</p>
            <p class="-mt-1 text-xl font-semibold">A1-B2-C3-D4-E5-F6</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 grid-rows-[25%,auto] gap-px">
      <div :class="{
        'bg-bc-blue': props.networkStatus.wireless,
        'bg-[#353a47]': !props.networkStatus.wireless,
      }" class="row-span-1 flex items-center justify-center bg-[#353a47]">
        <SvgIcon icon="icon-wifi" :width="+18" class="text-white mr-2" />
        <h3 class="text-sm font-semibold">Wi-Fi</h3>
      </div>
      <div :class="{
        'justify-start px-2': props.networkStatus.wireless,
        'justify-center': !props.networkStatus.wireless,
      }" class="flex items-center bg-[#4f6272]">
        <p v-if="!props.networkStatus.wireless">Not Connected</p>
        <div v-else class="grid grid-cols-1 grid-rows-2 gap-2">
          <div>
            <p class="text-[0.65rem] font-medium">I HAVE</p>
            <p class="-mt-1 text-xl font-semibold">no idea</p>
          </div>
          <div>
            <p class="text-[0.65rem] font-medium">WHAT</p>
            <p class="-mt-1 text-xl font-semibold">goes here?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>
