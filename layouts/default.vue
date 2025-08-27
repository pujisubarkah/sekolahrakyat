<!-- layouts/default.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
  <Sidebar :role="userRole" class="w-64 bg-blue-900 text-white" />

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <Navbar />

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

// Contoh: ambil role user dari composable atau store
const userRole = 'student' // Ganti dengan logic sesuai kebutuhan
</script>

