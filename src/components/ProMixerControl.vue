<script setup>
import { ref, computed } from "vue";
import SvgIcon from "./SvgIcon.vue";

const phantomPower = ref(false);

const props = defineProps({
  mixerTitle: {
    required: false,
    type: String
  }
})

const phantomLabel = computed(() => {
  if (phantomPower.value === true) return 'ON'
  else return 'OFF'
})
</script>

<template>
<div>
  <div @click="$emit('clickOut')" class="cursor-pointer bg-black/50 absolute inset-0"></div>
  <div class="gap-1 absolute top-4 left-28 right-28 bottom-4 grid place-items-center grid-cols-1 grid-rows-[15%,auto]">
    <div class="flex items-center justify-center bg-col-head w-full h-full">
      <p class="text-xl font-black">{{ props.mixerTitle }}</p>
    </div>

    <div class="w-full h-full grid grid-cols-[40%,auto] grid-rows-1 gap-1">

      <div class="flex items-center justify-center py-1 h-full bg-col-body">
        <div class="bg-[#404858] h-full w-1/3 flex items-end justify-center gap-1 p-1">
          <div class="w-4 h-[50%] bg-audio-meter"></div>
          <div class="w-4 h-[44%] bg-audio-meter"></div>
        </div>
      </div>

      <div class="h-full overflow-hidden grid grid-cols-1 grid-rows-[40%,auto] gap-1">
        <div @click="phantomPower = !phantomPower"
          :class="{ 'bg-col-body hover:bg-col-bodyhov': !phantomPower, 'bg-[#f4d2a0] hover:bg-[#dfbe8d]': phantomPower }"
          class="cursor-pointer flex items-center justify-end pb-2 flex-col">
          <p class="text-lg font-black">{{ phantomLabel }}</p>
          <p class="text-[0.75rem]">PHANTOM POWER</p>
        </div>
        <div class="bg-col-body flex items-center justify-center">
          <img class="w-[95%]" src="/src/assets/img/mixer_knob.png" alt="">
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<style></style>
