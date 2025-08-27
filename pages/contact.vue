<template>
  <div class="max-w-2xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold text-blue-700 mb-6">Kontak Sekolah Rakyat</h1>
    <p class="text-lg text-gray-700 mb-8">
      Untuk pertanyaan, saran, atau kerjasama, silakan hubungi kami melalui form di bawah atau kontak langsung yang tersedia.
    </p>
    <div class="bg-white rounded-xl shadow p-6 mb-6">
      <form class="space-y-4">
        <div>
          <label class="block text-gray-600 mb-1">Nama</label>
          <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Nama Anda" />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Email</label>
          <input type="email" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Email Anda" />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Pesan</label>
          <textarea class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" rows="4" placeholder="Tulis pesan Anda..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Kirim Pesan</button>
      </form>
    </div>
    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold text-blue-600 mb-2">Kontak Langsung</h2>
      <ul class="text-gray-600">
        <li>Email: <a href="mailto:info@sekolahrakyat.id" class="text-blue-700 underline">info@sekolahrakyat.id</a></li>
        <li>Telepon: <a href="tel:+6281234567890" class="text-blue-700 underline">+62 812-3456-7890</a></li>
        <li>Alamat: Jl. Pendidikan No. 123, Jakarta, Indonesia</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// ...existing code...
</script>
