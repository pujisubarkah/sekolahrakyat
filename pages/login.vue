<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <!-- Logo / Judul -->
      <h1 class="text-2xl font-bold text-center text-blue-700 mb-6">
        Sekolah Rakyat
      </h1>

      <!-- Form Login -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-gray-700 text-sm mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan email"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Role Sementara (demo) -->
        <div>
          <label class="block text-gray-700 text-sm mb-2">Masuk sebagai</label>
          <select
            v-model="role"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="student">Siswa</option>
            <option value="teacher">Guru</option>
            <option value="parent">Orang Tua</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <!-- Tombol Login -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <!-- Info tambahan -->
      <p class="text-center text-sm text-gray-500 mt-4">
        Belum punya akun? <a href="#" class="text-blue-600 hover:underline">Hubungi Admin</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

type UserRole = 'student' | 'teacher' | 'parent' | 'admin'

const email = ref('')
const password = ref('')
const role = ref('student') // sementara kita pilih manual

const { setUser } = useAuth()

const handleLogin = async () => {
  // bisa ditambah validasi ke API
  setUser(role.value as UserRole, email.value)
  navigateTo('/dashboard')
}
</script>
