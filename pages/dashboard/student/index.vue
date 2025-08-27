<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Halo, Siswa 👩‍🎓</h1>

    <!-- CourseCard -->
    <h2 class="text-lg font-semibold mb-2">📚 Kursus Saya</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CourseCard title="Matematika Dasar" description="Belajar pecahan & bilangan bulat." />
      <CourseCard title="IPA" description="Ilmu Pengetahuan Alam untuk SMP." />
      <CourseCard title="Bahasa Indonesia" description="Membaca & Menulis kreatif." />
    </div>

    <!-- Badge -->
    <h2 class="text-lg font-semibold mt-6 mb-2">🏅 Lencana Saya</h2>
    <div class="flex gap-4">
      <GamificationBadge name="Rajin Belajar" />
      <GamificationBadge name="Juara Quiz" />
    </div>
  </div>
</template>

<script setup>
import CourseCard from '~/components/CourseCard.vue'
import GamificationBadge from '~/components/GamificationBadge.vue'
</script>
