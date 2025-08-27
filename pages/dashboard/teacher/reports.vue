<!-- pages/dashboard/teacher/reports.vue -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">📊 Reports</h1>

    <!-- Filter -->
    <div class="flex gap-4 mb-6">
      <select v-model="selectedClass" class="p-2 border rounded">
        <option value="">-- Pilih Kelas --</option>
        <option v-for="cls in classes" :key="cls.id" :value="cls.id">
          {{ cls.name }}
        </option>
      </select>

      <select v-model="selectedQuiz" class="p-2 border rounded">
        <option value="">-- Pilih Quiz --</option>
        <option v-for="quiz in quizzes" :key="quiz.id" :value="quiz.id">
          {{ quiz.title }}
        </option>
      </select>

      <button 
        @click="fetchReports"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Tampilkan
      </button>
    </div>

    <!-- Tabel Laporan -->
    <div v-if="reports.length > 0" class="overflow-x-auto">
      <table class="min-w-full bg-white border rounded shadow">
        <thead class="bg-gray-200 text-left">
          <tr>
            <th class="p-2 border">Nama Siswa</th>
            <th class="p-2 border">Nilai</th>
            <th class="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rep in reports" :key="rep.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ rep.student }}</td>
            <td class="p-2 border">{{ rep.score }}</td>
            <td class="p-2 border">
              <span 
                :class="rep.score >= 70 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'"
              >
                {{ rep.score >= 70 ? 'Lulus' : 'Perlu Remedial' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="text-gray-600">Belum ada laporan untuk filter yang dipilih.</p>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
import { ref } from 'vue'

const classes = ref([
  { id: 1, name: 'Kelas 7A' },
  { id: 2, name: 'Kelas 7B' },
])

const quizzes = ref([
  { id: 1, title: 'Quiz Matematika' },
  { id: 2, title: 'Quiz IPA' },
])

const selectedClass = ref('')
const selectedQuiz = ref('')
const reports = ref([])

function fetchReports() {
  // nanti ambil dari API, sekarang dummy
  reports.value = [
    { id: 1, student: 'Budi', score: 85 },
    { id: 2, student: 'Siti', score: 60 },
  ]
}
</script>
