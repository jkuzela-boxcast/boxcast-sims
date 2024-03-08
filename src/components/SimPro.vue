<script setup>
import { ref } from "vue";

import SvgIcon from "./SvgIcon.vue";

import ProVideoPanel from "./ProVideoPanel.vue";
import ProNetworkPanel from "./ProNetworkPanel.vue";
import ProAudioPanel from "./ProAudioPanel.vue";

const videoMenuOpen = ref(false);
const networkMenuOpen = ref(false);
const audioMenuOpen = ref(false);
const broadcastMenuOpen = ref(false);
</script>

<template>
<div class="relative bg-bc-blue/50">
  <img src="/src/assets/img/bc_pro_base.png" class="w-[720px]" />
  <div class="absolute bottom-[106px] left-[142px] right-[124px] top-[133px] overflow-hidden rounded-md bg-bc-black">
    <div class="grid h-full grid-cols-10 grid-rows-2 gap-1">
      <button @click="videoMenuOpen = !videoMenuOpen"
        class="col-span-4 flex items-start justify-start bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
        <SvgIcon icon="icon-video" />
        Video
        <p class="absolute left-[9.5%] top-[20%] w-24 text-center">
          Connect SDI or HDMI
        </p>
      </button>
      <button @click="networkMenuOpen = !networkMenuOpen"
        class="col-span-4 flex items-start justify-start bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
        <SvgIcon icon="icon-network" :width="16" class="mt-1" />
        Network
        <p class="absolute left-[46%] top-[20%] w-32 text-center">
          Connect Ethernet or Wi-Fi
        </p>
      </button>
      <button @click="audioMenuOpen = !audioMenuOpen"
        class="col-span-2 flex items-start justify-start bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
        <SvgIcon icon="icon-audio" :width="16" class="mt-1" />
        Audio
      </button>
      <button class="col-span-10 flex items-start justify-start bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
        <SvgIcon icon="icon-broadcast" :width="16" class="mt-1" />
        Broadcast
      </button>
    </div>
    <ProVideoPanel :class="{ 'top-0': videoMenuOpen, 'top-full': !videoMenuOpen }"
      @close-clicked="videoMenuOpen = false" class="absolute left-0 transition-[top]" />
    <ProNetworkPanel :class="{ 'top-0': networkMenuOpen, 'top-full': !networkMenuOpen }"
      @close-clicked="networkMenuOpen = false" class="absolute left-0 transition-[top]" />
    <ProAudioPanel :class="{ 'top-0': audioMenuOpen, 'top-full': !audioMenuOpen }"
      @close-clicked="audioMenuOpen = false" class="absolute left-0 transition-[top]" />
  </div>
</div>
</template>

<style></style>
