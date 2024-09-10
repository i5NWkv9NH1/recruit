<script setup lang="ts">
import { isEmpty } from 'lodash-es'
import { definePage } from 'unplugin-vue-router/runtime'
import useUserStore from '@/stores/modules/user'

definePage({
  name: 'Contract',
  query: {
    tab: 0,
  },
  meta: {
    title: '合约',
    level: 1,
  },
})
const route = useRoute<'Contract'>()
const router = useRouter()
const tab = ref()
const tabs = ref([
  { title: '待签约', value: 1 },
  { title: '履约中', value: 2 },
  { title: '已完成', value: 3 },
  { title: '已失效', value: 4 },
])
const store = useUserStore()
if (store.role === 'enterprise') {
  tabs.value.unshift({ title: '待发送', value: 0 })
}
//* Query
//* Fix tabnav actived (extac)
const query = route.query
if (isEmpty(query)) {
  if (store.role === 'user')
    router.replace('/contract?tab=1')
  if (store.role === 'enterprise')
    router.replace('/contract?tab=0')
}
else {
  tab.value = +query.tab
}
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh } = useRefresh(resetPaginate, resetLoadMore)
resetPaginate()

function onRendered() {}
function onChange() {
  router.replace(`/contract?tab=${tab.value}`)
}
</script>

<template>
  <div class="h-[calc(100vh-52px-42px)] bg-[var(--van-background-2)] pa-16">
    <VanTabs v-model:active="tab" @rendered="onRendered" @change="onChange">
      <VanTab v-for="_tab in tabs" :key="_tab.title" :title="_tab.title" :name="_tab.value">
        <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
          <VanList v-model:loading="loading" :finished="finished" @load="loadMore">
            <template v-if="empty">
              <VanEmpty description="No Data" />
            </template>
            <template v-else>
              <Contract v-for="item in items" :key="item" />
            </template>
          </VanList>
        </VanPullRefresh>
      </VanTab>
    </VanTabs>
  </div>
</template>
