<script setup lang="ts">
import useUserStore from '@/stores/modules/user'

defineOptions({
  name: 'Role',
})

const store = useUserStore()

// defineSlots<{
//   user: () => any
//   company: () => any
//   admin: () => any
// }>
</script>

<template>
  <slot v-if="store.role === 'user'" name="user" />
  <slot v-if="store.role === 'enterprise'" name="enterprise" />
  <slot v-if="store.role === 'admin'" name="admin" />
</template>
