<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">📚 Materi Pembelajaran</h1>

    <!-- Upload form -->
    <form @submit.prevent="addResource" class="mb-6 space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label class="block text-sm font-medium mb-1">Judul Materi</label>
        <input v-model="newResource.title" type="text" class="w-full border rounded p-2" required />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Tipe</label>
        <select v-model="newResource.type" class="w-full border rounded p-2" required>
          <option value="document">📄 Dokumen</option>
          <option value="video">🎥 Video</option>
          <option value="link">🔗 Link</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">URL / File</label>
        <input v-model="newResource.url" type="text" placeholder="https://..." class="w-full border rounded p-2" required />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Simpan Materi
      </button>
    </form>

    <!-- Daftar materi -->
    <div class="grid md:grid-cols-2 gap-4">
      <div v-for="res in resources" :key="res.id" class="bg-white p-4 rounded shadow">
        <h2 class="font-bold text-lg">{{ res.title }}</h2>
        <p class="text-sm text-gray-600">Tipe: {{ res.type }}</p>
        <a :href="res.url" target="_blank" class="text-blue-600 hover:underline mt-2 inline-block">
          Buka Materi
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
import { ref } from 'vue'

const resources = ref([
  { id: 1, title: 'Materi 1 - Pendahuluan', type: 'document', url: 'https://example.com/materi1.pdf' },
  { id: 2, title: 'Video Pembelajaran 1', type: 'video', url: 'https://youtube.com/...' }
])

const newResource = ref({
  title: '',
  type: 'document',
  url: ''
})

function addResource() {
  resources.value.push({ ...newResource.value, id: Date.now() })
  newResource.value = { title: '', type: 'document', url: '' }
}
</script>
