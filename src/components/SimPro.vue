<script setup>
import { ref, computed, watch } from "vue";

import SvgIcon from "./SvgIcon.vue";

import ProVideoPanel from "./ProVideoPanel.vue";
import ProNetworkPanel from "./ProNetworkPanel.vue";
import ProAudioPanel from "./ProAudioPanel.vue";
import ProBroadcastPreview from "./ProBroadcastPreview.vue";

const videoMenuOpen = ref(false);
const networkMenuOpen = ref(false);
const audioMenuOpen = ref(false);
const broadcastMenuOpen = ref(false);

const selectedVideoInput = ref('disconnected')
const selectedNetworkInput = ref('disconnected')
const selectedAudioInput = ref('disconnected')

const CablesConnected = ref({
  hdmi: false,
  sdi: false,
  audio: false,
  ethernet: false,
});

const VideoStatus = computed(() => {
  if (CablesConnected.value.hdmi) return { name: "HDMI", status: "1080p60" };
  else if (CablesConnected.value.sdi)
    return { name: "SDI", status: "1080p59.94" };
  else return { name: undefined, status: "Connect SDI or HDMI" };
});

const NetworkStatus = computed(() => {
  if (CablesConnected.value.ethernet)
    return { name: "Ethernet", status: "Connected" };
  else return { name: undefined, status: "Connect Ethernet or Wi-Fi" };
});

watch(selectedVideoInput, (newValue) => {
  let videoCableMap = {
    'disconnected': { hdmi: false, sdi: false },
    'hdmi': { hdmi: true, sdi: false },
    'sdi': { hdmi: false, sdi: true },
  };

  const videoCables = videoCableMap[newValue];
  CablesConnected.value = { ...CablesConnected.value, ...videoCables };
});

watch(selectedAudioInput, (newValue) => {
  let audioCableMap = {
    'disconnected': { audio: false },
    'jack': { audio: true },
    'xlr': { audio: true },
  };

  const audioCables = audioCableMap[newValue];
  CablesConnected.value = { ...CablesConnected.value, ...audioCables };
});

watch(selectedNetworkInput, (newValue) => {
  let networkCableMap = {
    'disconnected': { ethernet: false },
    'wired': { ethernet: true },
    'wireless': { ethernet: true },
  };

  const networkCables = networkCableMap[newValue];
  CablesConnected.value = { ...CablesConnected.value, ...networkCables };
});

</script>

<template>
<div class="grid grid-cols-1 grid-rows-[auto,auto]">
  <div class="flex items-center justify-around p-4">
    <select v-model="selectedVideoInput" name="VideoInput" id="VideoInput" class="io-selector">
      <option value="disconnected">Disconnected</option>
      <option value="hdmi">HDMI</option>
      <option value="sdi">SDI</option>
    </select>
    <select v-model="selectedAudioInput" name="AudioInput" id="AudioInput" class="io-selector">
      <option value="disconnected">Disconnected</option>
      <option value="jack">1/4"</option>
      <option value="xlr">XLR</option>
    </select>
    <select v-model="selectedNetworkInput" name="NetworkInput" id="NetworkInput" class="io-selector">
      <option value="disconnected">Disconnected</option>
      <option value="wired">Ethernet</option>
      <option value="wireless">Wi-Fi</option>
    </select>
  </div>
  <div class="relative bg-bc-blue/50">
    <img src="/src/assets/img/bc_pro_base.png" class="w-[720px]" />
    <div class="absolute bottom-[106px] left-[142px] right-[124px] top-[133px] overflow-hidden rounded-md bg-bc-black">
      <div class="grid h-full grid-cols-10 grid-rows-2 gap-1">
        <button @click="videoMenuOpen = !videoMenuOpen"
          class="col-span-4 grid grid-cols-1 grid-rows-[auto,75%] bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
          <div class="flex items-center justify-start pl-1">
            <SvgIcon icon="icon-video" class="mr-1 mt-[-0.14rem]" />
            <p>VIDEO</p>
          </div>
          <div v-if="VideoStatus.name != undefined" class="-mt-2 flex flex-col items-center justify-center">
            <p class="text-lg font-medium">{{ VideoStatus.name }}</p>
            <p>{{ VideoStatus.status }}</p>
          </div>
          <div v-else class="-mt-2 flex flex-col items-center justify-center p-10">
            <p>{{ VideoStatus.status }}</p>
          </div>
        </button>
        <button @click="networkMenuOpen = !networkMenuOpen"
          class="col-span-4 grid grid-cols-1 grid-rows-[auto,75%] bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
          <div class="flex items-center justify-start pl-1">
            <SvgIcon icon="icon-network" :width="16" class="mr-2 mt-[-0.14rem]" />
            <p>NETWORK</p>
          </div>
          <div v-if="NetworkStatus.name != undefined" class="-mt-2 flex flex-col items-center justify-center">
            <p class="text-lg font-medium">{{ NetworkStatus.name }}</p>
            <p>{{ NetworkStatus.status }}</p>
          </div>
          <div v-else class="-mt-2 flex flex-col items-center justify-center p-4">
            <p>{{ NetworkStatus.status }}</p>
          </div>

        </button>
        <button @click="audioMenuOpen = !audioMenuOpen"
          class="col-span-2 grid grid-cols-1 grid-rows-[auto,75%] bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
          <div class="flex items-center justify-center">
            <SvgIcon icon="icon-audio" :width="16" class="mr-1 mt-[-0.14rem]" />
            <p>Audio</p>
          </div>
          <div class="w-full h-5/6 flex justify-center items-end gap-1 px-[1.65rem]">
            <div class="bg-[#64dca9] h-1/2 w-full"></div>
            <div class="bg-[#64dca9] h-1/3 w-full"></div>
          </div>
        </button>
        <button @click="broadcastMenuOpen = !broadcastMenuOpen"
          class="col-span-6 flex items-start justify-start bg-[#353a47] p-1 hover:bg-[#2b2f3b]">
          <SvgIcon icon="icon-broadcast" :width="16" class="mr-1 mt-1" />
          Broadcast
        </button>
      </div>
      <ProVideoPanel :class="{ 'top-0': videoMenuOpen, 'top-full': !videoMenuOpen }"
        @close-clicked="videoMenuOpen = false" class="absolute left-0 transition-[top]" />
      <ProNetworkPanel :class="{ 'top-0': networkMenuOpen, 'top-full': !networkMenuOpen }"
        @close-clicked="networkMenuOpen = false" class="absolute left-0 transition-[top]" />
      <ProAudioPanel :class="{ 'top-0': audioMenuOpen, 'top-full': !audioMenuOpen }"
        @close-clicked="audioMenuOpen = false" class="absolute left-0 transition-[top]" />
      <ProBroadcastPreview :class="{ 'top-0': broadcastMenuOpen, 'top-full': !broadcastMenuOpen }"
        @close-clicked="broadcastMenuOpen = false" class="absolute left-0 transition-[top]" />
    </div>
  </div>
</div>
</template>

<style scoped>
.io-selector {
  @apply px-4 py-2 text-white font-medium rounded-full bg-bc-blue;
}
</style>
