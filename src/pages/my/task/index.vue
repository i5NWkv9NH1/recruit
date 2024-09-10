<script setup lang="ts">
definePage({
  name: 'MyTask',
  meta: {
    title: '任务管理',
    level: 2,
  },
})

const tab = ref(0)
const tabs = ref([
  { title: '审核中', value: 0 },
  { title: '已开启', value: 1 },
  { title: '已下架', value: 2 },
  { title: '已关闭', value: 3 },
])
function textColor(value: number) {
  switch (value) {
    case 0:
      return ['text-[var(--van-warnnig-color)]!']
    case 1:
      return ['text-[var(--van-primary-color)]!']
    case 2:
      return ['text-[var(--van-warning-color)]!']
    case 3:
      return ['text-[var(--van-warning-color)]!']
  }
}
// const router = useRouter()
// const store = useUserStore()
// if (store.role !== 'enterprise') {
//   router.push('/:all(.*)')
// }
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh } = useRefresh(resetPaginate, resetLoadMore)

async function onRendered() {
  resetPaginate()
}
async function onChange() {
}
</script>

<template>
  <div>
    <VanTabs v-model:active="tab" @rendered="onRendered" @change="onChange">
      <VanTab v-for="t in tabs" :key="t.value" :title="t.title" :name="t.value">
        <VanPullRefresh
          v-model="refreshing" @refresh="() => {
            onRefresh()
          }"
        >
          <template v-if="empty">
            <VanEmpty description="No Data" />
          </template>
          <template v-else>
            <VanList v-model:loading="loading" :finished="finished" @load="loadMore">
              <div class="items flex flex-col gap-8 pa-16">
                <div v-for="_item in items" :key="_item" class="task flex flex-col gap-16 border-dashed pa-16">
                  <div class="task__headline w-full flex justify-between">
                    <div class="headline__title">
                      <div class="text-7xl">
                        微信小程序开发
                      </div>
                    </div>
                    <div class="headline__status" :class="textColor(1)">
                      审核中
                    </div>
                  </div>
                  <div class="task__info flex gap-16">
                    <div class="text-5xl">
                      2000
                    </div>
                    <div class="text-5xl">
                      |
                    </div>
                    <div class="text-5xl">
                      30天
                    </div>
                    <div class="text-5xl">
                      |
                    </div>
                    <div class="text-5xl">
                      远程
                    </div>
                  </div>
                </div>
              </div>
            </VanList>
          </template>
        </VanPullRefresh>
      </VanTab>
    </VanTabs>

    <VanSticky position="bottom">
      <div class="w-full bg-[var(--van-background-2)] pa-16">
        <VanButton type="primary" to="/my/task/create" block>
          新建任务
        </VanButton>
      </div>
    </VanSticky>
  </div>
</template>
