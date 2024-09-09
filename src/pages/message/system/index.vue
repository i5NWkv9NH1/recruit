<script setup lang="ts">
definePage({
  name: 'MessageSystem',
  meta: {
    title: '系统消息',
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
      <VanEmpty description="No Data" />
    </template>
    <template v-else>
      <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
        <VanList v-model="loading" :finished="finished" @load="loadMore">
          <SystemMessage v-for="m in items" :key="m" />
        </VanList>
      </VanPullRefresh>
    </template>
  </div>
</template>
