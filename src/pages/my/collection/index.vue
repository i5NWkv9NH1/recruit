<script setup lang="ts">
definePage({
  name: 'MyCollection',
  meta: {
    title: '我的收藏',
    level: 2,
  },
})
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh } = useRefresh(resetPaginate, resetLoadMore)
resetPaginate()
</script>

<template>
  <div class="pa-16">
    <template v-if="empty">
      <VanEmpty description="No data" />
    </template>
    <template v-else>
      <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
        <VanList v-model:loading="loading" :finished="finished" @load="loadMore">
          <div class="flex flex-col gap-8">
            <Role>
              <template #user>
                <Task v-for="t in items" :key="t" />
              </template>
              <template #enterprise>
                <Talent v-for="t in items" :key="t" />
              </template>
            </Role>
          </div>
        </VanList>
      </VanPullRefresh>
    </template>
  </div>
</template>
