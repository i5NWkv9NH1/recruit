<script setup lang="ts">
import { type ButtonType, showToast } from 'vant/es'

definePage({
  name: 'ContractIdProgressStage',
  meta: {
    title: '更新合约进度',
    level: 4,
  },
})

const { refreshing, onRefresh } = useRefresh()
const router = useRouter()
const route = useRoute<'ContractIdProgressStage'>()
const tags = ref<{ label: string, color: ButtonType, value: ButtonType | 'default' }[]>([
  { label: '通过', color: 'success', value: 'success' },
  { label: '有风险', color: 'warning', value: 'warning' },
  { label: '问题严重', color: 'danger', value: 'danger' },
])
const state = reactive({
  status: '',
  desc: '',
})
//* words limit >= 500 color
const isMorethan500 = computed(() => {
  if (state.desc.length >= 500)
    return 'red'
  return 'var(--van-text-color)'
})

const stage = route.params.stage
if (!stage)
  router.back()

async function onSubmit() {
  showToast('Success')
}
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16 h-[calc(100vh-52px)]!">
    <VanPullRefresh v-model="refreshing" class="h-full" @refresh="onRefresh">
      <div class="h-full flex flex-col gap-16">
        <div class="headline text-8xl font-bold">
          第三阶段
        </div>
        <div class="progress flex items-center gap-8">
          <VanButton v-for="t in tags" :key="t.value" :type="t.value" class="flex-1" :plain="state.status !== t.value" @click="state.status = t.value">
            {{ t.label }}
          </VanButton>
        </div>
        <div class="desc">
          <VanField
            v-model="state.desc"
            type="textarea"
            class="h-200 border-dashed"
            :maxlength="500"
            placeholder="请输入问题描述"
            show-word-limit
            autofocus
            autocomplete="off"
          />
        </div>

        <VanButton block type="primary" class="mt-auto!" @click="onSubmit">
          提交评估
        </VanButton>
      </div>
    </VanPullRefresh>
  </div>
</template>

<style lang="scss" scoped>
// :deep(.van-field__body) {
//   height: 100% !important;

//   .van-field__control {
//     height: 100% !important;
//   }
// }
:deep(.van-cell__value) {
  display: flex;
  flex-direction: column;

  .van-field__body {
    flex: 1;

    .van-field__control {
      height: 100%;
    }
  }

  .van-field__word-num {
    color: v-bind('isMorethan500');
  }
}
</style>
