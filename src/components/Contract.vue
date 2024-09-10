<script setup lang="ts">
interface Props {
  status?: number
}
const props = withDefaults(defineProps<Props>(), {
  status: 1,
})
const router = useRouter()
const status = computed(() => {
  switch (props.status) {
    case 1: return { label: '待发送', color: 'warning' }
    case 2: return { label: '待确认', color: 'warning' }
    case 3: return { label: '履约中', color: 'primary' }
    case 4: return { label: '已完成', color: 'success' }
    case 5: return { label: '已失效', color: 'gray' }
    default: return { label: '履约中', color: 'primary' }
  }
})
const state = reactive({
  progress: [
    { status: 'success' },
    { status: 'success' },
    { status: 'warning' },
    { status: 'pending' },
  ],
})
</script>

<template>
  <div class="contract flex flex-col gap-16 rounded-2xl pa-16" @click="router.push('/contract/1')">
    <div class="contract__prepend flex items-center justify-between gap-4">
      <h3 class="prepnd__title ma-0 text-7xl">
        移动端小程序前端开发
      </h3>
      <div
        class="prepend__tag rounded-2xl pa-4 text-6xl"
        :class="[
          `text-[var(--van-${status.color}-color)]!`,
        ]"
      >
        {{ status.label }}
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
          <template v-if="props.status === 2">
            <div class="h-8 w-1/4 rounded-2xl bg-green-400" />
            <div class="h-8 w-1/4 rounded-2xl bg-green-400" />
            <div class="h-8 w-1/4 rounded-2xl bg-orange-400" />
            <div class="h-8 w-1/4 rounded-2xl bg-red-400" />
          </template>
          <template v-else>
            <div
              v-for="(item, index) in state.progress" :key="index" class="h-8 w-1/4 rounded-2xl bg-gray-400" :class="[
                { 'bg-[var(--van-${item.status}-color)]': item.status === 'expired' },
              ]"
            />
            <div class="h-8 w-1/4 rounded-2xl bg-gray-400" />
            <div class="h-8 w-1/4 rounded-2xl bg-gray-400" />
            <div class="h-8 w-1/4 rounded-2xl bg-gray-400" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
