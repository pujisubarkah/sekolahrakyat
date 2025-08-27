<template>
  <div class="flex items-center gap-3 p-4 bg-yellow-100 border border-yellow-400 rounded-xl shadow">
    <span class="text-3xl">{{ icon }}</span>
    <div>
      <h3 class="font-bold">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>
