<template>
  <aside class="w-64 bg-gradient-to-b from-blue-700 via-blue-500 to-yellow-300 text-white h-screen p-4">
  <h2 class="text-xl font-bold mb-2 border-b-4 border-yellow-400 pb-2">Sekolah Rakyat</h2>

    <nav>
      <ul>
        <li v-for="item in menu" :key="item.label" class="mb-3">
          <NuxtLink
            :to="item.to"
            class="block px-3 py-2 rounded-lg hover:bg-blue-700"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { userRole } = useAuth()

// Menu berdasarkan role
const menuByRole: Record<string, { label: string; to: string }[]> = {
  student: [
    { label: 'Dashboard', to: '/dashboard/student' },
    { label: 'Kelas Saya', to: '/courses' },
    { label: 'Kuis', to: '/quiz' },
    { label: 'Leaderboard', to: '/leaderboard' },
  ],
  teacher: [
    { label: 'Dashboard Guru', to: '/dashboard/teacher' },
    { label: 'Kelola Kelas', to: '/teacher/courses' },
    { label: 'Buat Kuis', to: '/teacher/quiz' },
    { label: 'Laporan Siswa', to: '/teacher/reports' },
  ],
  parent: [
    { label: 'Dashboard Orang Tua', to: '/dashboard/parent' },
    { label: 'Progres Anak', to: '/parent/progress' },
    { label: 'Pesan Guru', to: '/parent/messages' },
  ],
  admin: [
    { label: 'Dashboard Admin', to: '/admin' },
    { label: 'Manajemen Pengguna', to: '/admin/users' },
    { label: 'Manajemen Kelas', to: '/admin/courses' },
    { label: 'Laporan Sistem', to: '/admin/reports' },
  ],
}

const menu = computed(() => {
  if (userRole.value && menuByRole[userRole.value]) {
    return menuByRole[userRole.value]
  }
  return [{ label: 'Home', to: '/' }]
})
</script>
