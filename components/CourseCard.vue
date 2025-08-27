<template>
  <div class="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-3xl">{{ icon }}</span>
      <h3 class="font-bold text-lg">{{ title }}</h3>
    </div>
    <p class="text-sm text-gray-500 mb-3">{{ description }}</p>
    <progress :value="progress" max="100" class="w-full"></progress>
    <p class="text-xs text-gray-400 mt-1">Progress: {{ progress }}%</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  progress: Number,
  icon: String
})
</script>

