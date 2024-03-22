<script setup>
import { ref } from "vue";

import SvgIcon from "./SvgIcon.vue";
import ProMixerControl from "./ProMixerControl.vue";

const monitorOpen = ref(false);

const mixers = ref({
  analog: false,
  hdmi: false,
  sdi: false
})

const props = defineProps({
  audioStatus: {
    type: Object,
    required: false,
  },
  broadcasting: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
<div class="h-full w-full bg-[#2c333d]">
  <div class="flex items-center justify-between px-1">
    <div class="col-span-1 flex items-center justify-start pl-2">
      <SvgIcon @click="$emit('close-clicked')" icon="icon-chevron-down" :width="36"
        class="cursor-pointer text-bc-white hover:text-bc-blue" />
    </div>
    <div class="col-span-2 flex items-center justify-center">
      <p class="text-xl font-semibold">AUDIO</p>
    </div>
    <div class="col-span-1 flex items-center justify-start pl-2">
      <SvgIcon @click="monitorOpen = !monitorOpen" icon="icon-headphones" :width="28"
        class="cursor-pointer text-bc-white hover:text-bc-blue" />
    </div>
  </div>

  <div class="grid h-5/6 grid-cols-4 grid-rows-1 gap-2 p-4">
    <div @click="mixers.analog = !mixers.analog" class="cursor-pointer grid grid-cols-1 grid-rows-4 gap-1">
      <div
        :class="{ 'bg-bc-blue hover:bg-bc-lagoon': props.audioStatus.audio, 'bg-col-head hover:bg-[#242831]': !props.audioStatus.audio, }"
        class="row-span-1 flex items-center justify-center">
        <h3 class="font-medium">Analog</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="flex h-5/6 w-1/3 items-end justify-center gap-1 bg-col-head p-1">
          <div :class="{ 'h-[65%]': props.audioStatus.audio, 'h-1': !props.audioStatus.audio, }"
            class="w-full bg-[#64dca9]"></div>
          <div :class="{ 'h-[65%]': props.audioStatus.audio, 'h-1': !props.audioStatus.audio, }"
            class="w-full bg-[#64dca9]"></div>
        </div>
        <ul class="absolute left-[20%] text-[0.60rem] text-[#6b8996]">
          <li>0</li>
          <li>-5</li>
          <li>-10</li>
          <li>-15</li>
          <li>-20</li>
          <li>-25</li>
          <li>-30</li>
          <li>-35</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 grid-rows-4 gap-1">
      <div :class="{ 'bg-bc-blue': props.audioStatus.hdmi, 'bg-col-head': !props.audioStatus.hdmi, }"
        class="row-span-1 flex items-center justify-center">
        <h3 class="font-medium">HDMI</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="flex h-5/6 w-1/3 items-end justify-center gap-1 bg-col-head p-1">
          <div :class="{ 'h-[55%]': props.audioStatus.hdmi, 'h-1': !props.audioStatus.hdmi, }"
            class="w-full bg-[#64dca9]">
          </div>
          <div :class="{ 'h-[65%]': props.audioStatus.hdmi, 'h-1': !props.audioStatus.hdmi, }"
            class="w-full bg-[#64dca9]">
          </div>
        </div>
        <ul class="absolute left-[43.5%] text-[0.60rem] text-[#6b8996]">
          <li>0</li>
          <li>-5</li>
          <li>-10</li>
          <li>-15</li>
          <li>-20</li>
          <li>-25</li>
          <li>-30</li>
          <li>-35</li>
        </ul>
      </div>
    </div>

    <div @click="mixers.sdi = !mixers.sdi" class="cursor-pointer grid grid-cols-1 grid-rows-4 gap-1">
      <div
        :class="{ 'bg-bc-blue hover:bg-bc-lagoon': props.audioStatus.sdi, 'bg-col-head hover:bg-[#242831]': !props.audioStatus.sdi, }"
        class="row-span-1 flex items-center justify-center">
        <h3 class="font-medium">SDI</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="flex h-5/6 w-1/3 items-end justify-center gap-1 bg-col-head p-1">
          <div :class="{ 'h-[20%]': props.audioStatus.sdi, 'h-1': !props.audioStatus.sdi, }"
            class="w-full bg-[#64dca9]">
          </div>
          <div :class="{ 'h-[35%]': props.audioStatus.sdi, 'h-1': !props.audioStatus.sdi, }"
            class="w-full bg-[#64dca9]">
          </div>
        </div>
        <ul class="absolute right-[30%] text-[0.60rem] text-[#6b8996]">
          <li>0</li>
          <li>-5</li>
          <li>-10</li>
          <li>-15</li>
          <li>-20</li>
          <li>-25</li>
          <li>-30</li>
          <li>-35</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 grid-rows-4 gap-1">
      <div :class="{ 'bg-bc-blue': props.broadcasting, 'bg-col-head': !props.broadcasting, }"
        class="row-span-1 flex items-center justify-center">
        <h3 class="font-medium">Broadcast</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="flex h-5/6 w-1/3 items-end justify-center gap-1 bg-col-head p-1">
          <div class="h-[50%] w-full bg-[#64dca9]"></div>
          <div class="h-[55%] w-full bg-[#64dca9]"></div>
        </div>
        <ul class="absolute right-[6%] text-[0.60rem] text-[#6b8996]">
          <li>0</li>
          <li>-5</li>
          <li>-10</li>
          <li>-15</li>
          <li>-20</li>
          <li>-25</li>
          <li>-30</li>
          <li>-35</li>
        </ul>
      </div>
    </div>
  </div>

  <div @click="monitorOpen = false" :class="{ 'top-0 opacity-100': monitorOpen, 'top-full opacity-0': !monitorOpen, }"
    class="absolute left-0 h-full w-full bg-black/50 transition-opacity"></div>

  <div v-show="monitorOpen" class="absolute left-0 top-1/3 grid place-items-center">
    <div class="grid w-5/6 grid-cols-1 grid-rows-[auto,4rem] gap-px">
      <div class="flex items-center justify-center bg-col-head py-1">
        <SvgIcon icon="icon-headphones" :width="28" class="text-bc-white" />
      </div>
      <div class="grid grid-cols-3 grid-rows-1 bg-[#4f6272]">
        <div class="flex items-center justify-center py-1">
          <SvgIcon icon="icon-volume-down" :width="28" class="text-bc-white" />
        </div>
        <div class="flex items-center justify-center">
          <input type="range" min="0" max="100" />
        </div>
        <div class="flex items-center justify-center py-1">
          <SvgIcon icon="icon-volume-up" :width="28" class="text-bc-white" />
        </div>
      </div>
    </div>
  </div>

  <ProMixerControl @clickOut="mixers.analog = false" v-show="mixers.analog" mixer-title="ANALOG" />
  <ProMixerControl @clickOut="mixers.sdi = false" v-show="mixers.sdi" mixer-title="SDI" />
</div>
</template>

<style></style>
