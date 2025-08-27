<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Halo, Orang Tua 👨‍👩‍👧</h1>

    <h2 class="text-lg font-semibold mb-2">📊 Progress Anak</h2>
    <div class="bg-white rounded-xl shadow p-4">
      <p><strong>Nama:</strong> Budi</p>
      <p><strong>Kelas:</strong> 7 SMP</p>
      <p><strong>Rata-rata Nilai:</strong> 85</p>
    </div>

    <!-- Leaderboard -->
    <h2 class="text-lg font-semibold mt-6 mb-2">🏆 Leaderboard</h2>
    <Leaderboard />
  </div>
</template>

<script setup>
import Leaderboard from '~/components/Leaderboard.vue'
</script>

