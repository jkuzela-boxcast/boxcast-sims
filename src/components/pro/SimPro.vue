<script setup>
import ProUIButton from "./ProUIButton.vue";

const buttons = [
  {
    icon: "icon-camera",
    label: "Video",
    class: "col-span-4",
    iconWidth: "22",
    onClick: 'console.log("video button clicked")',
  },
  {
    icon: "icon-network",
    label: "Network",
    class: "col-span-4",
    iconWidth: "22",
    onClick: 'console.log("network button clicked")',
  },
  {
    icon: "icon-audio",
    label: "Audio",
    class: "col-span-2",
    iconWidth: "22",
    onClick: 'console.log("audio button clicked")',
  },
  {
    icon: "icon-broadcast",
    label: "Broadcast",
    class: "col-span-10",
    iconWidth: "22",
    onClick: 'console.log("broadcast button clicked")',
  },
];

function handleClick(label) {
  console.log(label + ' button clicked')
}
</script>

<template>
<div class="relative bg-bc-blue/50">
  <img src="/src/assets/img/bc_pro_base.png" class="w-[720px]" />
  <div
    class="absolute bottom-[106px] left-[142px] right-[124px] top-[133px] overflow-hidden rounded-md bg-bc-eggplant/50">
    <div class="grid h-full grid-cols-10 grid-rows-2 gap-1">
      <ProUIButton v-for="button in buttons" :label="button.label" :icon="button.icon" :icon-width="button.iconWidth"
        :class="button.class" @click="handleClick(button.label)" />
    </div>
  </div>
</div>
</template>

<style></style>
./ProUIButton.vue
