<script setup lang="ts">
definePage({
  name: 'Message',
  meta: {
    title: '消息通知',
    level: 1,
  },
})
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh } = useRefresh(resetPaginate, resetLoadMore)
resetPaginate()
</script>

<template>
  <div class="mt-4 h-[calc(100vh-64px-36px)] bg-[var(--van-background-2)] pa-16">
    <template v-if="empty">
      <VanEmpty description="No Data" />
    </template>
    <template v-else>
      <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
        <VanList v-model="loading" :finished="finished" @load="loadMore">
          <Message type="system" />
          <Message type="system" />
          <Message v-for="m in items" :key="m" />
        </VanList>
      </VanPullRefresh>
    </template>
  </div>
</template>
