import { defineStore } from 'pinia'

export type Role = 'user' | 'enterprise' | 'admin'

const useUserStore = defineStore('user', () => {
  const state = reactive({
    role: 'enterprise' as Role,
  })
  const role = computed<Role>(() => state.role)

  function switchRole(value: Role) {
    state.role = value
  }

  return {
    role,
    switchRole,
  }
}, {
  persist: true,
})

export default useUserStore
