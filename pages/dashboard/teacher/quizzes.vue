<!-- pages/dashboard/teacher/quizzes.vue -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📘 Kelola Kuis</h1>

    <!-- Tombol tambah kuis -->
    <div class="mb-4">
      <button
        @click="openForm"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ➕ Buat Kuis Baru
      </button>
    </div>

    <!-- Daftar kuis -->
    <div class="bg-white shadow rounded-lg p-4">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2 border">Judul Kuis</th>
            <th class="p-2 border">Kelas</th>
            <th class="p-2 border">Jumlah Soal</th>
            <th class="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="quiz in quizzes" :key="quiz.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ quiz.title }}</td>
            <td class="p-2 border">{{ quiz.className }}</td>
            <td class="p-2 border">{{ quiz.questions.length }}</td>
            <td class="p-2 border text-center space-x-2">
              <button
                @click="editQuiz(quiz)"
                class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                ✏️ Edit
              </button>
              <button
                @click="deleteQuiz(quiz.id)"
                class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                🗑️ Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal form tambah/edit kuis -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded shadow w-96">
        <h2 class="text-lg font-bold mb-4">
          {{ editingQuiz ? "Edit Kuis" : "Tambah Kuis" }}
        </h2>
        <input
          v-model="form.title"
          placeholder="Judul Kuis"
          class="w-full mb-3 p-2 border rounded"
        />
        <input
          v-model="form.className"
          placeholder="Kelas"
          class="w-full mb-3 p-2 border rounded"
        />
        <textarea
          v-model="form.description"
          placeholder="Deskripsi Kuis"
          class="w-full mb-3 p-2 border rounded"
        ></textarea>
        <div class="flex justify-end space-x-2">
          <button
            @click="saveQuiz"
            class="px-3 py-1 bg-green-600 text-white rounded"
          >
            Simpan
          </button>
          <button
            @click="closeForm"
            class="px-3 py-1 bg-gray-400 text-white rounded"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
import { ref } from "vue";

const quizzes = ref([
  {
    id: 1,
    title: "Kuis Matematika Dasar",
    className: "Kelas 7A",
    questions: ["Soal 1", "Soal 2", "Soal 3"],
  },
  {
    id: 2,
    title: "Kuis IPA - Ekosistem",
    className: "Kelas 8B",
    questions: ["Soal 1", "Soal 2"],
  },
]);

const showForm = ref(false);
const editingQuiz = ref(null);
const form = ref({ title: "", className: "", description: "" });

function openForm() {
  editingQuiz.value = null;
  form.value = { title: "", className: "", description: "" };
  showForm.value = true;
}
function closeForm() {
  showForm.value = false;
}
function saveQuiz() {
  if (editingQuiz.value) {
    Object.assign(editingQuiz.value, form.value);
  } else {
    quizzes.value.push({
      id: Date.now(),
      ...form.value,
      questions: [],
    });
  }
  closeForm();
}
function editQuiz(quiz) {
  editingQuiz.value = quiz;
  form.value = { ...quiz };
  showForm.value = true;
}
function deleteQuiz(id) {
  quizzes.value = quizzes.value.filter((q) => q.id !== id);
}
</script>
