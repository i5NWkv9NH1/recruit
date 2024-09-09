<script setup lang="ts">
//* Page meta
definePage({
  name: 'Task',
  meta: {
    title: '任务',
    level: 1,
    customNavbar: true,
    keepAlive: true,
  },
})
//* State
const router = useRouter()
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
]
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh } = useRefresh(resetPaginate, resetLoadMore)
resetPaginate()
</script>

<template>
  <div class="">
    <VanNavBar>
      <template #left>
        <div class="flex items-center gap-8 border-none!" @click="router.push('/task/city')">
          <VanIcon name="location-o" color="grey" />
          <span>北京</span>
          <VanIcon name="arrow" color="grey" />
        </div>
      </template>

      <template #title>
        <RouterLink to="/task/search">
          <div class="h-30 flex items-center border-b-1 bg-[var(--van-background)] pl-6">
            <VanField readonly placeholder="搜索任务" class="bg-[var(--van-background)]! pa-0!" />
          </div>
        </RouterLink>
      </template>

      <template #right>
        <VanIcon name="location-o" color="grey" />
      </template>
    </VanNavBar>

    <div class="pa-16">
      <VanSwipe lazy-render :autoplay="1000">
        <VanSwipeItem v-for="image in images" :key="image" class="rounded-3xl bg-red">
          <div :style="{ backgroundImage: `url(${image})` }" class="h-150 w-full rounded-2xl bg-cover bg-center bg-no-repeat" />
        </VanSwipeItem>
      </VanSwipe>
    </div>

    <div class="latest position-sticky top-0 z-10 w-full flex items-center justify-between bg-[color:var(--van-background-2)] pa-16">
      <h2 class="latest__title ma-0 text-8xl">
        最新任务
      </h2>
      <div class="flex gap-8 filter">
        <VanButton icon="location-o" icon-position="right" size="small" plain class="border-none!" @click="router.push('/task/position-type')">
          前端工程师
        </VanButton>
        <VanButton icon="location-o" icon-position="right" size="small" plain class="border-none!" @click="router.push('/task/filter')">
          筛选
        </VanButton>
      </div>
    </div>
    <template v-if="empty">
      <VanEmpty description="暂无数据" />
    </template>
    <VanPullRefresh
      v-else
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <VanList
        v-model:loading="loading"
        :finished="finished"
        finished-text="已加载全部"
        loading-text="加载中。。。" error-text="遇到错误，请刷新重试" @load="loadMore"
      >
        <template v-for="(_task, _index) in items" :key="_index">
          <Task />
        </template>
      </VanList>
    </VanPullRefresh>
    <!-- <VanPullRefresh
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <VanList
        v-model:loading="loading"
        :finished="finished"
        offset="100"
        :immediate-check="false"
        :scroller="containerEl"
        @load="onLoad"
      >

        <VanSkeleton :loading="loading" title :row="3" class="my-16" />
        <VanSkeleton :loading="loading" title :row="3" class="my-16" />
        <Task />
        <Task />
        <Task />
        <Task />
      </VanList>
    </VanPullRefresh> -->
  </div>
</template>

<style lang="less" scoped>
.van-nav-bar :deep(.van-nav-bar__left) {
  position: static;
  padding: 0;
  flex: 0.4;
  display: flex;
  justify-content: center;
  height: 100%;
}
.van-nav-bar :deep(.van-nav-bar__title) {
  position: static;
  flex: 1;
  margin: 0;
}
.van-nav-bar :deep(.van-nav-bar__right) {
  position: static;
  flex: 0.2;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 100%;
}
</style>
