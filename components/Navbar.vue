<template>
  <nav class="bg-[#002F6C] text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2">
          <img src="https://sekolahrakyat.kemensos.go.id/assets/img/logo-tag.PNG" alt="Logo Kemensos" style="max-height: 60px; background: white; border-radius: 8px; padding: 4px; border: 1px solid #e5e7eb;" />
          <span class="text-xl font-bold">Sekolah Rakyat</span>
        </div>

        <!-- Menu -->
        <div class="hidden md:flex space-x-6">
          <!-- Menu Publik -->
          <NuxtLink
            v-for="item in publicMenu"
            :key="item.label"
            :to="item.to"
            class="hover:text-yellow-300 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Menu Role-based -->
          <template v-if="isLoggedIn">
            <NuxtLink
              v-for="item in roleMenu"
              :key="item.label"
              :to="item.to"
              class="hover:text-yellow-300 transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </div>

        <!-- Auth Button -->
        <div class="flex items-center space-x-4">
          <button
            v-if="!isLoggedIn"
            @click="goLogin"
            class="bg-white text-blue-700 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100 border border-blue-700"
          >
            Masuk / Daftar
          </button>
          <button
            v-else
            @click="logout"
            class="bg-white text-blue-700 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100 border border-blue-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { role, isLoggedIn, logout } = useAuth()

// Menu publik (selalu tampil)
const publicMenu = [
  { label: 'Beranda', to: '/' },
  { label: 'Sekolah Rakyat', to: '/sekolah' },
  { label: 'Materi', to: '/materi' },
  { label: 'Kegiatan', to: '/kegiatan' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'Hubungi Kami', to: '/contact' }
]

// Menu role-based
const roleMenus = {
  student: [
    { label: 'Dashboard', to: '/dashboard/student' },
    { label: 'Materi Saya', to: '/materi/saya' },
    { label: 'Quiz / Ujian', to: '/quiz' },
    { label: 'Progress Belajar', to: '/progress' },
    { label: 'Leaderboard', to: '/leaderboard' },
    { label: 'Profil', to: '/profile' }
  ],
  teacher: [
    { label: 'Dashboard', to: '/dashboard/teacher' },
    { label: 'Kelola Kelas', to: '/kelas' },
    { label: 'Upload Materi', to: '/materi/upload' },
    { label: 'Bank Soal', to: '/quiz/manage' },
    { label: 'Penilaian', to: '/penilaian' },
    { label: 'Profil', to: '/profile' }
  ],
  parent: [
    { label: 'Dashboard', to: '/dashboard/parent' },
    { label: 'Progress Anak', to: '/progress-anak' },
    { label: 'Jadwal Sekolah', to: '/jadwal' },
    { label: 'Komunikasi Guru', to: '/komunikasi' },
    { label: 'Profil', to: '/profile' }
  ],
  admin: [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Manajemen User', to: '/admin/users' },
    { label: 'Manajemen Sekolah', to: '/admin/sekolah' },
    { label: 'Materi & Quiz', to: '/admin/materi' },
    { label: 'Monitoring Aktivitas', to: '/admin/monitoring' },
    { label: 'Setting Sistem', to: '/admin/settings' }
  ]
}

// reactive menu tergantung role
const roleMenu = computed(() => role.value ? roleMenus[role.value] : [])

const goLogin = () => {
  router.push('/auth/login')
}
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>
