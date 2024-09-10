<script setup lang="ts">
import { isEmpty } from 'lodash-es'

defineOptions({
  name: 'TalentFilter',
})
definePage({
  name: 'TalentFilter',
  meta: {
    title: '筛选',
    level: 2,
  },
})
const router = useRouter()
type FilterType = 'time' | 'service' | string
interface Filter {
  [key: FilterType]: any
}
const filter = ref<Filter>([
  {
    text: '任务周期',
    value: 'time',
    disabled: false,
    children: [
      { text: '7天', id: 1, disabled: false },
      { text: '15天', id: 2, disabled: false },
      { text: '30天', id: 3, disabled: false },
      { text: '1个月', id: 4, disabled: false },
      { text: '3个月', id: 5, disabled: false },
      { text: '半年', id: 6, disabled: false },
      { text: '一年', id: 7, disabled: true },
    ],
  },
  {
    text: '服务方式',
    value: 'service',
    disabled: false,
    children: [
      { text: '驻场', id: 4, disabled: false },
      { text: '远程', id: 5, disabled: false },
      { text: '全职', id: 6, disabled: false },
    ],
  },
  { text: '其他方式', value: '_1', disabled: true, children: [] },
  { text: '薪资', value: '_2', disabled: true, children: [] },
  { text: '分包', value: '_3', disabled: true, children: [] },
])
const state = reactive({
  time: 1,
  serviceWay: 4,
})
function onSelect(type: FilterType, id: string | number) {
  state[type] = id
}
//* API
function fetchPositions() {}
const { refreshing, onRefresh } = useRefresh(fetchPositions)
</script>

<template>
  <div class="min-h-[calc(100vh-52px)] bg-[var(--van-background-2)]">
    <VanPullRefresh v-model="refreshing" class="h-full" @refresh="onRefresh">
      <div class="flex flex-col gap-16 pa-16">
        <div v-for="f in filter" :key="f.text" class="flex flex-col gap-4 py-16 filter">
          <div class="filter__title">
            <h2 class="mt-0 text-8xl">
              {{ f.text }}
            </h2>
          </div>
          <div class="filter__children">
            <template v-if="isEmpty(f.children) || f.disabled">
              <VanEmpty description="No Data" />
            </template>
            <template v-else>
              <div class="grid grid-cols-3 gap-16">
                <div v-for="c in f.children" :key="c.id">
                  <VanButton
                    :class="[
                      { 'border-[var(--van-primary-color)]!': c.id === state[f.value] },
                    ]"
                    @click="onSelect(f.value, c.id)"
                  >
                    {{ c.text }}
                  </VanButton>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </VanPullRefresh>

    <VanSticky position="bottom">
      <div class="z-10 h-fit w-full pa-16 bg-[var(--van-background-2)]!">
        <div class="w-full flex justify-between gap-8">
          <div class="clear">
            <VanButton>清除</VanButton>
          </div>
          <div class="submit flex-1">
            <VanButton type="primary" block @click="router.push('/task')">
              确定
            </VanButton>
          </div>
        </div>
      </div>
    </VanSticky>
  </div>
</template>
