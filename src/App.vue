<script setup>
import TheNavbar from './components/TheNavbar.vue'
import SimPro from './components/pro/SimPro.vue'
import SimSpark from "./components/spark/SimSpark.vue"

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
</style>./components/pro_sim/SimPro.vue