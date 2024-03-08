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
      <p class="text-xl font-semibold">AUDIO</p>
    </div>
  </div>
  <div class="grid h-5/6 grid-cols-4 grid-rows-1 gap-2 p-4">
    <div class="grid grid-cols-1 grid-rows-4 gap-1">
      <div class="row-span-1 flex bg-[#353a47] items-center justify-center">
        <h3 class="font-medium">Analog</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="bg-[#353a47] w-1/3 h-5/6 flex justify-center items-end gap-1 p-1">
          <div class="bg-[#64dca9] h-1/2 w-full"></div>
          <div class="bg-[#64dca9] h-1/3 w-full"></div>
        </div>
        <ul class="text-[0.60rem] absolute left-[20%] text-[#6b8996]">
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
      <div class="row-span-1 flex bg-[#353a47] items-center justify-center">
        <h3 class="font-medium">HDMI</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="bg-[#353a47] w-1/3 h-5/6 flex justify-center items-end gap-1 p-1">
          <div class="bg-[#64dca9] h-1/2 w-full"></div>
          <div class="bg-[#64dca9] h-1/3 w-full"></div>
        </div>
        <ul class="text-[0.60rem] absolute left-[43.5%] text-[#6b8996]">
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
      <div class="row-span-1 flex bg-[#353a47] items-center justify-center">
        <h3 class="font-medium">SDI</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="bg-[#353a47] w-1/3 h-5/6 flex justify-center items-end gap-1 p-1">
          <div class="bg-[#64dca9] h-1/2 w-full"></div>
          <div class="bg-[#64dca9] h-1/3 w-full"></div>
        </div>
        <ul class="text-[0.60rem] absolute right-[30%] text-[#6b8996]">
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
      <div class="row-span-1 flex bg-[#353a47] items-center justify-center">
        <h3 class="font-medium">Broadcast</h3>
      </div>
      <div class="row-span-3 flex items-center justify-center bg-[#4f6272]">
        <div class="bg-[#353a47] w-1/3 h-5/6 flex justify-center items-end gap-1 p-1">
          <div class="bg-[#64dca9] h-1/2 w-full"></div>
          <div class="bg-[#64dca9] h-1/3 w-full"></div>
        </div>
        <ul class="text-[0.60rem] absolute right-[6%] text-[#6b8996]">
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
</div>
</template>

<style></style>
