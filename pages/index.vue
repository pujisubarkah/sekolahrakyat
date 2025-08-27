<template>
  <div class="max-w-3xl mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold text-blue-700 mb-6">Selamat Datang di LMS Sekolah Rakyat</h1>
    <p class="text-lg text-gray-700 mb-8">
      Platform pembelajaran modern dengan fitur gamifikasi, dashboard multi-role, dan materi berkualitas untuk mendukung proses belajar siswa, guru, dan orang tua.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2 text-blue-600">Login & Registrasi</span>
        <p class="text-gray-600 mb-4">Akses ke dashboard sesuai peran Anda: siswa, guru, orang tua, atau admin.</p>
        <NuxtLink to="/auth/login" class="btn btn-primary">Mulai Belajar</NuxtLink>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2 text-blue-600">Tentang Sekolah Rakyat</span>
        <p class="text-gray-600 mb-4">Pelajari visi, misi, dan program unggulan Sekolah Rakyat.</p>
        <NuxtLink to="/sekolah" class="btn btn-primary">Lihat Sekolah</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
