<script setup lang="ts">
definePage({
  name: 'MyCoupon',
  meta: {
    title: '优惠券',
    level: 2,
  },
})

const bannerUrl = ref('https://s2.loli.net/2024/09/09/O8WtD4mKMHh3Ti2.png')
// expire - 过期, pending - 已领取等待使用, collecting - 可用，未领取
const _coupons = ref([
  { id: 1, status: 'unUsed', type: '体验金', name: '新人平台扶持体验金', expireDate: '2020-03-03' },
  { id: 2, status: 'unCollected', type: '体验金', name: '新人平台扶持体验金', expireDate: '2020-03-03' },
  { id: 2, status: 'unCollected', type: '体验金', name: '新人平台扶持体验金', expireDate: '2020-03-03' },
  { id: 3, status: 'expired', type: '代金券', name: '新人平台扶持体验金', expireDate: '2020-03-03' },
  { id: 4, status: 'expired', type: '代金券', name: '新人平台扶持体验金', expireDate: '2020-03-03' },
])
const { resetPaginate, empty } = usePaginationMock(100)
const { refreshing, onRefresh } = useRefresh()
resetPaginate()
</script>

<template>
  <div class="h-[calc(100vh-52px)] bg-[var(--van-background)]">
    <div class="banner h-220">
      <img :src="bannerUrl" class="h-full w-full">
    </div>
    <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
      <div class="flex flex-col gap-8 pa-16">
        <template v-if="empty">
          <VanEmpty description="No Data" />
        </template>
        <template v-else>
          <div
            v-for="c in _coupons" :key="c.id" class="coupon pos-relative h-100 w-full border-l-10 border-[var(--van-warning-color)] rounded-bl-3xl rounded-tl-3xl border-l-solid bg-[var(--van-background-2)]" :style="{
              filter: c.status === 'expired' && 'grayscale(1)',
              opacity: c.status === 'expired' && 0.5,
            }"
          >
            <div class="h-full w-full flex items-center justify-evenly">
              <div class="h-full flex flex-col items-center justify-center gap-16">
                <div
                  class="text-7xl font-bold" :class="[
                    { 'text-[var(--van-warning-color)]': c.status !== 'expired' },
                  ]"
                >
                  10000
                </div>
                <VanTag
                  class="text-7xl font-bold" :class="[
                    { 'text-[var(--van-warning-color)]!': c.status !== 'expired' },
                  ]" plain
                >
                  {{ c.type }}
                </VanTag>
              </div>

              <div class="flex flex-col items-start justify-center gap-16">
                <div class="text-7xl font-bold">
                  {{ c.name }}
                </div>
                <div class="text-5xl">
                  有效期至：{{ c.expireDate }}
                </div>
              </div>

              <div class="flex flex-col">
                <VanButton size="small" round :plain="c.status !== 'unCollected'" :type="c.status === 'unCollected' ? 'warning' : 'default'" class="z-4 w-60" :disabled="c.status === 'expired'">
                  {{ c.status === 'unCollected' ? '领取' : '去使用' }}
                </VanButton>
              </div>

              <div v-if="c.status === 'expired'" class="expired pos-absolute right-0 top-0">
                <div class="pos-absolute bottom-25 right--10 top-5 rotate-50 pa-5 text-5xl line-height-relaxed">
                  已失效
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </VanPullRefresh>
  </div>
</template>

<style lang="scss" scoped>
.expired {
  width: 50px;
  height: 50px;
  background: var(--van-warning-color);
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    height: 35px;
    width: 150px;
    right: -30px;
    top: 10px;
    background: var(--van-background-2);
    transform: rotate(45deg);
  }
}
</style>
