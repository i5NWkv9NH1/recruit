<script setup lang="ts">
import { showToast } from 'vant'
import useUserStore, { type Role } from '@/stores/modules/user'

definePage({
  name: 'MySwitchRole',
  meta: {
    title: '切换身份',
    level: 2,
  },
})

const roles = ref<{ id: number, name: string, value: Role }[]>([
  { id: 1, name: 'IT企业人才', value: 'user' },
  { id: 2, name: '企业端', value: 'enterprise' },
  { id: 3, name: '管理员', value: 'admin' },
])
const store = useUserStore()
const router = useRouter()

function onSwitchRole(value: Role) {
  if (store.role === value)
    return
  store.switchRole(value)
  showToast('切换成功')
  router.replace('/my')
}
</script>

<template>
  <div class="pa-16">
    <div class="flex flex-col gap-16">
      <template v-for="r in roles" :key="r.id">
        <div class="pos-relative">
          <VanCell size="large" :title="r.name" :clickable="store.role !== r.value" class="items-center gap-8 rounded-bl-3xl rounded-tr-3xl border-none!" :border="false" @click="onSwitchRole(r.value)">
            <template #icon>
              <div class="i-carbon-star-filled h-40 w-40" />
            </template>
            <template #value>
              <div class="append">
                <div class="append__value" />
                <div v-if="r.value === store.role" class="pos-absolute right-0 top-0 h-15 w-80 flex items-center justify-center rounded-bl-3xl bg-[var(--van-primary-color)]">
                  <div class="text-5xl text-[var(--van-text-color)] font-light">
                    当前身份
                  </div>
                </div>
                <div class="pos-absolute right-[-10px] top-[8px] h-full w-80 flex items-center justify-center opacity-50">
                  <div class="i-carbon-star h-40 w-40" />
                </div>
              </div>
            </template>
          </VanCell>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-cell__value) {
  flex: unset;
  position: static;
}
</style>
