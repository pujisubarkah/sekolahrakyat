<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold text-blue-700 mb-6">Sekolah Rakyat</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2">Profil Sekolah</span>
        <p class="text-gray-600 mb-4">Informasi umum tentang Sekolah Rakyat, visi, misi, dan sejarah.</p>
        <NuxtLink to="/about" class="btn btn-primary">Tentang Kami</NuxtLink>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2">Kegiatan Sekolah</span>
        <p class="text-gray-600 mb-4">Jadwal dan dokumentasi kegiatan sekolah, ekstrakurikuler, dan event khusus.</p>
        <NuxtLink to="/kegiatan" class="btn btn-primary">Lihat Kegiatan</NuxtLink>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2">Materi & Kelas</span>
        <p class="text-gray-600 mb-4">Daftar materi pembelajaran dan kelas yang tersedia di Sekolah Rakyat.</p>
        <NuxtLink to="/materi" class="btn btn-primary">Lihat Materi</NuxtLink>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span class="text-2xl font-semibold mb-2">Kontak & Lokasi</span>
        <p class="text-gray-600 mb-4">Informasi kontak, alamat, dan peta lokasi Sekolah Rakyat.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Hubungi Kami</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// ...existing code...
</script>
