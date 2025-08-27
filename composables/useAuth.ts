import { ref, computed, onMounted } from 'vue'

type UserRole = 'student' | 'teacher' | 'parent' | 'admin' | null

const userRole = ref<UserRole>(null)
const userName = ref<string | null>(null)

export function useAuth() {
  // ✅ Ambil role dari localStorage (simulasi login)
  const loadUser = () => {
    const savedRole = localStorage.getItem('role')
    const savedName = localStorage.getItem('name')

    if (savedRole) userRole.value = savedRole as UserRole
    if (savedName) userName.value = savedName
  }

  onMounted(() => {
    loadUser()
  })

  const isLoggedIn = computed(() => !!userRole.value)

  const setUser = (role: UserRole, name: string) => {
    userRole.value = role
    userName.value = name
    localStorage.setItem('role', role || '')
    localStorage.setItem('name', name || '')
  }

  const logout = () => {
    userRole.value = null
    userName.value = null
    localStorage.removeItem('role')
    localStorage.removeItem('name')
  }

  return {
    userRole,
    userName,
    isLoggedIn,
    setUser,
    logout,
  }
}

