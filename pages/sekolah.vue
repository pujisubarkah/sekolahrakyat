<template>
  <div class="relative">
    <div class="w-full max-w-4xl mx-auto py-6 px-4 text-center">
      <h2 class="font-bold mb-2 text-blue-700 text-2xl md:text-3xl lg:text-4xl">Apa itu Sekolah Rakyat?</h2>
      <p class="mb-3 text-gray-700 text-base md:text-lg lg:text-xl">
        <span class="hidden md:inline">Sekolah Rakyat didirikan sebagai upaya pemerintah dalam memutus rantai kemiskinan melalui pendidikan. Program ini ditujukan untuk anak-anak yang berasal dari keluarga yang termasuk dalam miskin dan miskin ekstrim berdasarkan DTSEN.</span>
        <span class="md:hidden">Sekolah Rakyat adalah program pemerintah untuk memutus rantai kemiskinan lewat pendidikan, ditujukan bagi anak-anak dari keluarga miskin dan miskin ekstrem berdasarkan data DTSEN.</span>
      </p>
      <a class="btn btn-warning rounded-pill px-3 py-2 px-md-4 py-md-2 d-block mx-auto" href="https://sekolahrakyat.kemensos.go.id/sekolah-rakyat">Simak Lebih Lanjut</a>
    </div>
    <div class="max-w-4xl mx-auto py-10 px-4 relative z-0">
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
  </div>
</template>

<script setup>
// ...existing code...
</script>
