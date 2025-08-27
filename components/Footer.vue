<template>
  <footer class="bg-[#002F6C] text-white mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Kiri: Logo + Nama -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="Logo" class="h-10 w-10 rounded-full bg-white p-1" />
          <span class="text-xl font-bold tracking-wide">Sekolah Rakyat</span>
        </div>
        <p class="text-gray-300 text-sm">
          Belajar bersama, tumbuh bersama.  
          Untuk SD, SMP, dan SMA.
        </p>
      </div>

      <!-- Tengah: Navigasi -->
      <div>
        <h3 class="font-semibold text-lg mb-3 text-yellow-400">Navigasi</h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/" class="hover:text-yellow-300">Beranda</NuxtLink></li>
          <li><NuxtLink to="/sekolah" class="hover:text-yellow-300">Sekolah Rakyat</NuxtLink></li>
          <li><NuxtLink to="/materi" class="hover:text-yellow-300">Materi</NuxtLink></li>
          <li><NuxtLink to="/kegiatan" class="hover:text-yellow-300">Kegiatan</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-yellow-300">Tentang</NuxtLink></li>
        </ul>
      </div>

      <!-- Kanan: Kontak -->
      <div>
        <h3 class="font-semibold text-lg mb-3 text-yellow-400">Kontak</h3>
        <ul class="text-sm space-y-2">
          <li>📧 info@sekolahrakyat.id</li>
          <li>📱 +62 812 3456 7890</li>
          <li>📍 Jakarta, Indonesia</li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-600 py-4 text-center text-sm text-gray-400">
      © {{ new Date().getFullYear() }} Sekolah Rakyat. Semua Hak Dilindungi.
    </div>
  </footer>
</template>
