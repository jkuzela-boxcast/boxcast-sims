<script setup>
import TheNavbar from './components/TheNavbar.vue'
import SimPro from './components/SimPro.vue'
import SimSpark from "./components/SimSpark.vue"

import { store } from './store'
</script>

<template>
<TheNavbar />
<div class="flex items-center justify-center min-h-[32rem] py-12">
  <SimPro v-if="store.getSim() === 'pro'" />
  <SimSpark v-if="store.getSim() === 'spark'" />
</div>
</template>

<style>
body {
  @apply bg-bc-black text-bc-white;
}
</style>