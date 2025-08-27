<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🏆 Leaderboard</h1>

    <table class="w-full border border-gray-300 bg-white shadow rounded-lg">
      <thead>
        <tr class="bg-blue-600 text-white">
          <th class="px-4 py-2">Posisi</th>
          <th class="px-4 py-2">Nama</th>
          <th class="px-4 py-2">Poin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in leaderboard" :key="student.id" class="text-center border-t">
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ student.name }}</td>
          <td class="px-4 py-2">{{ student.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const leaderboard = ref([
  { id: 1, name: 'Andi', points: 120 },
  { id: 2, name: 'Budi', points: 95 },
  { id: 3, name: 'Citra', points: 80 },
])
definePageMeta({ layout: 'auth' })
</script>
