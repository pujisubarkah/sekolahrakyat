<template>
  <div class="h-screen bg-gray-100 flex flex-col">
    <!-- Navbar umum -->
    <Navbar />

    <main class="flex-1 overflow-y-auto p-6">
      <slot />
    </main>
  <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>
