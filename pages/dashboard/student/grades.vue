<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📊 Nilai Saya</h1>
    <p class="mb-6 text-gray-700">Berikut adalah rekap nilai tugas, quiz, dan ujian yang telah kamu kerjakan.</p>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg shadow">
        <thead class="bg-blue-100">
          <tr>
            <th class="py-2 px-4 text-left">Mata Pelajaran</th>
            <th class="py-2 px-4 text-left">Jenis</th>
            <th class="py-2 px-4 text-left">Nilai</th>
            <th class="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="grade in grades" :key="grade.id" class="border-b">
            <td class="py-2 px-4">{{ grade.subject }}</td>
            <td class="py-2 px-4">{{ grade.type }}</td>
            <td class="py-2 px-4 font-semibold">{{ grade.score }}</td>
            <td class="py-2 px-4">
              <span :class="grade.score >= 75 ? 'text-green-600' : 'text-red-600'">
                {{ grade.score >= 75 ? 'Lulus' : 'Remedial' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
const grades = ref([
  { id: 1, subject: 'Matematika', type: 'Tugas', score: 80 },
  { id: 2, subject: 'Bahasa Indonesia', type: 'Quiz', score: 72 },
  { id: 3, subject: 'IPA', type: 'Ujian', score: 88 },
  { id: 4, subject: 'IPS', type: 'Tugas', score: 65 },
])
</script>
