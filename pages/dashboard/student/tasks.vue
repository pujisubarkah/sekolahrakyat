<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📝 Tugas</h1>

    <ul class="space-y-3">
      <li v-for="task in assignments" :key="task.id" class="p-4 bg-white shadow rounded-lg flex justify-between">
        <div>
          <h2 class="font-semibold">{{ task.title }}</h2>
          <p class="text-sm text-gray-500">Deadline: {{ task.deadline }}</p>
        </div>
        <NuxtLink
          :to="`/assignments/${task.id}`"
          class="text-blue-600 hover:underline"
        >
          Kerjakan →
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
const assignments = ref([
  { id: 1, title: 'Tugas Matematika Bab 1', deadline: '2025-09-05' },
  { id: 2, title: 'Esai Bahasa Indonesia', deadline: '2025-09-07' },
  { id: 3, title: 'Laporan IPA Eksperimen', deadline: '2025-09-10' },
])
</script>
