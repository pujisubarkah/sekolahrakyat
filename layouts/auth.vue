<template>
  <div class="h-screen bg-gray-100 flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <div class="flex flex-1">
      <!-- Sidebar hanya muncul di layout auth -->
      <Sidebar :role="userRole" class="w-64 bg-blue-900 text-white" />

      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

// role ambil dari auth store / pinia / useAuth
const userRole = 'student'
</script>
