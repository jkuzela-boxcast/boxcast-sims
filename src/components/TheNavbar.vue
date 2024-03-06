<script setup>
import { store } from "@/store";
</script>

<template>
<div>
  <nav
    class="flex flex-col flex-wrap items-center justify-center gap-2 py-2 sm:flex-row sm:justify-between sm:px-4 bg-bc-lagoon">
    <h1 class="font-head font-semibold">BoxCaster Simulators</h1>
    <div class="flex justify-center gap-2">
      <button @click="store.changeSim('pro')"
        :class="{ 'bg-bc-blue': store.getSim() === 'spark', 'bg-bc-shallot': store.getSim() === 'pro', }"
        class="rounded-full px-4 py-2 text-bc-white transition-transform hover:-translate-y-0.5 hover:bg-bc-shallot active:bg-bc-blue">
        BoxCaster Pro
      </button>
      <button @click="store.changeSim('spark')"
        :class="{ 'bg-bc-blue': store.getSim() === 'pro', 'bg-bc-shallot': store.getSim() === 'spark', }"
        class="rounded-full bg-bc-blue px-4 py-2 text-bc-white transition-transform hover:-translate-y-0.5 hover:bg-bc-shallot active:bg-bc-blue">
        BoxCaster Spark
      </button>
    </div>
  </nav>
</div>
</template>

<style scoped></style>
