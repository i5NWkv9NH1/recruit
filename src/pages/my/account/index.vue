<!-- eslint-disable no-console -->
<script setup lang="ts">
definePage({
  name: 'MyAccount',
  meta: {
    title: '我的账户',
    level: 2,
    customNavbar: true,
    keepAlive: true,
  },
})
const router = useRouter()
function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const tab = ref(0)
const tabs = reactive([
  { title: '全部', value: 0 },
  { title: '收入', value: 1 },
  { title: '提现', value: 2 },
])
const { items, loadPage, resetPaginate, empty, hasNext } = usePaginationMock(100)
const { loading, finished, loadMore, resetLoadMore } = useLoadMore(hasNext, loadPage)
const { refreshing, onRefresh, resetRefresh } = useRefresh(resetPaginate, resetLoadMore)

async function onRendered() {
  resetRefresh()
  resetPaginate()
}
async function onChange() {
}
</script>

<template>
  <div>
    <VanNavBar title="个人主页" class="navbar bg-[var(--van-primary-color)] text-white!" @click-left="onBack">
      <template #left>
        <div class="i-carbon-chevron-left h-20 w-20" />
      </template>
    </VanNavBar>
    <VanPullRefresh v-model="refreshing" class="min-h-[calc(100vh-52px)]" @refresh="onRefresh">
      <div class="account h-fit bg-[var(--van-primary-color)] pa-16">
        <div class="account__headline w-full flex items-center justify-between text-6xl text-[var(--van-text-color)] font-light">
          <div class="headline__explain flex gap-4">
            <div>账户余额（业务货币）</div>
            <div class="i-carbon-help h-15 w-15" />
          </div>
          <div class="headline__withdraw flex items-center gap-4" @click="router.push('/my/account/withdraw-deposit')">
            <div>提现</div>
            <div class="i-carbon-chevron-right h-15 w-15" />
          </div>
        </div>
        <div class="account-deposit h-150 flex items-center justify-center text-center">
          <div class="text-9xl">
            ¥ 6500.00
          </div>
        </div>
        <div class="w-full flex items-center justify-evenly text-center">
          <div class="flex flex-col gap-8 text-6xl">
            <div class="text-7xl">
              ¥ 0
            </div>
            <div>可用余额</div>
          </div>
          <div class="flex flex-col gap-8 text-6xl">
            <div class="text-7xl">
              ¥ 0
            </div>
            <div class="flex items-center gap-4">
              <div>签约押金（不可用）</div>
              <div class="i-carbon-help h-20 w-20 bg-[white]" />
            </div>
          </div>
        </div>
      </div>
      <div class="tabs">
        <VanTabs v-model:active="tab" animated sticky @rendered="onRendered" @change="onChange">
          <VanTab v-for="_tab in tabs" :key="_tab.value" :title="_tab.title">
            <template v-if="empty">
              <VanEmpty description="No data" />
            </template>
            <template v-else>
              <VanList v-model:loading="loading" :finished="finished" finished-text="已加载全部" loading-text="加载中。。。" @load="loadMore">
                <!-- <AccountCell v-for="(_, index) in items" :key="index" /> -->
                <Task v-for="(_, index) in items" :key="index" />
              </VanList>
            </template>
          </VanTab>
        </VanTabs>
      </div>
    </VanPullRefresh>
  </div>
</template>

<style lang="less" scoped>
.navbar::after {
  display: none;
}
.navbar :deep(.van-nav-bar__title) {
  color: white;
}
</style>
