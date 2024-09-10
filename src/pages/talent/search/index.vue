<!-- eslint-disable no-console -->
<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
import { isEmpty } from 'lodash-es'

defineOptions({
  name: 'TalentSearch',
})

definePage({
  name: 'TalentSearch',
  meta: {
    level: 2,
    title: '人才搜索',
    i18n: 'menus.search',
    keepAlive: true,
  },
})

const search = ref('')
const state = reactive({
  history: [],
  hot: ['前端工程师', '系统工程师', 'IT技术人员', '客户经理', '数据库管理员'],
})
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100, false)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh, resetRefresh } = useRefresh(resetPaginate, resetLoadMore)

function updateHistory(searchTerm: string) {
  state.history = [searchTerm, ...state.history.filter(term => term !== searchTerm)]
}
const { loading: searchLoading, reset: resetSearch } = useDebouncedSearch({
  search,
  loadPage,
  resets: [resetRefresh, resetLoadMore, resetPaginate],
  updateHistory,
})

async function _onRefresh() {
  searchLoading.value = true
  await promiseTimeout(1000)
  onRefresh()
  loadPage()
  searchLoading.value = false
}
</script>

<template>
  <div class="pa-16">
    <VanSearch v-model="search" class="search rounded-4xl bg-[var(--van-background-2!)] pl-0!" clear-icon="" autocomplete="off" placeholder="请输入搜索的职位">
      <template v-if="!isEmpty(search)" #right-icon>
        <span @click="resetSearch">取消</span>
      </template>
    </VanSearch>
    <template v-if="search && searchLoading">
      <div class="skeleton my-32 flex flex-col gap-32">
        <VanSkeleton row="4" />
        <VanSkeleton row="4" />
        <VanSkeleton row="4" />
      </div>
    </template>
    <template v-else>
      <template v-if="search && empty">
        <!-- items -->
        <VanEmpty description="No data" />
      </template>
      <template v-else-if="search && !empty">
        <VanPullRefresh v-model="refreshing" @refresh="_onRefresh">
          <VanList v-model:loading="loading" :finished="finished" finished-text="已加载全部" loading-text="加载中。。。" error-text="遇到错误，请刷新重试" @load="loadMore">
            <div class="mt-16 flex flex-col gap-8">
              <template v-for="_item in items" :key="_item">
                <div :data-id="_item" class="task__wrapper">
                  <Talent />
                </div>
              </template>
            </div>
          </VanList>
        </VanPullRefresh>
      </template>
      <template v-else>
        <div class="history">
          <div class="history__headline flex items-center justify-between">
            <h2 class="headline__title text-8xl">
              搜索历史
            </h2>
            <div class="headline__actions">
              <VanIcon name="delete-o" size="18" @click="state.history = []" />
            </div>
          </div>
          <div class="items flex flex-wrap gap-8">
            <VanTag v-for="item in state.history" :key="item" size="large" class="bg-[var(--van-background-2!)]" @click="() => search = (item)">
              {{ item }}
            </VanTag>
          </div>
        </div>
        <div class="hot">
          <div class="hot__headline flex justify-between">
            <h2 class="headline__title text-8xl">
              热门搜索
            </h2>
          </div>
          <div class="items flex flex-wrap gap-8">
            <VanTag v-for="item in state.hot" :key="item" size="large" @click="() => search = (item)">
              {{ item }}
            </VanTag>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
// .search {
//   // background: var(--van-background);
//   // background: transparent !important;
// }
.dark .search :deep(.van-search__content) {
  background: transparent !important;
  // background: var(--van-background-2);
}
.search :deep(.van-search__content) {
  background: unset !important;
}
</style>
