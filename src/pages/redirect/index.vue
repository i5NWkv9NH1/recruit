<script setup lang="ts">
import useUserStore from '@/stores/modules/user'

definePage({
  name: 'Redirect',
  meta: {
    title: 'Redirect',
  },
})
const userStore = useUserStore()
const router = useRouter()
switch (userStore.role) {
  case 'user': router.replace('/task'); break
  case 'enterprise': router.replace('/talent'); break
  default: router.push('/my'); break
}
</script>

<template>
  <div />
</template>
