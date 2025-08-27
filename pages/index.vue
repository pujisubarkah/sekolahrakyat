<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
    <h1 class="text-4xl font-bold text-blue-700 mb-4">Selamat Datang di LMS App</h1>
    <p class="text-lg text-blue-600 mb-8">Platform pembelajaran modern dengan fitur gamifikasi dan dashboard multi-role.</p>
    <NuxtLink to="/auth/login" class="btn btn-primary">Mulai Belajar</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>
