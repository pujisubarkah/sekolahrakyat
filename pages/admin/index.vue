<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard Admin ⚙️</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Manajemen user -->
      <div class="bg-white rounded-xl shadow p-4">
        <h2 class="font-semibold text-lg">👥 Manajemen User</h2>
        <ul class="list-disc pl-6">
          <li>Tambah / Edit Siswa</li>
          <li>Tambah / Edit Guru</li>
          <li>Tambah / Edit Orang Tua</li>
        </ul>
      </div>

      <!-- Manajemen kursus -->
      <div class="bg-white rounded-xl shadow p-4">
        <h2 class="font-semibold text-lg">📚 Manajemen Kursus</h2>
        <ul class="list-disc pl-6">
          <li>Tambah Materi Baru</li>
          <li>Kelola Quiz</li>
          <li>Lihat Statistik Belajar</li>
        </ul>
      </div>
    </div>
  </div>
</template>
