<script setup lang="ts">
// interface Props {
//   id: string
// }
// const props = defineProps<Props>()
</script>

<template>
  <div class="contract flex flex-col gap-16 rounded-2xl pa-16 shadow-xl">
    <div class="contract__prepend flex items-center justify-between gap-4">
      <h3 class="prepnd__title ma-0 text-7xl">
        移动端小程序前端开发
      </h3>
      <div class="prepend__tag rounded-2xl pa-4 text-5xl text-orange-400">
        履约中
        <VanIcon name="arrow" />
      </div>
    </div>
    <div class="contract__content flex flex-col gap-16 text-5xl text-gray-300">
      <div class="item__company flex items-center justify-between">
        <div>公司名称</div>
        <div>北京XXX科技有限公司</div>
      </div>
      <div class="item__type flex items-center justify-between">
        <div>合约类型</div>
        <div>技术服务</div>
      </div>
      <div class="item__time flex items-center justify-between">
        <div>合约周期</div>
        <div />
      </div>
      <div class="item__date flex items-center justify-between">
        <div>合约时间</div>
        <div />
      </div>
      <div class="item__progress flex flex-col gap-16">
        <div>合约进度</div>
        <div class="flex items-center justify-between gap-4">
          <div class="h-8 w-1/4 rounded-2xl bg-green-400" />
          <div class="h-8 w-1/4 rounded-2xl bg-green-400" />
          <div class="h-8 w-1/4 rounded-2xl bg-orange-400" />
          <div class="h-8 w-1/4 rounded-2xl bg-red-400" />
        </div>
      </div>
    </div>
  </div>
</template>
