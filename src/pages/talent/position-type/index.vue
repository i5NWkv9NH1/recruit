<script setup lang="ts">
import { isEmpty } from 'lodash-es'

defineOptions({
  name: 'TalentPositionType',
})
definePage({
  name: 'TalentPositionType',
  meta: {
    title: '职位类型',
    level: 2,
  },
})
const activedId = ref(1)
const activedIndex = ref(0)
const items = ref([
  {
    text: '技术',
    disabled: false,
    children: [
      { text: '前端开发', id: 1, disabled: false },
      { text: '后端开发', id: 2, disabled: false },
      { text: 'iOS 开发', id: 3, disabled: false },
      { text: '测试', id: 4, disabled: false },
      { text: '杭州', id: 5, disabled: false },
      { text: '运维/技术支持', id: 6, disabled: false },
      { text: '长文本显示长文本显示长文本显示', id: 7, disabled: true },
    ],
  },
  {
    text: '市场',
    disabled: false,
    children: [
      { text: '南京', id: 4, disabled: false },
      { text: '无锡', id: 5, disabled: false },
      { text: '徐州', id: 6, disabled: false },
    ],
  },
  { text: '运营', disabled: false, children: [] },
  { text: '产品设计', disabled: false, children: [] },
  { text: '人力资源', disabled: false, children: [] },
])
//* API
function fetchPositions() {}
const { refreshing, onRefresh } = useRefresh(fetchPositions)
const children = computed(() => items.value[activedIndex.value]?.children)
const empty = computed(() => isEmpty(children.value))
const router = useRouter()
function onSelect(id: number) {
  activedId.value = id
  router.replace('/task')
}
</script>

<template>
  <div class="h-[calc(100vh-52px)] bg-[var(--van-background-2)]">
    <VanPullRefresh v-model="refreshing" class="h-full" @refresh="onRefresh">
      <VanTreeSelect
        v-model:active-id="activedId"
        v-model:main-active-index="activedIndex"
        :items="items"
        class="h-full!"
      >
        <template #content>
          <div class="h-full pa-16">
            <template v-if="empty">
              <VanEmpty description="No Data" />
            </template>
            <template v-else>
              <div class="children grid grid-cols-2 gap-8">
                <VanButton
                  v-for="i in children" :key="i.id" size="normal" class="line-height-relaxed block! truncate! rounded-xl! pa-4! text-5xl!" :class="[
                    { 'bg-[var(--van-primary-color)]!': i.id === activedId, 'border-none!': i.id === activedId },
                  ]"
                  @click="onSelect(i.id)"
                >
                  {{ i.text }}
                </VanButton>
              </div>
            </template>
          </div>
        </template>
      </VanTreeSelect>
    </VanPullRefresh>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-button .van-button__content) {
  display: inline !important;
}
</style>
