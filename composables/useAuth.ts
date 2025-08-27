import { useState } from '#app'

export const useAuth = () => {
  const userRole = useState<string | null>('userRole', () => null)
  const isLoggedIn = computed(() => !!userRole.value)

  function login(role: string) {
    userRole.value = role
  }

  function logout() {
    userRole.value = null
  }

  return {
    userRole,
    isLoggedIn,
    login,
    logout,
  }
}


