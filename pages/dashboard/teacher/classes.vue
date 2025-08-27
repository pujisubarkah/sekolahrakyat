<template>
  <div class="p-6">
    <!-- Judul Halaman -->
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Kelola Kelas</h1>

    <!-- Tombol tambah kelas -->
    <button
      class="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      @click="openAddClass"
    >
      + Tambah Kelas
    </button>

    <!-- Daftar kelas -->
    <div v-if="classes.length > 0" class="grid gap-4">
      <div
        v-for="kelas in classes"
        :key="kelas.id"
        class="p-4 bg-white shadow rounded-lg flex justify-between items-center"
      >
        <div>
          <h2 class="font-semibold text-lg text-gray-800">{{ kelas.name }}</h2>
          <p class="text-gray-600 text-sm">Mata Pelajaran: {{ kelas.subject }}</p>
          <p class="text-gray-500 text-sm">Jumlah Siswa: {{ kelas.studentsCount }}</p>
        </div>
        <div class="space-x-2">
          <button
            class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            @click="editClass(kelas.id)"
          >
            Edit
          </button>
          <button
            class="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            @click="deleteClass(kelas.id)"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>

    <!-- Kalau belum ada kelas -->
    <div v-else class="text-gray-600">
      Belum ada kelas. Silakan tambah kelas baru.
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
import { ref } from "vue"

// Simulasi data kelas
const classes = ref([
  { id: 1, name: "Kelas 7A", subject: "Matematika", studentsCount: 30 },
  { id: 2, name: "Kelas 8B", subject: "IPA", studentsCount: 25 },
])

// Fungsi aksi
const openAddClass = () => {
  alert("Form Tambah Kelas dibuka")
}

const editClass = (id: number) => {
  alert("Edit kelas ID: " + id)
}

const deleteClass = (id: number) => {
  classes.value = classes.value.filter((kelas) => kelas.id !== id)
}
</script>
