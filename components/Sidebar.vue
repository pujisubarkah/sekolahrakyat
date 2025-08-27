<template>
  <aside class="w-64 bg-gray-800 text-white min-h-screen p-4">
    <h2 class="text-xl font-bold mb-6">📚 Sekolah Rakyat</h2>
    <nav>
      <ul>
        <li
          v-for="item in menu"
          :key="item.to"
          class="mb-3"
        >
          <NuxtLink
            :to="item.to"
            class="block py-2 px-3 rounded hover:bg-gray-700"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '~/composables/useAuth'

const { userRole } = useAuth()
const route = useRoute()

// daftar menu berdasarkan role
const menuByRole: Record<string, { label: string; to: string }[]> = {
  student: [
    { label: 'Dashboard Siswa', to: '/dashboard/student' },
    { label: 'Kursus Saya', to: '/dashboard/student/courses' },
    { label: 'Tugas', to: '/dashboard/student/tasks' },
    { label: 'Diskusi', to: '/dashboard/student/discussion' },
    { label: 'Nilai', to: '/dashboard/student/grades' },
    { label: 'Leaderboard', to: '/dashboard/student/leaderboard' },
    { label: 'Sumber Belajar', to: '/dashboard/student/resources' },
  ],
  teacher: [
    { label: 'Dashboard Guru', to: '/dashboard/teacher' },
    { label: 'Kelola Kelas', to: '/dashboard/teacher/classes' },
    { label: 'Buat Kuis', to: '/dashboard/teacher/quizzes' },
    { label: 'Laporan Siswa', to: '/dashboard/teacher/reports' },
    { label: 'Sumber Belajar', to: '/dashboard/teacher/resources' },

  ],
  parent: [
    { label: 'Dashboard Orang Tua', to: '/dashboard/parent' },
    { label: 'Laporan Anak', to: '/dashboard/parent/reports' },
    { label: 'Pesan Guru', to: '/dashboard/parent/messages' },
  ],
  admin: [
    { label: 'Dashboard Admin', to: '/admin' },
    { label: 'Kelola Pengguna', to: '/admin/users' },
    { label: 'Manajemen Kursus', to: '/admin/courses' },
    { label: 'Laporan Sistem', to: '/admin/reports' },
  ],
}

// computed menu otomatis
const menu = computed(() => {
  // 1. pakai role dari useAuth kalau ada
  if (userRole.value && menuByRole[userRole.value]) {
    return menuByRole[userRole.value]
  }

  // 2. fallback berdasarkan url
  if (route.path.startsWith('/dashboard/teacher')) {
    return menuByRole.teacher
  }
  if (route.path.startsWith('/dashboard/student')) {
    return menuByRole.student
  }
  if (route.path.startsWith('/dashboard/parent')) {
    return menuByRole.parent
  }
  if (route.path.startsWith('/admin')) {
    return menuByRole.admin
  }

  // 3. default menu
  return [{ label: 'Home', to: '/' }]
})
</script>
