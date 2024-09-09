<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

definePage({
  name: 'MySettings',
  meta: {
    title: '我的设置',
    level: 2,
  },
})
const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)
const router = useRouter()
watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)
function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
}
function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="pa-16">
    <van-cell-group class="mb-16! after:content-none!">
      <van-cell title="隐私政策" is-link to="/my/account/privacy" icon="location-o" :border="false" />
      <van-cell title="服务协议" is-link to="/" icon="location-o" :border="false" />
      <VanCell center title="暗黑模式" icon="location-o">
        <template #right-icon>
          <VanSwitch v-model="checked" size="20px" aria-label="on/off Dark Mode" @click="toggle()" />
        </template>
      </VanCell>
    </van-cell-group>
    <VanButton block @click="logout">
      退出登录
    </VanButton>
  </div>
</template>
