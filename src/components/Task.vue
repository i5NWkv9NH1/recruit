<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="task my-8 flex flex-col gap-16 rounded-2xl border-dashed bg-[var(--van-background-2)] pa-16" @click="router.push('/task/1')">
    <div class="task__prepend flex items-center justify-between gap-4">
      <h3 class="prepnd__title ma-0 text-7xl">
        移动端小程序前端开发
      </h3>
      <div class="prepend__tag rounded-2xl pa-4 text-5xl bg-[var(--van-warning-color)]!">
        紧急
      </div>
    </div>
    <div class="task__content">
      <dl class="ma-0 flex items-center gap-20">
        <dt>
          <h5 class="ma-0 mb-8 text-5xl text-gray-300">
            任务预算
          </h5>
          <strong class="text-6xl text-[var(--van-primary-color)]">¥ 10000</strong>
        </dt>
        <dt>
          <h5 class="ma-0 mb-8 text-5xl text-gray-300">
            任务周期
          </h5>
          <strong class="text-6xl text-[var(--van-primary-color)]">90天</strong>
        </dt>
        <dt>
          <h5 class="ma-0 mb-8 text-5xl text-gray-300">
            服务方式
          </h5>
          <strong class="text-6xl text-[var(--van-primary-color)]">驻场</strong>
        </dt>
      </dl>
      <p class="line-clamp-2 text-5xl font-light line-height-relaxed">
        任务要求：混合开发小程序，与后端对接接口，有 2 年以上 web 前端开发经验，能够独立开展 Web 前端
        任务要求：混合开发小程序，与后端对接接口，有 2 年以上 web 前端开发经验，能够独立开展 Web 前端
        任务要求：混合开发小程序，与后端对接接口，有 2 年以上 web 前端开发经验，能够独立开展 Web 前端
        任务要求：混合开发小程序，与后端对接接口，有 2 年以上 web 前端开发经验，能够独立开展 Web 前端
      </p>
    </div>
    <div class="task__append flex items-center justify-between text-5xl text-gray-300 font-light">
      <div>北京xxx科技有限公司</div>
      <VanIcon name="location-o">
        北京
      </VanIcon>
    </div>
  </div>
</template>
