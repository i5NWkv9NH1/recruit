<script setup lang="ts">
import { showSuccessToast } from 'vant'

definePage({
  // ! Do not to modify name
  // ! Reference useRoute<ROUTE_NAME>
  name: 'TaskId',
  meta: {
    title: '任务详情',
    level: 2,
    keepAlive: true,
  },
})

const route = useRoute<'TaskId'>()
const router = useRouter()
const id = computed(() => route.params.id)
if (!id.value) {
  router.replace('/:all(.*)')
}
const loading = ref(false)
const state = reactive({
  isCollected: false,
})
watch(() => state.isCollected, (value) => {
  if (value) {
    showSuccessToast('Success')
  }
})
</script>

<template>
  <div class="task position-relative flex flex-col gap-16 bg-[var(--van-background-2)] pa-16 pb-0">
    <template v-if="loading">
      <template v-for="i in Array.from({ length: 6 })" :key="i">
        <VanSkeleton row="4" class="my-16" />
      </template>
    </template>

    <template v-else>
      <div class="task__headline">
        <h1 class="title text-9xl">
          移动端小程序程序开发
        </h1>
        <div class="job-type text-gray-300">
          前端工程师
        </div>
      </div>

      <div class="task__info">
        <dl class="flex gap-32">
          <dt class="flex flex-col gap-8">
            <div class="text-6xl text-gray-300">
              任务预算
            </div>
            <strong class="text-[var(--van-primary-color)]">¥1000元</strong>
          </dt>
          <dt class="flex flex-col gap-8">
            <div class="text-6xl text-gray-300">
              任务周期
            </div>
            <strong class="text-[var(--van-primary-color)]">90天</strong>
          </dt>
          <dt class="flex flex-col gap-8">
            <div class="text-6xl text-gray-300">
              服务方式
            </div>
            <strong class="text-[var(--van-primary-color)]">驻场</strong>
          </dt>
        </dl>
      </div>

      <div class="task__requirement">
        <h2 class="requirement__title text-8xl">
          任务信息
        </h2>
        <p class="text-6xl text-gray-300 leading-relaxed">
          混合开发小程序，与后端对接接口，有2年以上Web前端开发经验，能够独立开展Web前端开发工作混合开发小程序，与后端对接接口，有2年以上Web前端经验，能够混合开发小程序，与后端对接接口，有2年以上Web前端开发经验，能够独立开展Web前端开发工作混合开发小程序，与后端对接接口，有2年以上Web前端经验，能够
        </p>
      </div>

      <div class="task__safe">
        <h2 class="safe__title text-8xl">
          工作保障
        </h2>
        <div class="safe__banner w-full border-4 border-dashed">
          <img class="w-full" src="https://s2.loli.net/2024/09/07/nORstHIZmSrbB79.png" alt="task safe" lazy>
        </div>
      </div>

      <div class="task__sourcing">
        <h2 class="souring__title text-8xl">
          任务来源
        </h2>
        <TaskSouring />
      </div>

      <div class="task__extend">
        <h2 class="extend_title text-8xl">
          推荐任务
        </h2>
        <TaskMini />
        <TaskMini />
        <TaskMini />
        <TaskMini />
        <TaskMini />
        <TaskMini />
        <TaskMini />
      </div>

      <!-- pos-fixed will not work `w-full` -->
      <div class="task__actions pos-sticky pos-bottom-0 z-2 h-60 w-full bg-[var(--van-background-2)]">
        <div class="h-full w-fit w-full flex items-center gap-16">
          <div
            class="w-40 flex flex-col items-center gap-4 text-center" @click.stop="() => state.isCollected = !state.isCollected"
          >
            <div
              class="block h-24 w-32 text-[var(--van-primary-color)]" :class="[
                state.isCollected ? 'i-carbon-star-filled' : 'i-carbon-star',
              ]"
            />
            <span class="text-5xl">
              {{ state.isCollected ? '已收藏' : '收藏' }}
            </span>
          </div>
          <VanButton class="flex-1 border-none! bg-[var(--van-primary-color)]!">
            立即沟通
          </VanButton>
        </div>
      </div>
    </template>
  </div>
</template>
