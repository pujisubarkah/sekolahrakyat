<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Halo, Guru 👨‍🏫</h1>

    <!-- Kelas diajar -->
    <h2 class="text-lg font-semibold mb-2">📖 Kelas yang Anda Ajar</h2>
    <ul class="list-disc pl-6">
      <li>Matematika Kelas 7</li>
      <li>IPA Kelas 8</li>
    </ul>

    <!-- Buat Quiz -->
    <h2 class="text-lg font-semibold mt-6 mb-2">📝 Buat Quiz</h2>
    <QuizForm />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })
import QuizForm from '~/components/QuizForm.vue'
</script>
