
<script setup lang="ts">
definePageMeta({ layout: 'auth' })
const course = ref({ title: 'Matematika' })

const topics = ref([
  {
    id: 1,
    title: 'Bagaimana cara menyelesaikan persamaan kuadrat?',
    author: 'Budi',
    time: '2 jam lalu',
    content: 'Saya bingung dengan rumus abc. Ada tips?',
    replies: [
      { id: 1, author: 'Ibu Sari', content: 'Coba gunakan pemfaktoran dulu, kalau tidak bisa baru pakai rumus abc.' },
      { id: 2, author: 'Ani', content: 'Aku biasanya pakai kuadrat sempurna, lebih gampang 😊' }
    ],
    newReply: ''
  }
])

const newTopic = ref({ title: '', content: '' })

const addTopic = () => {
  if (!newTopic.value.title || !newTopic.value.content) return
  topics.value.push({
    id: Date.now(),
    title: newTopic.value.title,
    author: 'Siswa Baru',
    time: 'Baru saja',
    content: newTopic.value.content,
    replies: [],
    newReply: ''
  })
  newTopic.value = { title: '', content: '' }
}

const addReply = (topic: any) => {
  if (!topic.newReply) return
  topic.replies.push({
    id: Date.now(),
    author: 'Siswa Baru',
    content: topic.newReply
  })
  topic.newReply = ''
}
</script>

<template>
  <div class="p-6">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-4">💬 Diskusi Kelas {{ course.title }}</h1>

    <!-- Form buat topik baru -->
    <div class="bg-white p-4 rounded shadow mb-6">
      <h2 class="font-semibold mb-2">Buat Pertanyaan</h2>
      <input
        v-model="newTopic.title"
        type="text"
        placeholder="Judul pertanyaan..."
        class="w-full border rounded p-2 mb-2"
      />
      <textarea
        v-model="newTopic.content"
        placeholder="Tulis pertanyaan atau diskusi di sini..."
        class="w-full border rounded p-2 mb-2"
      />
      <button
        @click="addTopic"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Kirim
      </button>
    </div>

    <!-- List Diskusi -->
    <div v-for="topic in topics" :key="topic.id" class="bg-white p-4 rounded shadow mb-4">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">{{ topic.title }}</h3>
        <span class="text-xs text-gray-500">oleh {{ topic.author }} • {{ topic.time }}</span>
      </div>
      <p class="text-gray-700 mt-2">{{ topic.content }}</p>

      <!-- Balasan -->
      <div class="ml-6 mt-3 border-l pl-3 space-y-2">
        <div
          v-for="reply in topic.replies"
          :key="reply.id"
          class="bg-gray-50 p-2 rounded"
        >
          <p class="text-sm text-gray-800"><span class="font-semibold">{{ reply.author }}:</span> {{ reply.content }}</p>
        </div>
      </div>

      <!-- Form balasan -->
      <div class="ml-6 mt-2">
        <input
          v-model="topic.newReply"
          placeholder="Tulis balasan..."
          class="w-full border rounded p-2 mb-2"
        />
        <button
          @click="addReply(topic)"
          class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
        >
          Balas
        </button>
      </div>
    </div>
  </div>
</template>
