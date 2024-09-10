<script setup lang="ts">
definePage({
  name: 'ContractIdProgress',
  meta: {
    title: '合约进度',
    level: 3,
  },
})
const router = useRouter()
const state = reactive({
  progress: [
    { title: '第一阶段开发进度评估', desc: '进度正常是到位风无法i恶恶诶我发jwigejwigjwoi就哦家起哦多为契机飞起哦我减肥哦iewjfioqejfqioejf去哦i家佛企鹅减肥我奇迹为i哦多就哦wow i家哦期待 ', status: 'success' },
    { title: '第二阶段开发进度评估', desc: '存在 BUG', status: 'warning' },
    { title: '第三阶段开发进度评估', desc: '', status: 'pending' },
    { title: '第四阶段开发进度评估', desc: '', status: 'pending' },
  ],
})
const { refreshing, onRefresh } = useRefresh()
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16 h-[calc(100vh-52px)]!">
    <VanPullRefresh v-model="refreshing" class="h-full" @refresh="onRefresh">
      <div class="flex flex-col gap-16">
        <div class="headline text-8xl font-bold">
          前端驻场6个月
        </div>
        <div class="progress">
          progress
        </div>

        <div class="flex flex-col gap-16">
          <div
            v-for="p in state.progress" :key="p.title" class="item flex flex-col gap-8 border-dashed pa-8" :class="[
              { 'justify-evenly': p.desc },
              { 'h-100': p.desc },
            ]"
          >
            <div class="headline w-full flex items-center justify-between">
              <div class="headline__title text-7xl font-bold">
                {{ p.title }}
              </div>
              <div v-if="p.status === 'pending'" class="headline__status" @click="router.push('/contract/:id/progress/1')">
                <span class="text-5xl text-[var(--van-warning-color)]">去评估</span>
              </div>
            </div>
            <div v-if="p.status !== 'pending'">
              <div class="text-5xl line-height-relaxed">
                {{ p.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </VanPullRefresh>
  </div>
</template>
