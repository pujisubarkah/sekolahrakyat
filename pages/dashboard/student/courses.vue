<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📘 Kelas Saya</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="course in courses" :key="course.id" class="bg-white rounded-lg shadow p-4">
        <h2 class="text-lg font-semibold">{{ course.title }}</h2>
        <p class="text-sm text-gray-600">{{ course.description }}</p>
        <NuxtLink
          :to="`/courses/${course.id}`"
          class="mt-3 inline-block text-blue-600 hover:underline"
        >
          Masuk Kelas →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
const courses = ref([
  { id: 1, title: 'Matematika', description: 'Belajar aljabar, geometri, dan logika.' },
  { id: 2, title: 'Bahasa Indonesia', description: 'Meningkatkan keterampilan membaca & menulis.' },
  { id: 3, title: 'IPA', description: 'Eksperimen dan teori sains dasar.' },
])
</script>
