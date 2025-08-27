<!-- pages/dashboard/student/resources.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">📚 Resources</h1>

    <!-- Daftar Resource -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(resource, index) in resources"
        :key="index"
        class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
      >
        <!-- Thumbnail -->
        <div class="mb-3">
          <img
            v-if="resource.type === 'video'"
            src="https://img.icons8.com/fluency/48/video.png"
            alt="Video"
            class="w-12 h-12"
          />
          <img
            v-else-if="resource.type === 'document'"
            src="https://img.icons8.com/fluency/48/document.png"
            alt="Document"
            class="w-12 h-12"
          />
          <img
            v-else
            src="https://img.icons8.com/fluency/48/opened-folder.png"
            alt="Other"
            class="w-12 h-12"
          />
        </div>

        <!-- Judul -->
        <h2 class="text-lg font-semibold mb-2">{{ resource.title }}</h2>
        <p class="text-gray-600 text-sm mb-4">{{ resource.description }}</p>

        <!-- Tombol Aksi -->
        <div class="flex justify-between">
          <a
            v-if="resource.type === 'video'"
            :href="resource.link"
            target="_blank"
            class="text-blue-600 font-medium hover:underline"
          >
            ▶ Tonton
          </a>
          <a
            v-else
            :href="resource.link"
            target="_blank"
            class="text-green-600 font-medium hover:underline"
          >
            📂 Buka
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
const resources = [
  {
    title: "Materi Pengenalan Ekonomi",
    description: "Dasar-dasar konsep ekonomi untuk siswa.",
    type: "document",
    link: "https://example.com/materi-ekonomi.pdf",
  },
  {
    title: "Video: Sistem Tata Surya",
    description: "Video pembelajaran tentang planet dan tata surya.",
    type: "video",
    link: "https://www.youtube.com/watch?v=abcdef",
  },
  {
    title: "Paparan PowerPoint - Revolusi Industri",
    description: "Slide presentasi tentang Revolusi Industri.",
    type: "document",
    link: "https://example.com/revolusi-industri.pptx",
  },
]
</script>
